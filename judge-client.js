// Judge client — one interface, two backends:
//   1. Local judge (judge.js on the same origin) — fastest, used when available.
//   2. Wandbox web API — free fallback so the site works as a static site (e.g. GitHub Pages).
//
// Both backends resolve to the same result shape:
//   { error }                                        — infrastructure problem
//   { compile: { ok:false, stderr } }                — compilation error
//   { compile: { ok:true }, run: { stdout, stderr, code, timedOut } }
//
// Force a backend with ?judge=local or ?judge=remote in the URL.

(function () {
    'use strict';

    const LOCAL_HEALTH = '/api/health';
    const LOCAL_RUN = '/api/run';
    const WANDBOX_RUN = 'https://wandbox.org/api/compile.json';
    const WANDBOX_LIST = 'https://wandbox.org/api/list.json';
    const COMPILERS = { java: 'openjdk-jdk-22+36', python: 'cpython-3.10.15' };

    const forced = new URLSearchParams(location.search).get('judge');

    const JudgeClient = {
        mode: 'checking', // 'local' | 'remote' | 'offline' | 'checking'
        _remoteOk: undefined,

        async check() {
            if (forced !== 'remote') {
                try {
                    const r = await fetch(LOCAL_HEALTH, { cache: 'no-store' });
                    if (r.ok) { this.mode = 'local'; return this.mode; }
                } catch (e) { /* no local judge */ }
                if (forced === 'local') { this.mode = 'offline'; return this.mode; }
            }
            this.mode = (await this._checkRemote()) ? 'remote' : 'offline';
            return this.mode;
        },

        async _checkRemote() {
            if (this._remoteOk !== undefined) return this._remoteOk;
            try {
                const r = await fetch(WANDBOX_LIST, { cache: 'force-cache' });
                this._remoteOk = r.ok;
            } catch (e) {
                this._remoteOk = false;
            }
            return this._remoteOk;
        },

        label() {
            if (this.mode === 'local') return 'Local judge';
            if (this.mode === 'remote') return 'Web judge';
            if (this.mode === 'offline') return 'Judge offline';
            return 'Checking judge...';
        },

        async run(language, code, stdin) {
            if (this.mode === 'local') return this._runLocal(language, code, stdin);
            if (this.mode === 'remote') return this._runRemote(language, code, stdin);
            return { error: 'Judge is offline.' };
        },

        async _runLocal(language, code, stdin) {
            let res;
            try {
                res = await fetch(LOCAL_RUN, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ language, code, stdin })
                });
            } catch (e) {
                return { error: 'Lost connection to the local judge.' };
            }
            if (!res.ok) {
                let msg = 'Judge returned HTTP ' + res.status;
                try { msg = (await res.json()).error || msg; } catch (e) {}
                return { error: msg };
            }
            return res.json();
        },

        async _runRemote(language, code, stdin) {
            let payload;
            if (language === 'java') {
                // Wandbox names the primary file prog.java, so "public class Main" cannot live
                // there. Send the user's code as Main.java and a tiny launcher as prog.
                payload = {
                    compiler: COMPILERS.java,
                    code: 'public class prog { public static void main(String[] a) throws Exception { Main.main(a); } }',
                    codes: [{ file: 'Main.java', code: code }],
                    stdin: stdin || ''
                };
            } else {
                payload = { compiler: COMPILERS.python, code: code, stdin: stdin || '' };
            }

            const ctrl = new AbortController();
            const t = setTimeout(() => ctrl.abort(), 60000);
            let res;
            try {
                res = await fetch(WANDBOX_RUN, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(payload),
                    signal: ctrl.signal
                });
            } catch (e) {
                return { error: 'Could not reach the web judge — check your internet connection.' };
            } finally {
                clearTimeout(t);
            }
            if (!res.ok) {
                return {
                    error: 'Web judge returned HTTP ' + res.status +
                        (res.status === 429 ? ' — rate limited, wait a few seconds and try again.' : '')
                };
            }

            const r = await res.json();
            const compErr = (r.compiler_error || r.compiler_message || '').trim();
            const ranProgram = (r.program_message !== undefined && r.program_message !== '') ||
                (r.program_output || '') !== '' || (r.program_error || '') !== '';

            // javac writes errors to compiler_error and the program never runs.
            if (compErr && /error/i.test(compErr) && !ranProgram) {
                return { compile: { ok: false, stderr: compErr } };
            }

            const signal = r.signal || '';
            const timedOut = /kill/i.test(signal);
            const codeNum = r.status === '0' ? 0 : (parseInt(r.status, 10) || (signal ? -1 : 1));
            return {
                compile: { ok: true },
                run: {
                    stdout: r.program_output || '',
                    stderr: r.program_error || '',
                    code: codeNum,
                    timedOut: timedOut
                }
            };
        }
    };

    window.JudgeClient = JudgeClient;
})();
