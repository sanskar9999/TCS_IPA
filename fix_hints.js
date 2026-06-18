const fs = require('fs');

const content = fs.readFileSync('questions.js', 'utf8');
const tempContent = content.replace('const questionsData =', 'module.exports =');
fs.writeFileSync('temp.js', tempContent);

const questions = require('./temp.js');

let fixedCount = 0;
questions.forEach(q => {
    if (q.hint && q.hint.includes('■ SECTION')) {
        q.hint = q.hint.split(/\n\s*■/)[0].trim();
        fixedCount++;
    }
});

console.log('Fixed ' + fixedCount + ' hints.');

const newContent = 'const questionsData = ' + JSON.stringify(questions, null, 2) + ';\n';
fs.writeFileSync('questions.js', newContent);

fs.unlinkSync('temp.js');
