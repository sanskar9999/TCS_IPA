// TCS IPA Local Judge — zero-dependency Node.js server.
// Serves the static site AND compiles/runs Java & Python locally, just like the exam grader.
//
// Usage:  node judge.js       then open http://localhost:8123/coding.html
// (or double-click StartCodingPractice.bat)

const http = require('http');
const fs = require('fs');
const path = require('path');
const os = require('os');
const { spawn, spawnSync } = require('child_process');

const PORT = parseInt(process.env.PORT, 10) || 8123;
const ROOT = __dirname;
const COMPILE_TIMEOUT_MS = 30000;
const RUN_TIMEOUT_MS = 8000;
const MAX_OUTPUT_BYTES = 256 * 1024;

const MIME = {
    '.html': 'text/html; charset=utf-8',
    '.css': 'text/css; charset=utf-8',
    '.js': 'text/javascript; charset=utf-8',
    '.json': 'application/json; charset=utf-8',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon',
    '.txt': 'text/plain; charset=utf-8',
    '.pdf': 'application/pdf'
};

// ---------- process runner with timeout ----------
function runProcess(cmd, args, opts) {
    return new Promise((resolve) => {
        const child = spawn(cmd, args, {
            cwd: opts.cwd,
            windowsHide: true
        });
        let stdout = '';
        let stderr = '';
        let timedOut = false;
        let settled = false;

        const timer = setTimeout(() => {
            timedOut = true;
            try { child.kill('force' in child.kill ? undefined : 'SIGKILL'); } catch (e) {}
            try { child.kill(); } catch (e) {}
            // On Windows, kill the whole process tree (java spawns a JVM)
            if (process.platform === 'win32' && child.pid) {
                try { spawnSync('taskkill', ['/pid', String(child.pid), '/T', '/F'], { windowsHide: true }); } catch (e) {}
            }
        }, opts.timeoutMs);

        child.stdout.on('data', (d) => {
            if (stdout.length < MAX_OUTPUT_BYTES) stdout += d.toString();
        });
        child.stderr.on('data', (d) => {
            if (stderr.length < MAX_OUTPUT_BYTES) stderr += d.toString();
        });
        child.on('error', (err) => {
            if (settled) return;
            settled = true;
            clearTimeout(timer);
            resolve({ error: String(err), stdout: '', stderr: '', code: -1, timedOut: false });
        });
        child.on('close', (code) => {
            if (settled) return;
            settled = true;
            clearTimeout(timer);
            resolve({ stdout, stderr, code: code === null ? -1 : code, timedOut });
        });

        if (opts.stdin !== undefined && opts.stdin !== null) {
            try {
                child.stdin.write(opts.stdin);
                child.stdin.end();
            } catch (e) { /* process may have exited already */ }
        } else {
            try { child.stdin.end(); } catch (e) {}
        }
    });
}

// ---------- language execution ----------
async function executeJava(code, stdin) {
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'tcsipa-java-'));
    try {
        fs.writeFileSync(path.join(dir, 'Main.java'), code, 'utf8');
        const compile = await runProcess('javac', ['Main.java'], {
            cwd: dir, timeoutMs: COMPILE_TIMEOUT_MS
        });
        if (compile.error) {
            return { error: 'Could not run javac. Is the JDK installed and on PATH? (' + compile.error + ')' };
        }
        if (compile.timedOut) {
            return { compile: { ok: false, stderr: 'Compilation timed out.' } };
        }
        if (compile.code !== 0) {
            return { compile: { ok: false, stderr: compile.stderr || compile.stdout } };
        }
        const run = await runProcess('java', ['-Xss64m', '-cp', dir, 'Main'], {
            cwd: dir, timeoutMs: RUN_TIMEOUT_MS, stdin: stdin
        });
        return {
            compile: { ok: true },
            run: { stdout: run.stdout, stderr: run.stderr, code: run.code, timedOut: run.timedOut }
        };
    } finally {
        try { fs.rmSync(dir, { recursive: true, force: true }); } catch (e) {}
    }
}

