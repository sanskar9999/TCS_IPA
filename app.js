document.addEventListener('DOMContentLoaded', () => {
    // Elements
    const questionText = document.getElementById('question-text');
    const optionsContainer = document.getElementById('options-container');
    const feedbackContainer = document.getElementById('feedback-container');
    const feedbackStatus = document.getElementById('feedback-status');
    const hintText = document.getElementById('hint-text');
    const btnNext = document.getElementById('btn-next');
    const btnPrev = document.getElementById('btn-prev');
    const progressText = document.getElementById('question-progress');
    const progressBar = document.getElementById('progress-bar');
    const jumpInput = document.getElementById('jump-input');
    const btnJump = document.getElementById('btn-jump');
    const jumpContainer = document.getElementById('jump-container');
    const categoryFilter = document.getElementById('category-filter');
    const questionCategory = document.getElementById('question-category');

    // App State
    let currentIndex = 0;
    let filteredQuestions = [];
    
    // Safety check if no questions loaded
    if (!questionsData || questionsData.length === 0) {
        questionText.textContent = "No questions found. Please check your questions.js data.";
        return;
    }

    // Initialize filtered questions with all questions
    filteredQuestions = [...questionsData];

    // Populate category filter dropdown dynamically
    if (categoryFilter) {
        const uniqueCategories = [...new Set(questionsData.map(q => q.category).filter(Boolean))];
        const categoryOrder = [
            "KYT", "BizSkill", "UI", "Unix", "Java", 
            "Python", "Java / Python", "SQL / PLSQL", 
            "Algorithms", "C# / .NET", "Miscellaneous"
        ];
        
        // Sort unique categories using the custom order, append others at the end
        uniqueCategories.sort((a, b) => {
            const indexA = categoryOrder.indexOf(a);
            const indexB = categoryOrder.indexOf(b);
            if (indexA === -1 && indexB === -1) return a.localeCompare(b);
            if (indexA === -1) return 1;
            if (indexB === -1) return -1;
            return indexA - indexB;
        });

        uniqueCategories.forEach(cat => {
            const option = document.createElement('option');
            option.value = cat;
            option.textContent = cat;
            categoryFilter.appendChild(option);
        });

        // Filter event listener
        categoryFilter.addEventListener('change', (e) => {
            const selected = e.target.value;
            if (selected === 'all') {
                filteredQuestions = [...questionsData];
            } else {
                filteredQuestions = questionsData.filter(q => q.category === selected);
            }
            currentIndex = 0;
            updateJumpBounds();
            loadQuestion(currentIndex);
        });
    }

    // Dynamic setup for jump input attributes
    function updateJumpBounds() {
        if (jumpInput) {
            jumpInput.max = filteredQuestions.length;
            jumpInput.placeholder = `1-${filteredQuestions.length}`;
        }
    }
    updateJumpBounds();

    // Initialize App
    loadQuestion(currentIndex);

    // Event Listeners
    btnNext.addEventListener('click', () => {
        if (currentIndex < filteredQuestions.length - 1) {
            currentIndex++;
            loadQuestion(currentIndex);
        }
    });

    btnPrev.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            loadQuestion(currentIndex);
        }
    });

    // Jump to question functionality
    function handleJump() {
        if (!jumpInput) return;
        const val = parseInt(jumpInput.value, 10);
        if (!isNaN(val) && val >= 1 && val <= filteredQuestions.length) {
            currentIndex = val - 1;
            loadQuestion(currentIndex);
            jumpInput.value = '';
            jumpInput.blur();
        } else {
            // Apply error shake effect
            if (jumpContainer) {
                jumpContainer.classList.add('shake');
                setTimeout(() => {
                    jumpContainer.classList.remove('shake');
                }, 400);
            }
        }
    }

    if (btnJump) {
        btnJump.addEventListener('click', handleJump);
    }
    if (jumpInput) {
        jumpInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                handleJump();
            }
        });
    }

    // Helper Functions for Code Formatting and Rendering
    function escapeHTML(text) {
        if (!text) return "";
        return text
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;")
            .replace(/&lt;br\s*\/?&gt;/gi, "<br>");
    }

    function deduplicateText(str) {
        if (!str) return str;
        str = str.trim();
        
        const len = str.length;
        for (let k = 2; k <= 6; k++) {
            if (len % k === 0) {
                const size = len / k;
                const pattern = str.slice(0, size);
                let repeated = true;
                for (let i = 1; i < k; i++) {
                    if (str.slice(i * size, (i + 1) * size) !== pattern) {
                        repeated = false;
                        break;
                    }
                }
                if (repeated) {
                    return pattern;
                }
            }
        }
        
        const prefix = str.substring(0, Math.min(25, str.length));
        if (prefix.length >= 20) {
            const firstIndex = str.indexOf(prefix);
            const secondIndex = str.indexOf(prefix, firstIndex + prefix.length);
            if (secondIndex !== -1) {
                const part1 = str.substring(0, secondIndex).trim();
                const part2 = str.substring(secondIndex).trim();
                if (part1 === part2 || part2.startsWith(part1)) {
                    return part1;
                }
            }
        }
        
        return str;
    }

    function formatCode(codeStr) {
        codeStr = codeStr.trim();
        let formatted = "";
        let indentLevel = 0;
        const indentSize = 4;
        let inString = false;
        let stringChar = null;
        let inParentheses = 0;
        
        for (let i = 0; i < codeStr.length; i++) {
            const char = codeStr[i];
            
            if ((char === '"' || char === "'") && (i === 0 || codeStr[i-1] !== '\\')) {
                if (inString && char === stringChar) {
                    inString = false;
                    stringChar = null;
                } else if (!inString) {
                    inString = true;
                    stringChar = char;
                }
                formatted += char;
                continue;
            }
            
            if (inString) {
                formatted += char;
                continue;
            }
            
            if (char === '(') {
                inParentheses++;
                formatted += char;
                continue;
            }
            if (char === ')') {
                inParentheses = Math.max(0, inParentheses - 1);
                formatted += char;
                continue;
            }
            
            if (char === '{') {
                indentLevel++;
                formatted = formatted.trimEnd();
                formatted += " {\n" + " ".repeat(indentLevel * indentSize);
                while (i + 1 < codeStr.length && (codeStr[i+1] === ' ' || codeStr[i+1] === '\n' || codeStr[i+1] === '\r')) {
                    i++;
                }
            } else if (char === '}') {
                indentLevel = Math.max(0, indentLevel - 1);
                formatted = formatted.trimEnd();
                formatted += "\n" + " ".repeat(indentLevel * indentSize) + "}";
                while (i + 1 < codeStr.length && (codeStr[i+1] === ' ' || codeStr[i+1] === '\n' || codeStr[i+1] === '\r')) {
                    i++;
                }
                let rest = codeStr.substring(i + 1).trim();
                if (rest.startsWith("else") || rest.startsWith("catch") || rest.startsWith("finally")) {
                    formatted += " ";
                } else {
                    formatted += "\n" + " ".repeat(indentLevel * indentSize);
                }
            } else if (char === ';' && inParentheses === 0) {
                formatted += ";\n" + " ".repeat(indentLevel * indentSize);
                while (i + 1 < codeStr.length && (codeStr[i+1] === ' ' || codeStr[i+1] === '\n' || codeStr[i+1] === '\r')) {
                    i++;
                }
            } else {
                formatted += char;
            }
        }
        return formatted.split('\n').map(line => line.trimRight()).join('\n').trim();
    }

    function extractCodeBlock(text) {
        const keywords = [
            /using\s+System/i,
            /namespace\s+[a-zA-Z_]/i,
            /import\s+[a-zA-Z_]\w*(?:\s*\.\s*[a-zA-Z_/*]\w*)*\s*;/i,
            /public\s+class\s+[a-zA-Z_]/i,
            /class\s+[a-zA-Z_]\w*\s*(?:extends|implements|:|{)/i,
            /public\s+static\s+void/i,
            /static\s+void\s+[a-zA-Z_]/i,
            /public\s+enum\s+[a-zA-Z_]/i,
            /enum\s+[a-zA-Z_]/i,
            /CREATE\s+OR\s+REPLACE\s+FUNCTION/i,
            /declare\s+[a-zA-Z_]/i
        ];
        
        let earliestIndex = -1;
        let matchedKeyword = "";
        
        for (const regex of keywords) {
            const match = text.match(regex);
            if (match && match.index !== undefined) {
                if (earliestIndex === -1 || match.index < earliestIndex) {
                    earliestIndex = match.index;
                    matchedKeyword = match[0];
                }
            }
        }
        
        if (earliestIndex !== -1) {
            const codeStart = earliestIndex;
            const remaining = text.substring(codeStart);
            
            let braceCount = 0;
            let hasBraces = false;
            let codeEnd = -1;
            
            for (let i = 0; i < remaining.length; i++) {
                if (remaining[i] === '{') {
                    braceCount++;
                    hasBraces = true;
                } else if (remaining[i] === '}') {
                    braceCount--;
                    if (hasBraces && braceCount === 0) {
                        codeEnd = codeStart + i + 1;
                        break;
                    }
                }
            }
            
            if (codeEnd === -1) {
                if (/declare|begin/i.test(matchedKeyword) || /CREATE\s+OR\s+REPLACE/i.test(matchedKeyword)) {
                    const endMatch = remaining.match(/end\s*;?/i);
                    if (endMatch && endMatch.index !== undefined) {
                        codeEnd = codeStart + endMatch.index + endMatch[0].length;
                    }
                }
            }
            
            if (codeEnd !== -1) {
                const before = text.substring(0, codeStart);
                const code = text.substring(codeStart, codeEnd);
                const after = text.substring(codeEnd);
                return { before, code, after };
            } else {
                if (remaining.includes(';') || remaining.includes('(')) {
                    const before = text.substring(0, codeStart);
                    const code = remaining;
                    return { before, code, after: "" };
                }
            }
        }
        
        const sqlRegex = /(SELECT\s+[\s\S]+?FROM\s+[\s\S]+?(?:WHERE\s+[\s\S]+?)?)(?:;|$)/i;
        const sqlMatch = text.match(sqlRegex);
        if (sqlMatch && sqlMatch.index !== undefined && sqlMatch[0].length > 15) {
            const before = text.substring(0, sqlMatch.index);
            const code = sqlMatch[0];
            const after = text.substring(sqlMatch.index + sqlMatch[0].length);
            return { before, code, after };
        }
        
        return null;
    }

    function formatInlineCode(text) {
        if (!text) return text;
        text = text.replace(/`([^`]+)`/g, '<code>$1</code>');
        
        text = text.replace(/'([^']+)'/g, (match, content) => {
            if (content.includes('(') || content.includes('[') || content.includes(';') || content.includes('{') || content.includes('->') || content.includes('==') || content.includes(' = ')) {
                return `<code>${content}</code>`;
            }
            return match;
        });
        
        return text;
    }

    function escapeAndFormat(text) {
        if (!text) return "";
        const formatted = formatInlineCode(text);
        const parts = formatted.split(/(<\/?code>)/g);
        let result = "";
        let insideCode = false;
        
        for (const part of parts) {
            if (part === "<code>") {
                result += "<code>";
                insideCode = true;
            } else if (part === "</code>") {
                result += "</code>";
                insideCode = false;
            } else {
                result += escapeHTML(part);
            }
        }
        
        return result;
    }

    function loadQuestion(index) {
        const q = filteredQuestions[index];
        
        // Update Header and Progress
        progressText.textContent = `Question ${index + 1} of ${filteredQuestions.length}`;
        progressBar.style.width = `${((index + 1) / filteredQuestions.length) * 100}%`;
        
        // Update Category Badge
        if (questionCategory) {
            questionCategory.textContent = q.category || "General";
            questionCategory.className = "question-category";
            const catClass = "cat-" + (q.category || "general").toLowerCase().replace(/[^a-z0-9]+/g, '-');
            questionCategory.classList.add(catClass);
        }
        
        // Setup text with formatting and deduplication
        const deduplicatedQuestion = deduplicateText(q.question);
        const codeBlockData = extractCodeBlock(deduplicatedQuestion);
        
        if (codeBlockData) {
            const beforeHTML = escapeAndFormat(codeBlockData.before);
            const formattedCode = escapeHTML(formatCode(codeBlockData.code));
            const afterHTML = escapeAndFormat(codeBlockData.after);
            
            questionText.innerHTML = `
                ${beforeHTML ? `<div class="question-desc">${beforeHTML}</div>` : ''}
                <pre class="code-block"><code>${formattedCode}</code></pre>
                ${afterHTML ? `<div class="question-desc">${afterHTML}</div>` : ''}
            `;
        } else {
            questionText.innerHTML = escapeAndFormat(deduplicatedQuestion);
        }
        
        // Clear old options and feedback
        optionsContainer.innerHTML = '';
        feedbackContainer.classList.add('hidden');
        
        // Create new options
        q.options.forEach(opt => {
            const btn = document.createElement('button');
            btn.className = 'option-btn';
            
            const letterSpan = document.createElement('span');
            letterSpan.className = 'option-letter';
            letterSpan.textContent = opt.id;
            
            const textNode = document.createTextNode(` ${opt.text}`);
            
            btn.appendChild(letterSpan);
            btn.appendChild(textNode);
            
            // On Click
            btn.addEventListener('click', () => handleOptionClick(btn, opt, q.options, q.hint));
            
            optionsContainer.appendChild(btn);
        });
        
        // Update navigation buttons
        btnPrev.disabled = index === 0;
        btnNext.disabled = index === filteredQuestions.length - 1;
    }

    function handleOptionClick(clickedBtn, selectedOption, allOptionsData, hint) {
        const allButtons = Array.from(optionsContainer.children);
        
        // Disable all buttons
        allButtons.forEach(btn => btn.disabled = true);
        
        // Find correct option index
        const correctIndex = allOptionsData.findIndex(o => o.isCorrect);
        
        if (selectedOption.isCorrect) {
            // Correct guess
            clickedBtn.classList.add('correct');
            showFeedback(true, hint);
        } else {
            // Incorrect guess
            clickedBtn.classList.add('incorrect');
            
            // Highlight the correct one
            if (correctIndex !== -1) {
                allButtons[correctIndex].classList.add('correct');
            }
            showFeedback(false, hint);
        }
    }

    function showFeedback(isCorrect, hint) {
        feedbackContainer.classList.remove('hidden');
        
        const iconSvgCorrect = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>`;
        const iconSvgIncorrect = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>`;

        if (isCorrect) {
            feedbackStatus.className = 'feedback-status status-correct';
            feedbackStatus.innerHTML = `${iconSvgCorrect} Correct!`;
        } else {
            feedbackStatus.className = 'feedback-status status-incorrect';
            feedbackStatus.innerHTML = `${iconSvgIncorrect} Incorrect`;
        }
        
        hintText.innerHTML = escapeAndFormat(hint);
    }
});
