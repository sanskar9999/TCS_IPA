// TCS IPA Full Exam Simulation
// Section A: 50 MCQs (sub-section quotas, 50 min) -> Section B: 2 coding problems (70 min) -> report /100.

(function () {
    'use strict';

    // ---------------- config ----------------
    const params = new URLSearchParams(location.search);
    const MCQ_MINUTES = parseFloat(params.get('mcqmin')) || 50;
    const CODING_MINUTES = parseFloat(params.get('codemin')) || 70;

    const LS_BEST = 'tcs-ipa-coding-best';

    const STARTER = {
        java: 'import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your code here\n        \n    }\n}\n',
        python: '# Read input with input(), print output with print()\n# Write your code here\n\n'
    };

    // Sub-section plan (matches the real IPA pattern). Language row depends on the chosen track.
    function buildMcqPlan(track) {
        return [
            { label: 'KYT', pick: 5, match: (c) => c === 'KYT' },
            { label: 'BizSkill', pick: 5, match: (c) => c === 'BizSkill' },
            { label: 'UI', pick: 10, match: (c) => c === 'UI' },
            { label: 'Unix', pick: 5, match: (c) => c === 'Unix' },
            track === 'python'
                ? { label: 'Python', pick: 15, match: (c) => c === 'Python' || c === 'Java / Python' }
                : { label: 'Java', pick: 15, match: (c) => c === 'Java' || c === 'Java / Python' },
            { label: 'SQL / PLSQL', pick: 10, match: (c) => c === 'SQL / PLSQL' }
        ];
    }

    // ---------------- state ----------------
    let judgeOnline = false;
    let phase = 'intro'; // intro | mcq | coding | report
    let track = 'java';

    let mcqItems = [];   // [{ q, sub, answer }]
    let mcqIdx = 0;
    let mcqEndTime = 0;

    let codeQs = [];     // [logic15, oop35]
    let codeIdx = 0;
    let codeSubs = {};   // qid -> { passed, total, score }
    let codeEndTime = 0;
    let codeStore = {};  // qid -> { java: code, python: code }
    let currentLang = 'java';
    let editor = null;
    let busy = false;

    let timerInterval = null;

    const $ = (id) => document.getElementById(id);

    // ---------------- helpers ----------------
    function escapeHtml(s) {
        return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;')
            .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
    }

    function shuffle(arr) {
        const a = arr.slice();
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    }

    function pickRandom(pool, n) {
        return shuffle(pool).slice(0, n);
    }

    function normalizeOutput(s) {
        return (s || '')
            .replace(/\r\n/g, '\n')
            .split('\n')
            .map((l) => l.replace(/[ \t]+$/, ''))
            .join('\n')
            .replace(/\n+$/, '');
    }

    function fmtTime(totalSec) {
        totalSec = Math.max(0, Math.floor(totalSec));
        const h = Math.floor(totalSec / 3600);
        const m = Math.floor((totalSec % 3600) / 60);
        const s = totalSec % 60;
        const mm = String(m).padStart(2, '0');
        const ss = String(s).padStart(2, '0');
        return h > 0 ? h + ':' + mm + ':' + ss : mm + ':' + ss;
    }

    function saveBest(qid, passed, total, score) {
        let best;
        try { best = JSON.parse(localStorage.getItem(LS_BEST)) || {}; } catch (e) { best = {}; }
        const prev = best[qid];
        if (!prev || passed > prev.passed) {
            best[qid] = { passed, total, score };
            localStorage.setItem(LS_BEST, JSON.stringify(best));
        }
    }

    // ---------------- theme ----------------
    (function applyTheme() {
        const theme = localStorage.getItem('tcs-ipa-quiz-theme') || 'classic';
        document.body.classList.remove('theme-light', 'theme-amoled');
        if (theme === 'light') document.body.classList.add('theme-light');
        else if (theme === 'amoled') document.body.classList.add('theme-amoled');
    })();

    // ---------------- judge ----------------
    async function checkJudge() {
        await JudgeClient.check();
        judgeOnline = JudgeClient.mode !== 'offline';
        const pill = $('judge-status');
        if (pill) {
            pill.textContent = JudgeClient.label();
            pill.className = 'judge-status ' + (judgeOnline ? 'judge-online' : 'judge-offline');
        }
        $('judge-offline-banner').classList.toggle('hidden', judgeOnline);
        const dot = $('exam-judge-dot');
        if (dot) dot.className = 'judge-dot ' + (judgeOnline ? 'online' : 'offline');
    }

    // ---------------- timers ----------------
    function startTicker() {
        stopTicker();
        tick();
        timerInterval = setInterval(tick, 1000);
    }
    function stopTicker() {
        if (timerInterval) { clearInterval(timerInterval); timerInterval = null; }
    }
    function styleTimer(el, remain) {
        el.className = 'exam-timer' + (remain <= 300 ? ' danger' : remain <= 600 ? ' warn' : '');
    }
    function tick() {
        if (phase === 'mcq') {
            const remain = (mcqEndTime - Date.now()) / 1000;
            $('mcq-timer').textContent = fmtTime(remain);
            styleTimer($('mcq-timer'), remain);
            if (remain <= 0) submitMcq(true);
        } else if (phase === 'coding') {
            const remain = (codeEndTime - Date.now()) / 1000;
            $('code-timer').textContent = fmtTime(remain);
            styleTimer($('code-timer'), remain);
            if (remain <= 0) finishExam(true);
        }
    }

    // ================= SECTION A: MCQ =================
    function buildMcqPaper() {
        const plan = buildMcqPlan(track);
        mcqItems = [];
        plan.forEach((sub) => {
            const pool = questionsData.filter((q) => sub.match(q.category));
            pickRandom(pool, sub.pick).forEach((q) => {
                mcqItems.push({ q, sub: sub.label, answer: null });
            });
        });
    }

    function startMcq() {
        phase = 'mcq';
        buildMcqPaper();
        mcqIdx = 0;
        mcqEndTime = Date.now() + MCQ_MINUTES * 60 * 1000;
        $('intro-screen').classList.add('hidden');
        $('mcq-screen').classList.remove('hidden');
        renderPalette();
        renderMcq();
        startTicker();
    }

    function renderMcq() {
        const item = mcqItems[mcqIdx];
        $('mcq-subsection').textContent = item.sub;
        $('mcq-progress').textContent = 'Question ' + (mcqIdx + 1) + ' of ' + mcqItems.length;
        $('mcq-question').textContent = item.q.question;

        const box = $('mcq-options');
        box.innerHTML = '';
        item.q.options.forEach((opt) => {
            const btn = document.createElement('button');
            btn.className = 'mcq-option' + (item.answer === opt.id ? ' selected' : '');
            const letter = document.createElement('span');
            letter.className = 'opt-letter';
            letter.textContent = opt.id;
            const text = document.createElement('span');
            text.textContent = opt.text;
            btn.appendChild(letter);
            btn.appendChild(text);
            btn.addEventListener('click', () => {
                item.answer = opt.id;
                renderMcq();
                updatePalette();
            });
            box.appendChild(btn);
        });

        $('btn-mcq-prev').disabled = mcqIdx === 0;
        $('btn-mcq-next').textContent = mcqIdx === mcqItems.length - 1 ? 'Last Question' : 'Next';
        $('btn-mcq-next').disabled = mcqIdx === mcqItems.length - 1;
        updatePalette();
        document.querySelector('.mcq-question-pane').scrollTop = 0;
    }

    function renderPalette() {
        const pal = $('mcq-palette');
        pal.innerHTML = '';
        mcqItems.forEach((item, i) => {
            const b = document.createElement('button');
            b.className = 'pal-btn';
            b.textContent = i + 1;
            b.title = item.sub;
            b.addEventListener('click', () => { mcqIdx = i; renderMcq(); });
            pal.appendChild(b);
        });
    }

    function updatePalette() {
        const btns = $('mcq-palette').children;
        let answered = 0;
        mcqItems.forEach((item, i) => {
            const b = btns[i];
            b.className = 'pal-btn' + (item.answer ? ' answered' : '') + (i === mcqIdx ? ' current' : '');
            if (item.answer) answered++;
        });
        $('mcq-answered-count').textContent = answered + ' / ' + mcqItems.length + ' answered';
    }

    function submitMcq(auto) {
        if (phase !== 'mcq') return;
        if (!auto) {
            const unanswered = mcqItems.filter((i) => !i.answer).length;
            const msg = unanswered > 0
                ? 'You have ' + unanswered + ' unanswered question' + (unanswered === 1 ? '' : 's') + '. Submit Section A and move to coding? You cannot come back.'
                : 'Submit Section A and move to coding? You cannot come back.';
            if (!confirm(msg)) return;
        }
        startCoding();
    }

    // ================= SECTION B: CODING =================
    function startCoding() {
        phase = 'coding';
        const logic = CODING_QUESTIONS.filter((q) => q.type === 'logic');
        const oop = CODING_QUESTIONS.filter((q) => q.type === 'oop');
        codeQs = [
            logic[Math.floor(Math.random() * logic.length)],
            oop[Math.floor(Math.random() * oop.length)]
        ];
        codeIdx = 0;
        codeSubs = {};
        codeStore = {};
        currentLang = track;
        codeEndTime = Date.now() + CODING_MINUTES * 60 * 1000;

        $('mcq-screen').classList.add('hidden');
        $('coding-screen').classList.remove('hidden');
        $('language-select').value = currentLang;

        if (!editor) {
            editor = CodeMirror($('editor-host'), {
                value: '',
                mode: currentLang === 'java' ? 'text/x-java' : 'python',
                theme: document.body.classList.contains('theme-light') ? 'default' : 'material-darker',
                lineNumbers: true,
                indentUnit: 4,
                tabSize: 4,
                matchBrackets: true,
                autoCloseBrackets: true
            });
            editor.on('change', () => {
                if (codeQs[codeIdx]) {
                    codeStore[codeQs[codeIdx].id] = codeStore[codeQs[codeIdx].id] || {};
                    codeStore[codeQs[codeIdx].id][currentLang] = editor.getValue();
                }
            });
        }
        renderCodeProblem();
        startTicker();
    }

    function getStoredCode(qid, lang) {
        return (codeStore[qid] && codeStore[qid][lang]) || STARTER[lang];
    }

    function renderCodeProblem() {
        const q = codeQs[codeIdx];
        const mk = $('problem-marks');
        mk.textContent = q.marks + ' Marks';
        mk.className = 'marks-chip marks-' + q.marks;
        $('problem-title').textContent = q.title;

        const stmt = $('problem-statement');
        stmt.innerHTML = '';
        q.statement.forEach((sec) => {
            const div = document.createElement('div');
            div.className = 'stmt-section';
            const h = document.createElement('h3');
            h.textContent = sec.h;
            const p = document.createElement('p');
            p.textContent = sec.t;
            div.appendChild(h);
            div.appendChild(p);
            stmt.appendChild(div);
        });
        $('sample-input').textContent = q.testCases[0].input;
        $('sample-output').textContent = q.testCases[0].expected;

        editor.setValue(getStoredCode(q.id, currentLang));
        $('editor-note').style.visibility = currentLang === 'java' ? 'visible' : 'hidden';
        editor.setOption('mode', currentLang === 'java' ? 'text/x-java' : 'python');
        $('results-panel').classList.add('hidden');
        $('results-panel').innerHTML = '';
        document.querySelector('.problem-pane').scrollTop = 0;
        document.querySelectorAll('#exam-code-tabs .mock-tab').forEach((t, i) => {
            t.classList.toggle('active', i === codeIdx);
        });
        setTimeout(() => editor.refresh(), 30);
        updateCodeButtons();
    }

    function updateCodeButtons() {
        const locked = busy || !judgeOnline || phase !== 'coding';
        $('btn-run').disabled = locked;
        $('btn-submit').disabled = locked;
    }

    function markTabSubmitted(idx, allPassed) {
        const tab = document.querySelectorAll('#exam-code-tabs .mock-tab')[idx];
        if (!tab) return;
        let done = tab.querySelector('.tab-done');
        if (!done) {
            done = document.createElement('span');
            done.className = 'tab-done';
            tab.appendChild(done);
        }
        done.textContent = allPassed ? '✓' : '•';
    }

    function execute(code, stdin) {
        return JudgeClient.run(currentLang, code, stdin);
    }

    function showResults(html) {
        const panel = $('results-panel');
        panel.innerHTML = html;
        panel.classList.remove('hidden');
        panel.scrollTop = 0;
    }

    function compileErrorHtml(stderr) {
        return '<div class="result-status fail">Compilation Error</div>' +
            '<pre class="io-block">' + escapeHtml(stderr) + '</pre>';
    }

    function runtimeErrorHtml(run) {
        const label = run.timedOut ? 'Time Limit Exceeded (infinite loop or waiting for more input?)' : 'Runtime Error';
        return '<div class="result-status fail">' + label + '</div>' +
            (run.stderr ? '<pre class="io-block">' + escapeHtml(run.stderr.slice(0, 4000)) + '</pre>' : '') +
            (run.stdout ? '<h4 style="margin-top:10px;font-size:0.78rem;color:var(--text-secondary);">Partial output</h4><pre class="io-block">' + escapeHtml(run.stdout.slice(0, 4000)) + '</pre>' : '');
    }

    async function onRun() {
        if (busy || !judgeOnline || phase !== 'coding') return;
        busy = true;
        updateCodeButtons();
        const q = codeQs[codeIdx];
        const useCustom = $('chk-custom-input').checked;
        const stdin = useCustom ? $('custom-input').value : q.testCases[0].input;
        showResults('<div class="result-status info"><span class="running-spinner"></span>Compiling and running...</div>');
        try {
            const result = await execute(editor.getValue(), stdin);
            if (result.error) {
                showResults('<div class="result-status fail">' + escapeHtml(result.error) + '</div>');
            } else if (result.compile && !result.compile.ok) {
                showResults(compileErrorHtml(result.compile.stderr));
            } else if (result.run.timedOut || result.run.code !== 0) {
                showResults(runtimeErrorHtml(result.run));
            } else if (useCustom) {
                showResults('<div class="result-status info">Program Output (custom input)</div>' +
                    '<pre class="io-block">' + escapeHtml(result.run.stdout || '(no output)') + '</pre>');
            } else {
                const ok = normalizeOutput(result.run.stdout) === normalizeOutput(q.testCases[0].expected);
                showResults('<div class="result-status ' + (ok ? 'pass' : 'fail') + '">' +
                    (ok ? 'Sample Test Case Passed ✓' : 'Sample Test Case Failed ✗') + '</div>' +
                    '<div class="result-detail">' +
                    '<h4>Your Output</h4><pre class="io-block">' + escapeHtml(result.run.stdout || '(no output)') + '</pre>' +
                    '<h4>Expected Output</h4><pre class="io-block">' + escapeHtml(q.testCases[0].expected) + '</pre></div>');
            }
        } catch (e) {
            showResults('<div class="result-status fail">' + escapeHtml(e.message) + '</div>');
            checkJudge();
        } finally {
            busy = false;
            updateCodeButtons();
        }
    }

    async function onSubmit() {
        if (busy || !judgeOnline || phase !== 'coding') return;
        busy = true;
        updateCodeButtons();

        const q = codeQs[codeIdx];
        const code = editor.getValue();
        const tcs = q.testCases;
        const results = [];
        let compileFailed = null;

        try {
            for (let i = 0; i < tcs.length; i++) {
                showResults('<div class="result-status info"><span class="running-spinner"></span>Running test case ' +
                    (i + 1) + ' of ' + tcs.length + '...</div>');
                const result = await execute(code, tcs[i].input);
                if (result.error) throw new Error(result.error);
                if (result.compile && !result.compile.ok) { compileFailed = result.compile.stderr; break; }
                const failedRun = result.run.timedOut || result.run.code !== 0;
                const passed = !failedRun && normalizeOutput(result.run.stdout) === normalizeOutput(tcs[i].expected);
                results.push({ passed, run: result.run });
                // be polite to the web judge between test cases
                if (JudgeClient.mode === 'remote' && i < tcs.length - 1) {
                    await new Promise((r) => setTimeout(r, 500));
                }
            }
        } catch (e) {
            showResults('<div class="result-status fail">' + escapeHtml(e.message) + '</div>');
            checkJudge();
            busy = false;
            updateCodeButtons();
            return;
        }

        if (compileFailed !== null) {
            showResults(compileErrorHtml(compileFailed));
            busy = false;
            updateCodeButtons();
            return;
        }

        const passed = results.filter((r) => r.passed).length;
        const total = tcs.length;
        const score = Math.round(q.marks * passed / total);

        let html = '<div class="result-status ' + (passed === total ? 'pass' : 'fail') + '">' +
            (passed === total ? 'All Test Cases Passed ✓' : passed + ' of ' + total + ' Test Cases Passed') + '</div>';
        results.forEach((r, i) => {
            const label = i === 0 ? 'Test Case 1 (Sample)' : 'Test Case ' + (i + 1) + ' (Hidden)';
            html += '<div class="tc-row ' + (r.passed ? 'pass' : 'fail') + '"><span>' + label + '</span>' +
                '<span class="tc-verdict">' + (r.passed ? 'Passed' : 'Failed') + '</span></div>';
        });
        if (results[0] && !results[0].passed) {
            const r0 = results[0];
            if (r0.run.timedOut) {
                html += '<div class="result-detail"><h4>Sample test case</h4><p style="font-size:0.85rem;color:var(--text-secondary);">Time limit exceeded.</p></div>';
            } else if (r0.run.code !== 0) {
                html += '<div class="result-detail"><h4>Sample test case — runtime error</h4><pre class="io-block">' + escapeHtml((r0.run.stderr || '').slice(0, 3000)) + '</pre></div>';
            } else {
                html += '<div class="result-detail">' +
                    '<h4>Your Output (sample)</h4><pre class="io-block">' + escapeHtml(r0.run.stdout || '(no output)') + '</pre>' +
                    '<h4>Expected Output (sample)</h4><pre class="io-block">' + escapeHtml(tcs[0].expected) + '</pre></div>';
            }
        }
        html += '<div class="score-line">Score: ' + score + ' / ' + q.marks + ' marks</div>';
        showResults(html);

        const prev = codeSubs[q.id];
        if (!prev || passed > prev.passed) codeSubs[q.id] = { passed, total, score };
        markTabSubmitted(codeIdx, passed === total);
        saveBest(q.id, passed, total, score);

        busy = false;
        updateCodeButtons();
    }

    // ================= REPORT =================
    function finishExam(auto) {
        if (phase !== 'coding') return;
        if (!auto) {
            const notSubmitted = codeQs.filter((q) => !codeSubs[q.id]).length;
            const msg = notSubmitted > 0
                ? notSubmitted + ' coding problem(s) not submitted — they will score 0. Finish the exam?'
                : 'Finish the exam and see your report?';
            if (!confirm(msg)) return;
        }
        phase = 'report';
        stopTicker();
        $('coding-screen').classList.add('hidden');
        $('report-screen').classList.remove('hidden');
        renderReport(auto);
        window.scrollTo(0, 0);
    }

    function renderReport(timedOut) {
        // MCQ scoring
        const subTotals = {};
        let mcqScore = 0;
        const wrong = [];
        mcqItems.forEach((item) => {
            if (!subTotals[item.sub]) subTotals[item.sub] = { got: 0, max: 0 };
            subTotals[item.sub].max++;
            const correctOpt = item.q.options.find((o) => o.isCorrect);
            if (item.answer === correctOpt.id) {
                subTotals[item.sub].got++;
                mcqScore++;
            } else {
                wrong.push({ item, correctOpt });
            }
        });

        // Coding scoring
        let codeScore = 0;
        codeQs.forEach((q) => { codeScore += codeSubs[q.id] ? codeSubs[q.id].score : 0; });

        const total = mcqScore + codeScore;
        const pct = Math.round(total);

        let html = '';
        if (timedOut) {
            html += '<div class="judge-banner" style="margin-top:20px;">Time ran out — the exam was auto-submitted.</div>';
        }

        html += '<div class="report-card report-total">' +
            '<div class="rt-score">' + total + ' / 100</div>' +
            '<div class="rt-pct">MCQ ' + mcqScore + '/50 &nbsp;·&nbsp; Coding ' + codeScore + '/50</div>' +
            '<span class="rt-badge ' + (pct >= 80 ? 'pass' : 'fail') + '">' +
            (pct >= 80 ? '✓ Above the 80% target' : pct + '% — target is 80%') + '</span></div>';

        // MCQ breakdown
        html += '<div class="report-card"><h2>Section A — MCQ Breakdown</h2><table class="report-table">' +
            '<tr><th>Sub-section</th><th>Score</th></tr>';
        Object.keys(subTotals).forEach((sub) => {
            html += '<tr><td>' + escapeHtml(sub) + '</td><td>' + subTotals[sub].got + ' / ' + subTotals[sub].max + '</td></tr>';
        });
        html += '<tr class="row-strong"><td>Total</td><td>' + mcqScore + ' / 50</td></tr></table></div>';

        // Coding breakdown
        html += '<div class="report-card"><h2>Section B — Coding Breakdown</h2><table class="report-table">' +
            '<tr><th>Problem</th><th>Test Cases</th><th>Marks</th></tr>';
        codeQs.forEach((q, i) => {
            const sub = codeSubs[q.id];
            html += '<tr><td>Problem ' + (i + 1) + ' — ' + escapeHtml(q.title) + '</td>' +
                '<td>' + (sub ? sub.passed + ' / ' + sub.total : 'not submitted') + '</td>' +
                '<td>' + (sub ? sub.score : 0) + ' / ' + q.marks + '</td></tr>';
        });
        html += '<tr class="row-strong"><td>Total</td><td></td><td>' + codeScore + ' / 50</td></tr></table></div>';

        // Wrong answer review
        if (wrong.length > 0) {
            html += '<div class="report-card report-review"><details><summary>Review incorrect / unanswered MCQs (' + wrong.length + ')</summary>';
            wrong.forEach(({ item, correctOpt }) => {
                const yourOpt = item.answer ? item.q.options.find((o) => o.id === item.answer) : null;
                html += '<div class="review-item">' +
                    '<span class="rv-cat">' + escapeHtml(item.sub) + '</span>' +
                    '<div class="rv-q">' + escapeHtml(item.q.question) + '</div>' +
                    '<div class="rv-yours">Your answer: ' + (yourOpt ? escapeHtml(yourOpt.id + '. ' + yourOpt.text) : '(not answered)') + '</div>' +
                    '<div class="rv-correct">Correct: ' + escapeHtml(correctOpt.id + '. ' + correctOpt.text) + '</div>' +
                    '</div>';
            });
            html += '</details></div>';
        }

        $('report-body').innerHTML = html;
    }

    // ---------------- events ----------------
    $('btn-start-exam').addEventListener('click', () => {
        track = document.querySelector('input[name="track"]:checked').value;
        if (!judgeOnline && !confirm('The judge is offline, so Section B (coding) cannot be graded. Start anyway?')) return;
        startMcq();
    });

    $('btn-mcq-prev').addEventListener('click', () => { if (mcqIdx > 0) { mcqIdx--; renderMcq(); } });
    $('btn-mcq-next').addEventListener('click', () => { if (mcqIdx < mcqItems.length - 1) { mcqIdx++; renderMcq(); } });
    $('btn-mcq-clear').addEventListener('click', () => { mcqItems[mcqIdx].answer = null; renderMcq(); });
    $('btn-submit-mcq').addEventListener('click', () => submitMcq(false));

    document.querySelectorAll('#exam-code-tabs .mock-tab').forEach((tab) => {
        tab.addEventListener('click', () => {
            const idx = parseInt(tab.dataset.idx, 10);
            if (idx !== codeIdx) { codeIdx = idx; renderCodeProblem(); }
        });
    });

    $('language-select').addEventListener('change', (e) => {
        currentLang = e.target.value;
        renderCodeProblem();
    });

    $('chk-custom-input').addEventListener('change', (e) => {
        $('custom-input').classList.toggle('hidden', !e.target.checked);
    });

    $('btn-run').addEventListener('click', onRun);
    $('btn-submit').addEventListener('click', onSubmit);
    $('btn-finish-exam').addEventListener('click', () => finishExam(false));

    window.addEventListener('beforeunload', (e) => {
        if (phase === 'mcq' || phase === 'coding') {
            e.preventDefault();
            e.returnValue = '';
        }
    });

    // ---------------- init ----------------
    $('mcq-mins-label').textContent = MCQ_MINUTES;
    $('code-mins-label').textContent = CODING_MINUTES;
    checkJudge();
    setInterval(checkJudge, 15000);
})();
