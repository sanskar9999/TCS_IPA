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

    // App State
    let currentIndex = 0;
    const totalQuestions = questionsData.length;
    
    // Safety check if no questions loaded
    if (!questionsData || questionsData.length === 0) {
        questionText.textContent = "No questions found. Please check your questions.js data.";
        return;
    }

    // Initialize App
    loadQuestion(currentIndex);

    // Event Listeners
    btnNext.addEventListener('click', () => {
        if (currentIndex < totalQuestions - 1) {
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

    function loadQuestion(index) {
        const q = questionsData[index];
        
        // Update Header and Progress
        progressText.textContent = `Question ${index + 1} of ${totalQuestions}`;
        progressBar.style.width = `${((index + 1) / totalQuestions) * 100}%`;
        
        // Setup text
        questionText.textContent = q.question;
        
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
        btnNext.disabled = index === totalQuestions - 1;
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
        
        hintText.textContent = hint;
    }
});
