# TCS IPA Practice

Practice site for the TCS IPA assessment — MCQ quiz plus Java/Python coding practice with a real compiler, and a full exam simulation.

Have a Full practice Exam at: https://sanskar9999.github.io/TCS_IPA/exam.html

## What's here

- **MCQ Quiz** (`index.html`) — 1000+ practice questions across KYT, BizSkill, UI, Unix, Java/Python, and SQL, with hints and instant feedback.
- **Coding Practice** (`coding.html`) — 10 previous-year TCS IPA coding problems (5 OOP @ 35 marks, 5 logic @ 15 marks). Submissions are graded against hidden test cases, just like the real exam.
- **Full Exam Simulation** (`exam.html`) — the complete pattern: 50 MCQs (timed, sub-section quotas) + 2 random coding problems (timed), ending in a score report out of 100.

## Running it

Just open `index.html` in a browser to use the quiz.

For the coding sections to actually compile and run your code, start the local judge first:

1. Make sure you have a JDK and Python installed and on your PATH.
2. Double-click `StartCodingPractice.bat` (or run `node judge.js`).
3. Open `http://localhost:8123/coding.html` or `http://localhost:8123/exam.html`.

No local judge? The coding sections automatically fall back to a free web-based judge, so everything also works when hosted as a static site (e.g. GitHub Pages) — just slower.

## Files

| File | Purpose |
|---|---|
| `index.html`, `style.css`, `app.js`, `questions.js` | MCQ quiz |
| `coding.html`, `coding.css`, `coding.js`, `coding-questions.js` | Coding practice |
| `exam.html`, `exam.css`, `exam.js` | Full exam simulation |
| `judge.js`, `judge-client.js`, `StartCodingPractice.bat` | Local Java/Python judge + browser client |
