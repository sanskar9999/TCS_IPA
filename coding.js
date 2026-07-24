// TCS IPA Coding Practice — exam-replica logic.
// Grades submissions against hidden test cases via the local judge (judge.js).

(function () {
    'use strict';

    // ---------------- constants ----------------
    const MOCK_DURATION_SEC = 70 * 60;
    const LS_BEST = 'tcs-ipa-coding-best';
    const LS_CODE_PREFIX = 'tcs-ipa-coding-code-';
    const LS_LANG = 'tcs-ipa-coding-lang';

    const STARTER = {
        java: 'import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Write your code here\n        \n    }\n}\n',
        python: '# Read input with input(), print output with print()\n# Write your code here\n\n'
    };

    // ---------------- state ----------------
    let judgeOnline = false;
    let editor = null;
    let currentQ = null;          // question object currently open
    let currentLang = localStorage.getItem(LS_LANG) || 'java';
    let busy = false;             // a run/submit is in flight

    let mode = null;              // 'practice' | 'mock'
    let mock = null;              // { qs:[q,q], idx, submissions:{}, endTime, finished }
    let timerInterval = null;
    let practiceStart = 0;

    // ---------------- helpers ----------------
    const $ = (id) => document.getElementById(id);

    function escapeHtml(s) {
        return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;')
            .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
    }

    function normalizeOutput(s) {
        return (s || '')
            .replace(/\r\n/g, '\n')
            .split('\n')
            .map((l) => l.replace(/[ \t]+$/, ''))
            .join('\n')
            .replace(/\n+$/, '');
    }

    function getBest() {
        try { return JSON.parse(localStorage.getItem(LS_BEST)) || {}; }
        catch (e) { return {}; }
    }

    function saveBest(qid, passed, total, score) {
        const best = getBest();
        const prev = best[qid];
        if (!prev || passed > prev.passed) {
            best[qid] = { passed, total, score };
            localStorage.setItem(LS_BEST, JSON.stringify(best));
        }
    }

    function codeKey(qid, lang) { return LS_CODE_PREFIX + qid + '-' + lang; }

    function loadCode(qid, lang) {
        return localStorage.getItem(codeKey(qid, lang)) || STARTER[lang];
    }

    function saveCurrentCode() {
        if (currentQ && editor) {
            localStorage.setItem(codeKey(currentQ.id, currentLang), editor.getValue());
        }
    }

    // ---------------- theme (reuse quiz setting) ----------------
    (function applyTheme() {
        const theme = localStorage.getItem('tcs-ipa-quiz-theme') || 'classic';
        document.body.classList.remove('theme-light', 'theme-amoled');
        if (theme === 'light') document.body.classList.add('theme-light');
        else if (theme === 'amoled') document.body.classList.add('theme-amoled');
    })();

    // ---------------- judge health ----------------
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
        updateButtons();
    }

    function updateButtons() {
        const locked = busy || !judgeOnline || (mock && mock.finished);
        $('btn-run').disabled = locked;
        $('btn-submit').disabled = locked;
    }

    // ---------------- home screen ----------------
    function renderHome() {
        const best = getBest();
        const oopList = $('oop-list');
        const logicList = $('logic-list');
        const infosysList = $('infosys-list');
        if (oopList) oopList.innerHTML = '';
        if (logicList) logicList.innerHTML = '';
        if (infosysList) infosysList.innerHTML = '';

        CODING_QUESTIONS.forEach((q) => {
            const card = document.createElement('button');
            card.className = 'question-card';
            const b = best[q.id];
            let badge = '';
            if (b) {
                const solved = b.passed === b.total;
                badge = '<span class="score-badge ' + (solved ? 'solved' : 'partial') + '">' +
                    (solved ? 'Solved · ' + q.marks + '/' + q.marks : 'Best · ' + b.score + '/' + q.marks) + '</span>';
            }
            card.innerHTML =
                '<div class="qc-top"><span class="qc-num">Question ' + q.num + '</span>' +
                '<span class="year-chip">' + q.year + '</span></div>' +
                '<div class="qc-title">' + escapeHtml(q.title) + '</div>' +
                '<div class="qc-bottom"><span class="marks-chip marks-' + q.marks + '">' + q.marks + ' Marks</span>' + badge + '</div>';
            card.addEventListener('click', () => openPractice(q));
            
            if (q.type === 'oop' && oopList) {
                oopList.appendChild(card);
            } else if (q.type === 'logic' && logicList) {
                logicList.appendChild(card);
            } else if (q.type === 'infosys' && infosysList) {
                infosysList.appendChild(card);
            }
        });
    }

    // ---------------- editor ----------------
    function ensureEditor() {
        if (editor) return;
        editor = CodeMirror($('editor-host'), {
            value: '',
            mode: 'text/x-java',
            theme: document.body.classList.contains('theme-light') ? 'default' : 'material-darker',
            lineNumbers: true,
            indentUnit: 4,
            tabSize: 4,
            matchBrackets: true,
            autoCloseBrackets: true
        });
        editor.on('change', () => {
            // lightweight autosave (debounced)
            clearTimeout(editor._saveT);
            editor._saveT = setTimeout(saveCurrentCode, 400);
        });
    }

    function setLanguage(lang) {
        saveCurrentCode();
        currentLang = lang;
        localStorage.setItem(LS_LANG, lang);
        $('language-select').value = lang;
        $('editor-note').style.visibility = lang === 'java' ? 'visible' : 'hidden';
        editor.setOption('mode', lang === 'java' ? 'text/x-java' : 'python');
        if (currentQ) editor.setValue(loadCode(currentQ.id, lang));
    }

    // ---------------- problem rendering ----------------
    function renderProblem(q) {
        saveCurrentCode();
        currentQ = q;
        $('exam-problem-title').textContent = 'Q' + q.num + '. ' + q.title;
        $('problem-title').textContent = q.title;
        const mk = $('problem-marks');
        mk.textContent = q.marks + ' Marks';
        mk.className = 'marks-chip marks-' + q.marks;
        $('problem-year').textContent = 'Asked: ' + q.year;

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

        const sample = q.testCases[0];
        $('sample-input').textContent = sample.input;
        $('sample-output').textContent = sample.expected;

        editor.setValue(loadCode(q.id, currentLang));
        editor.setOption('readOnly', mock && mock.finished ? 'nocursor' : false);
        $('results-panel').classList.add('hidden');
        $('results-panel').innerHTML = '';
        document.querySelector('.problem-pane').scrollTop = 0;
        setTimeout(() => editor.refresh(), 30);
    }

    // ---------------- screens ----------------
    function showExamScreen() {
        $('home-screen').classList.add('hidden');
        $('exam-screen').classList.remove('hidden');
    }

    function showHomeScreen() {
        saveCurrentCode();
        stopTimer();
        mode = null;
        mock = null;
        currentQ = null;
        $('exam-screen').classList.add('hidden');
        $('home-screen').classList.remove('hidden');
        $('mock-tabs').classList.add('hidden');
        $('btn-finish-exam').classList.add('hidden');
        renderHome();
        checkJudge();
    }

    // ---------------- practice mode ----------------
    function openPractice(q) {
        mode = 'practice';
        mock = null;
        ensureEditor();
        $('mock-tabs').classList.add('hidden');
        $('btn-finish-exam').classList.add('hidden');
        $('exam-problem-title').style.display = '';
        showExamScreen();
        setLanguage(currentLang);
        renderProblem(q);
        practiceStart = Date.now();
        startTimer();
        updateButtons();
    }

    // ---------------- mock exam mode ----------------
    function startMock() {
        const oop = CODING_QUESTIONS.filter((q) => q.type === 'oop');
        const logic = CODING_QUESTIONS.filter((q) => q.type === 'logic');
        const q1 = oop[Math.floor(Math.random() * oop.length)];
        const q2 = logic[Math.floor(Math.random() * logic.length)];
        mode = 'mock';
        mock = {
            qs: [q1, q2],
            idx: 0,
            submissions: {},
            endTime: Date.now() + MOCK_DURATION_SEC * 1000,
            finished: false
        };
        ensureEditor();
        $('mock-tabs').classList.remove('hidden');
        $('btn-finish-exam').classList.remove('hidden');
        $('exam-problem-title').style.display = 'none';
        document.querySelectorAll('.mock-tab').forEach((t, i) => {
            t.classList.toggle('active', i === 0);
            t.querySelector('.tab-done') && t.querySelector('.tab-done').remove();
        });
        showExamScreen();
        setLanguage(currentLang);
        renderProblem(q1);
        startTimer();
        updateButtons();
    }

    function switchMockTab(idx) {
        if (!mock || idx === mock.idx) return;
        mock.idx = idx;
        document.querySelectorAll('.mock-tab').forEach((t, i) => {
            t.classList.toggle('active', i === idx);
        });
        renderProblem(mock.qs[idx]);
    }

    function markTabSubmitted(idx, allPassed) {
        const tab = document.querySelectorAll('.mock-tab')[idx];
        if (!tab) return;
        let done = tab.querySelector('.tab-done');
        if (!done) {
            done = document.createElement('span');
            done.className = 'tab-done';
            tab.appendChild(done);
        }
        done.textContent = allPassed ? '✓' : '•';
    }

    function finishMock(reason) {
        if (!mock || mock.finished) return;
        mock.finished = true;
        stopTimer();
        saveCurrentCode();
        editor.setOption('readOnly', 'nocursor');
        updateButtons();

        const body = $('summary-body');
        let total = 0;
        let html = '';
        mock.qs.forEach((q, i) => {
            const sub = mock.submissions[q.id];
            const score = sub ? sub.score : 0;
            total += score;
            html += '<div class="summary-row"><span>Problem ' + (i + 1) + ' — ' + escapeHtml(q.title) + '</span>' +
                '<span><strong>' + score + '</strong> / ' + q.marks +
                (sub ? ' &nbsp;(' + sub.passed + '/' + sub.total + ' test cases)' : ' &nbsp;(not submitted)') +
                '</span></div>';
        });
        html += '<div class="summary-total">Total: ' + total + ' / 50</div>';
        if (reason === 'timeup') {
            html = '<p style="color:var(--danger-base);font-weight:600;margin-bottom:12px;">Time is up! Scores are based on solutions you submitted.</p>' + html;
        } else {
            html = '<p style="color:var(--text-secondary);margin-bottom:12px;">Scores are based on solutions you submitted.</p>' + html;
        }
        $('summary-title').textContent = reason === 'timeup' ? "Time's Up — Exam Over" : 'Exam Finished';
        body.innerHTML = html;
        $('summary-modal').classList.remove('hidden');
    }

    // ---------------- timer ----------------
    function startTimer() {
        stopTimer();
        updateTimerDisplay();
        timerInterval = setInterval(updateTimerDisplay, 1000);
    }

    function stopTimer() {
        if (timerInterval) { clearInterval(timerInterval); timerInterval = null; }
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

    function updateTimerDisplay() {
        const el = $('exam-timer');
        if (mode === 'mock' && mock) {
            const remain = (mock.endTime - Date.now()) / 1000;
            el.textContent = fmtTime(remain);
            el.className = 'exam-timer' + (remain <= 300 ? ' danger' : remain <= 600 ? ' warn' : '');
            if (remain <= 0 && !mock.finished) finishMock('timeup');
        } else {
            el.textContent = fmtTime((Date.now() - practiceStart) / 1000);
            el.className = 'exam-timer';
        }
    }

    // ---------------- code execution ----------------
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
        let label = run.timedOut ? 'Time Limit Exceeded (infinite loop or waiting for more input?)' : 'Runtime Error';
        return '<div class="result-status fail">' + label + '</div>' +
            (run.stderr ? '<pre class="io-block">' + escapeHtml(run.stderr.slice(0, 4000)) + '</pre>' : '') +
            (run.stdout ? '<h4 style="margin-top:10px;font-size:0.78rem;color:var(--text-secondary);">Partial output</h4><pre class="io-block">' + escapeHtml(run.stdout.slice(0, 4000)) + '</pre>' : '');
    }

    async function onRun() {
        if (busy || !judgeOnline || !currentQ) return;
        busy = true;
        updateButtons();
        saveCurrentCode();

        const useCustom = $('chk-custom-input').checked;
        const stdin = useCustom ? $('custom-input').value : currentQ.testCases[0].input;
        showResults('<div class="result-status info"><span class="running-spinner"></span>Compiling and running...</div>');

        try {
            const result = await execute(editor.getValue(), stdin);
            if (result.error) {
                showResults('<div class="result-status fail">' + escapeHtml(result.error) + '</div>');
            } else if (result.compile && !result.compile.ok) {
                showResults(compileErrorHtml(result.compile.stderr));
            } else if (result.run.timedOut || result.run.code !== 0) {
                showResults(runtimeErrorHtml(result.run));
            } else {
                let html = '';
                if (useCustom) {
                    html = '<div class="result-status info">Program Output (custom input)</div>' +
                        '<pre class="io-block">' + escapeHtml(result.run.stdout || '(no output)') + '</pre>';
                } else {
                    const ok = normalizeOutput(result.run.stdout) === normalizeOutput(currentQ.testCases[0].expected);
                    html = '<div class="result-status ' + (ok ? 'pass' : 'fail') + '">' +
                        (ok ? 'Sample Test Case Passed ✓' : 'Sample Test Case Failed ✗') + '</div>' +
                        '<div class="result-detail">' +
                        '<h4>Your Output</h4><pre class="io-block">' + escapeHtml(result.run.stdout || '(no output)') + '</pre>' +
                        '<h4>Expected Output</h4><pre class="io-block">' + escapeHtml(currentQ.testCases[0].expected) + '</pre>' +
                        '</div>';
                }
                showResults(html);
            }
        } catch (e) {
            showResults('<div class="result-status fail">' + escapeHtml(e.message) + '</div>');
            checkJudge();
        } finally {
            busy = false;
            updateButtons();
        }
    }

    async function onSubmit() {
        if (busy || !judgeOnline || !currentQ) return;
        busy = true;
        updateButtons();
        saveCurrentCode();

        const q = currentQ;
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
                if (result.compile && !result.compile.ok) {
                    compileFailed = result.compile.stderr;
                    break;
                }
                const failedRun = result.run.timedOut || result.run.code !== 0;
                const passed = !failedRun &&
                    normalizeOutput(result.run.stdout) === normalizeOutput(tcs[i].expected);
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
            updateButtons();
            return;
        }

        if (compileFailed !== null) {
            showResults(compileErrorHtml(compileFailed));
            busy = false;
            updateButtons();
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

        // Only the sample test case reveals details, like the real exam.
        const sampleFail = results[0] && !results[0].passed;
        if (sampleFail) {
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

        saveBest(q.id, passed, total, score);
        if (mode === 'mock' && mock && !mock.finished) {
            const prev = mock.submissions[q.id];
            if (!prev || passed > prev.passed) {
                mock.submissions[q.id] = { passed, total, score };
            }
            markTabSubmitted(mock.qs.indexOf(q), passed === total);
        }

        busy = false;
        updateButtons();
    }

    // ---------------- events ----------------
    $('btn-mock-exam').addEventListener('click', () => {
        if (!judgeOnline) {
            alert('The judge is offline — start it first (double-click StartCodingPractice.bat), then reload this page from http://localhost:8123/coding.html');
            return;
        }
        startMock();
    });

    $('btn-exit-exam').addEventListener('click', () => {
        if (mode === 'mock' && mock && !mock.finished) {
            if (!confirm('Exit the mock exam? Your attempt will end without a final score.')) return;
        }
        showHomeScreen();
    });

    $('btn-finish-exam').addEventListener('click', () => {
        if (mock && !mock.finished) {
            if (!confirm('Finish the exam now? Only submitted solutions count.')) return;
            finishMock('manual');
        }
    });

    document.querySelectorAll('.mock-tab').forEach((tab) => {
        tab.addEventListener('click', () => switchMockTab(parseInt(tab.dataset.idx, 10)));
    });

    $('btn-summary-close').addEventListener('click', () => {
        $('summary-modal').classList.add('hidden');
        showHomeScreen();
    });

    $('language-select').addEventListener('change', (e) => setLanguage(e.target.value));

    $('btn-reset-code').addEventListener('click', () => {
        if (!currentQ) return;
        if (confirm('Reset the editor to the starter template? Your current code for this problem will be lost.')) {
            editor.setValue(STARTER[currentLang]);
            saveCurrentCode();
        }
    });

    $('chk-custom-input').addEventListener('change', (e) => {
        $('custom-input').classList.toggle('hidden', !e.target.checked);
    });

    $('btn-run').addEventListener('click', onRun);
    $('btn-submit').addEventListener('click', onSubmit);

    window.addEventListener('beforeunload', (e) => {
        saveCurrentCode();
        if (mode === 'mock' && mock && !mock.finished) {
            e.preventDefault();
            e.returnValue = '';
        }
    });

    // ---------------- init ----------------
    renderHome();
    checkJudge();
    setInterval(checkJudge, 15000);
})();
