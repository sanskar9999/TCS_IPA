@echo off
cd /d "%~dp0"
echo Starting TCS IPA Coding Practice...
start "" "http://localhost:8123/coding.html"
node judge.js
pause