async function executePython(code, stdin) {
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'tcsipa-py-'));
    try {
        fs.writeFileSync(path.join(dir, 'main.py'), code, 'utf8');
        const run = await runProcess('python', ['main.py'], {
            cwd: dir, timeoutMs: RUN_TIMEOUT_MS, stdin: stdin
        });
        if (run.error) {
            return { error: 'Could not run python. Is Python installed and on PATH? (' + run.error + ')' };
        }
        return {
            compile: { ok: true },
            run: { stdout: run.stdout, stderr: run.stderr, code: run.code, timedOut: run.timedOut }
        };
    } finally {
        try { fs.rmSync(dir, { recursive: true, force: true }); } catch (e) {}
    }
}

// ---------- HTTP server ----------
function sendJSON(res, status, obj) {
    const body = JSON.stringify(obj);
    res.writeHead(status, { 'Content-Type': 'application/json; charset=utf-8' });
    res.end(body);
}

const server = http.createServer((req, res) => {
    const url = new URL(req.url, 'http://localhost');

    // --- API: health check ---
    if (url.pathname === '/api/health') {
        return sendJSON(res, 200, { ok: true });
    }

    // --- API: run code ---
    if (url.pathname === '/api/run' && req.method === 'POST') {
        let body = '';
        let tooBig = false;
        req.on('data', (chunk) => {
            body += chunk;
            if (body.length > 1024 * 1024) { tooBig = true; req.destroy(); }
        });
        req.on('end', async () => {
            if (tooBig) return;
            let payload;
            try {
                payload = JSON.parse(body);
            } catch (e) {
                return sendJSON(res, 400, { error: 'Invalid JSON' });
            }
            const { language, code, stdin } = payload;
            if (typeof code !== 'string' || !code.trim()) {
                return sendJSON(res, 400, { error: 'No code provided' });
            }
            try {
                let result;
                if (language === 'java') {
                    result = await executeJava(code, typeof stdin === 'string' ? stdin : '');
                } else if (language === 'python') {
                    result = await executePython(code, typeof stdin === 'string' ? stdin : '');
                } else {
                    return sendJSON(res, 400, { error: 'Unsupported language: ' + language });
                }
                return sendJSON(res, 200, result);
            } catch (e) {
                return sendJSON(res, 500, { error: 'Judge error: ' + String(e) });
            }
        });
        return;
    }

    // --- Static files ---
    let filePath = decodeURIComponent(url.pathname);
    if (filePath === '/') filePath = '/index.html';
    const resolved = path.normalize(path.join(ROOT, filePath));
    if (!resolved.startsWith(ROOT)) {
        res.writeHead(403); return res.end('Forbidden');
    }
    fs.readFile(resolved, (err, data) => {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            return res.end('Not found: ' + filePath);
        }
        const ext = path.extname(resolved).toLowerCase();
        res.writeHead(200, { 'Content-Type': MIME[ext] || 'application/octet-stream' });
        res.end(data);
    });
});

server.listen(PORT, () => {
    console.log('==============================================');
    console.log('  TCS IPA Local Judge is running');
    console.log('');
    console.log('  Open:  http://localhost:' + PORT + '/coding.html');
    console.log('');
    console.log('  Keep this window open while practicing.');
    console.log('  Press Ctrl+C to stop.');
    console.log('==============================================');
    const jv = spawnSync('javac', ['-version'], { windowsHide: true, encoding: 'utf8' });
    const pv = spawnSync('python', ['--version'], { windowsHide: true, encoding: 'utf8' });
    console.log('  Java compiler : ' + ((jv.stdout || jv.stderr || 'NOT FOUND').trim()));
    console.log('  Python        : ' + ((pv.stdout || pv.stderr || 'NOT FOUND').trim()));
});
