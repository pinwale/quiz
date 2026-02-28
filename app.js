// ─────────────────────────────────────────────
//  Quiz Registry
// ─────────────────────────────────────────────

const QUIZZES = {
    lpi: {
        id: 'lpi',
        title: 'Leadership Practices Inventory',
        subtitle: 'Student Self-Assessment',
        description: 'Assess your leadership behaviors across 5 key practices.',
        instructions: `Please guide your self-assessment for the following behavior items. Rate each item honestly about
            yourself <strong>as you are now</strong> (vs. how you wish you would be) using the scale provided below:`,
        prompt: 'In my work/school/life, I...',
        options: [
            { value: 1, label: 'Never',        showValue: true },
            { value: 2, label: 'Rarely',       showValue: true },
            { value: 3, label: 'Occasionally', showValue: true },
            { value: 4, label: 'Frequently',   showValue: true },
            { value: 5, label: 'Extensively',  showValue: true },
        ],
        questions: [
            { id: 1,  text: 'set a personal example for others.',                                                   category: 'Model the Way'        },
            { id: 2,  text: 'talk about future trends and how they will affect the work of the project, team, or organization.', category: 'Inspire a Shared Vision' },
            { id: 3,  text: 'look for ways to challenge or grow my skills and abilities.',                          category: 'Challenge the Process' },
            { id: 4,  text: 'encourage people.',                                                                    category: 'Encourage the Heart'  },
            { id: 5,  text: 'am self-aware.',                                                                       category: 'Model the Way'        },
            { id: 6,  text: 'find common ground when trying to motivate others to act.',                            category: 'Inspire a Shared Vision' },
            { id: 7,  text: 'challenge the status quo by asking questions and thinking innovatively.',              category: 'Challenge the Process' },
            { id: 8,  text: 'recognize the accomplishments of others.',                                             category: 'Encourage the Heart'  },
            { id: 9,  text: 'foster collaborative, rather than competitive, relationships.',                        category: 'Enable Others to Act' },
            { id: 10, text: 'follow through on promises or commitments.',                                           category: 'Model the Way'        },
            { id: 11, text: 'identify what is important to others before suggesting a course of action.',           category: 'Inspire a Shared Vision' },
            { id: 12, text: 'experiment and try new ways of doing things.',                                         category: 'Challenge the Process' },
            { id: 13, text: 'celebrate group/team accomplishments.',                                                category: 'Encourage the Heart'  },
            { id: 14, text: 'give people choice about how to do their work when we work together.',                 category: 'Enable Others to Act' },
            { id: 15, text: 'seek feedback about the impact of my actions.',                                        category: 'Model the Way'        },
            { id: 16, text: 'ask "what can we learn," when things don\'t go as expected.',                         category: 'Challenge the Process' },
            { id: 17, text: 'provide constructive feedback to others.',                                             category: 'Encourage the Heart'  },
            { id: 18, text: 'treat people with dignity and respect.',                                               category: 'Enable Others to Act' },
            { id: 19, text: 'talk about my values and principles.',                                                 category: 'Model the Way'        },
            { id: 20, text: 'communicate ideas persuasively.',                                                      category: 'Inspire a Shared Vision' },
            { id: 21, text: 'encourage others to take risks and/or try new things.',                               category: 'Challenge the Process' },
            { id: 22, text: 'encourage others when they are down or self-doubting.',                               category: 'Encourage the Heart'  },
            { id: 23, text: 'seek others\' opinions before making up my mind.',                                    category: 'Enable Others to Act' },
            { id: 24, text: 'provide opportunities for others to take on leadership opportunities.',                category: 'Enable Others to Act' },
            { id: 25, text: 'demonstrate optimism and enthusiasm.',                                                 category: 'Inspire a Shared Vision' },
        ],
        categories: [
            'Model the Way',
            'Inspire a Shared Vision',
            'Challenge the Process',
            'Enable Others to Act',
            'Encourage the Heart',
        ],
        scoring: {
            type: 'category-weighted',
            reversedIds: [],
            maxRawPerCategory: 25,
            maxWeighted: 10,
        },
        scoreRanges: null,
        references: [
            { text: 'Kouzes, J.M. and Posner, B.Z. (2023). The Leadership Challenge: How to Make Extraordinary Things Happen in Organizations. 7th Ed. Hoboken, NJ: Wiley.' },
        ],
    },

    ei: {
        id: 'ei',
        title: 'Emotional Intelligence',
        subtitle: 'Self-Assessment',
        description: 'Evaluate your emotional intelligence across 5 dimensions based on Goleman\'s framework.',
        instructions: `Evaluate each statement as you <strong>actually are</strong>, rather than as you think you should be.
            When you\'ve finished, your total will be calculated and scored across key dimensions.`,
        prompt: '',
        options: [
            { value: 1, label: 'Not at All',  showValue: false },
            { value: 2, label: 'Rarely',      showValue: false },
            { value: 3, label: 'Sometimes',   showValue: false },
            { value: 4, label: 'Often',       showValue: false },
            { value: 5, label: 'Very Often',  showValue: false },
        ],
        questions: [
            { id: 1,  text: 'I can recognize my emotions as I experience them.',                     category: 'Self-Awareness',  reversed: false },
            { id: 2,  text: 'I lose my temper when I feel frustrated.',                              category: 'Self-Regulation', reversed: true  },
            { id: 3,  text: 'People have told me that I\'m a good listener.',                        category: 'Empathy',         reversed: false },
            { id: 4,  text: 'I know how to calm myself down when I feel anxious or upset.',          category: 'Self-Regulation', reversed: false },
            { id: 5,  text: 'I enjoy organizing groups.',                                            category: 'Social Skills',   reversed: false },
            { id: 6,  text: 'I find it hard to focus on something over the long term.',              category: 'Self-Motivation', reversed: true  },
            { id: 7,  text: 'I find it difficult to move on when I feel frustrated or unhappy.',     category: 'Self-Regulation', reversed: true  },
            { id: 8,  text: 'I know my strengths and weaknesses.',                                   category: 'Self-Awareness',  reversed: false },
            { id: 9,  text: 'I avoid conflict and negotiations.',                                    category: 'Social Skills',   reversed: true  },
            { id: 10, text: 'I feel that I don\'t enjoy my work.',                                   category: 'Self-Motivation', reversed: true  },
            { id: 11, text: 'I ask people for feedback on what I do well, and how I can improve.',   category: 'Self-Awareness',  reversed: false },
            { id: 12, text: 'I set long-term goals, and review my progress regularly.',              category: 'Self-Motivation', reversed: false },
            { id: 13, text: 'I find it difficult to read other people\'s emotions.',                 category: 'Empathy',         reversed: true  },
            { id: 14, text: 'I struggle to build rapport with others.',                              category: 'Social Skills',   reversed: true  },
            { id: 15, text: 'I use active listening skills when people speak to me.',                category: 'Empathy',         reversed: false },
        ],
        categories: ['Self-Awareness', 'Self-Regulation', 'Self-Motivation', 'Empathy', 'Social Skills'],
        scoring: {
            type: 'total-with-categories',
        },
        scoreRanges: [
            { min: 15, max: 34, label: 'Needs Work', cssClass: 'range-low',
              description: 'You may feel overwhelmed by emotions in stressful situations. There are significant opportunities to build your emotional intelligence.' },
            { min: 35, max: 55, label: 'OK', cssClass: 'range-mid',
              description: 'You probably have good relationships with some colleagues. There are meaningful opportunities to further develop your emotional intelligence.' },
            { min: 56, max: 75, label: 'Great!', cssClass: 'range-high',
              description: 'You have high emotional intelligence. Continue using and developing these skills to lead and support others effectively.' },
        ],
        references: [
            { text: 'Harms, P.D. and Credé, M. (2010). "Emotional Intelligence and Transformational and Transactional Leadership: A Meta-Analysis." Leadership Institute Faculty Publications, Paper 14.' },
            { text: 'Goleman, D. (1995). Emotional Intelligence — Why it Can Matter More Than IQ. London: Bantam.' },
            { text: 'MindTools. "How Emotionally Intelligent Are You?"', url: 'https://www.mindtools.com/axbwm3m/how-emotionally-intelligent-are-you/' },
        ],
    },
};

// ─────────────────────────────────────────────
//  State
// ─────────────────────────────────────────────

let currentQuiz = null;
let currentStep = 0;
let answers = {};

// ─────────────────────────────────────────────
//  DOM References
// ─────────────────────────────────────────────

const screens = {
    selector: document.getElementById('selector-screen'),
    intro:    document.getElementById('intro-screen'),
    wizard:   document.getElementById('wizard-screen'),
    results:  document.getElementById('results-screen'),
};

const ui = {
    // Selector
    quizSelectorGrid:   document.getElementById('quiz-selector-grid'),
    // Intro
    introTitle:         document.getElementById('intro-title'),
    introSubtitle:      document.getElementById('intro-subtitle'),
    introInstructions:  document.getElementById('intro-instructions'),
    // Wizard
    progressBar:        document.getElementById('progress-bar'),
    currentStepSpan:    document.getElementById('current-step'),
    totalStepsSpan:     document.getElementById('total-steps'),
    questionPrompt:     document.getElementById('question-prompt'),
    questionText:       document.getElementById('question-text'),
    optionsGrid:        document.getElementById('options-grid'),
    prevBtn:            document.getElementById('prev-btn'),
    resetBtn:           document.getElementById('reset-btn'),
    infoBtn:            document.getElementById('info-btn'),
    infoModal:          document.getElementById('info-modal'),
    closeModalBtn:      document.getElementById('close-modal-btn'),
    modalScaleList:     document.getElementById('modal-scale-list'),
    // Results
    resultsTitle:       document.getElementById('results-title'),
    resultsSubtitle:    document.getElementById('results-subtitle'),
    scoreInterpretation:document.getElementById('score-interpretation'),
    resultsGrid:        document.getElementById('results-grid'),
    referencesSection:  document.getElementById('references-section'),
    // Print
    printTitle:         document.getElementById('print-title'),
    printQuestionsList: document.getElementById('print-questions-list'),
    printResultsBody:   document.getElementById('print-results-body'),
    printReferences:    document.getElementById('print-references'),
};

// ─────────────────────────────────────────────
//  Init
// ─────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {
    renderSelectorScreen();

    document.getElementById('start-btn').addEventListener('click', startAssessment);
    document.getElementById('back-to-selector-btn').addEventListener('click', goHome);
    document.getElementById('restart-btn').addEventListener('click', restartAssessment);
    document.getElementById('home-btn').addEventListener('click', goHome);
    document.getElementById('print-btn').addEventListener('click', () => window.print());
    ui.prevBtn.addEventListener('click', prevStep);

    ui.resetBtn.addEventListener('click', () => {
        if (confirm('Are you sure you want to restart? All progress will be lost.')) {
            goHome();
        }
    });

    ui.infoBtn.addEventListener('click', () => ui.infoModal.classList.add('active'));
    ui.closeModalBtn.addEventListener('click', () => ui.infoModal.classList.remove('active'));
    ui.infoModal.addEventListener('click', (e) => {
        if (e.target === ui.infoModal) ui.infoModal.classList.remove('active');
    });
});

// ─────────────────────────────────────────────
//  Selector Screen
// ─────────────────────────────────────────────

function renderSelectorScreen() {
    ui.quizSelectorGrid.innerHTML = '';

    Object.values(QUIZZES).forEach(quiz => {
        const card = document.createElement('div');
        card.className = 'quiz-card';
        card.innerHTML = `
            <div class="quiz-card-title">${quiz.title}</div>
            <div class="quiz-card-sub">${quiz.subtitle}</div>
            <div class="quiz-card-desc">${quiz.description}</div>
            <button class="btn primary-btn quiz-card-btn">Start</button>
        `;
        card.querySelector('.quiz-card-btn').addEventListener('click', () => selectQuiz(quiz.id));
        // Also allow clicking the card itself
        card.addEventListener('click', (e) => {
            if (e.target.tagName !== 'BUTTON') selectQuiz(quiz.id);
        });
        ui.quizSelectorGrid.appendChild(card);
    });
}

// ─────────────────────────────────────────────
//  Quiz Selection & Intro
// ─────────────────────────────────────────────

function selectQuiz(quizId) {
    currentQuiz = QUIZZES[quizId];

    ui.introTitle.textContent = currentQuiz.title;
    ui.introSubtitle.textContent = currentQuiz.subtitle;

    // Build instructions HTML with rating scale for quizzes with showValue options
    const hasNumbers = currentQuiz.options.some(o => o.showValue);
    let instructionsHTML = `<p>${currentQuiz.instructions}</p>`;

    if (hasNumbers) {
        instructionsHTML += `<ul class="rating-scale">`;
        [...currentQuiz.options].reverse().forEach(opt => {
            instructionsHTML += `
                <li>
                    <span class="score-badge">${opt.value}</span>
                    <span class="rating-text">${opt.label}</span>
                </li>`;
        });
        instructionsHTML += `</ul>`;
    }

    ui.introInstructions.innerHTML = instructionsHTML;
    switchScreen('intro');
}

// ─────────────────────────────────────────────
//  Assessment Flow
// ─────────────────────────────────────────────

function startAssessment() {
    currentStep = 0;
    answers = {};

    renderOptionsGrid();
    renderModalScale();

    ui.totalStepsSpan.textContent = currentQuiz.questions.length;

    // Show/hide question prompt
    if (currentQuiz.prompt) {
        ui.questionPrompt.textContent = currentQuiz.prompt;
        ui.questionPrompt.style.display = '';
    } else {
        ui.questionPrompt.style.display = 'none';
    }

    switchScreen('wizard');
    renderQuestion(true);
}

function restartAssessment() {
    if (currentQuiz) {
        startAssessment();
    } else {
        goHome();
    }
}

function goHome() {
    currentQuiz = null;
    switchScreen('selector');
}

function switchScreen(screenName) {
    const current = Object.values(screens).find(s => s.classList.contains('active'));
    const next = screens[screenName];

    if (!current || current === next) {
        next.classList.add('active');
        return;
    }

    current.classList.remove('active');
    current.classList.add('exiting');
    setTimeout(() => current.classList.remove('exiting'), 280);

    setTimeout(() => next.classList.add('active'), 150);
}

// ─────────────────────────────────────────────
//  Options Grid (dynamic per quiz)
// ─────────────────────────────────────────────

function renderOptionsGrid() {
    const hasNumbers = currentQuiz.options.some(o => o.showValue);
    ui.optionsGrid.className = 'options-grid' + (hasNumbers ? '' : ' text-only-grid');

    ui.optionsGrid.innerHTML = currentQuiz.options.map(opt => {
        if (opt.showValue) {
            return `
                <button class="option-btn" data-value="${opt.value}">
                    <span class="val">${opt.value}</span>
                    <span class="label">${opt.label}</span>
                </button>`;
        } else {
            return `
                <button class="option-btn text-only" data-value="${opt.value}">
                    <span class="label">${opt.label}</span>
                </button>`;
        }
    }).join('');

    // Use event delegation on the grid (re-attach after innerHTML replacement)
    ui.optionsGrid.addEventListener('click', handleOptionClick);
}

function handleOptionClick(e) {
    const btn = e.target.closest('.option-btn');
    if (!btn) return;
    saveAnswer(parseInt(btn.dataset.value));
}

function renderModalScale() {
    ui.modalScaleList.innerHTML = [...currentQuiz.options].reverse().map(opt => {
        if (opt.showValue) {
            return `<li><span class="score-badge">${opt.value}</span><span class="rating-text">${opt.label}</span></li>`;
        } else {
            return `<li><span class="rating-text">${opt.label}</span></li>`;
        }
    }).join('');
}

// ─────────────────────────────────────────────
//  Question Rendering
// ─────────────────────────────────────────────

function renderQuestion(animate = false) {
    const q = currentQuiz.questions[currentStep];
    const content = document.getElementById('question-content');

    const updateContent = () => {
        ui.questionText.textContent = q.text;
        ui.currentStepSpan.textContent = currentStep + 1;

        const rawAnswer = answers[q.id];
        ui.optionsGrid.querySelectorAll('.option-btn').forEach(btn => {
            const val = parseInt(btn.dataset.value);
            const isSelected = rawAnswer === val;
            btn.classList.toggle('selected', isSelected);
            btn.style.borderColor = isSelected ? 'var(--primary-color)' : '#ddd';
            btn.style.backgroundColor = isSelected ? '#f0f4ff' : 'white';
        });
    };

    const progress = (currentStep / currentQuiz.questions.length) * 100;
    ui.progressBar.style.width = `${progress}%`;
    ui.prevBtn.disabled = currentStep === 0;

    if (animate) {
        content.classList.add('fade-out');
        content.classList.remove('fade-in');
        setTimeout(() => {
            updateContent();
            content.classList.remove('fade-out');
            content.classList.add('fade-in');
        }, 200);
    } else {
        updateContent();
        content.classList.remove('fade-out');
        content.classList.add('fade-in');
    }
}

// ─────────────────────────────────────────────
//  Answer Handling
// ─────────────────────────────────────────────

function saveAnswer(value) {
    const q = currentQuiz.questions[currentStep];
    answers[q.id] = value;
    renderQuestion(false);
    setTimeout(() => nextStep(), 150);
}

function nextStep() {
    if (currentStep < currentQuiz.questions.length - 1) {
        currentStep++;
        renderQuestion(true);
    } else {
        finishAssessment();
    }
}

function prevStep() {
    if (currentStep > 0) {
        currentStep--;
        renderQuestion(true);
    }
}

// ─────────────────────────────────────────────
//  Scoring
// ─────────────────────────────────────────────

function finishAssessment() {
    const results = calculateResults();
    renderResults(results);
    renderPrintView(results);
    switchScreen('results');
}

function calculateResults() {
    const { scoring } = currentQuiz;

    if (scoring.type === 'category-weighted') {
        return calculateLpiResults();
    } else if (scoring.type === 'total-with-categories') {
        return calculateEiResults();
    }
}

function calculateLpiResults() {
    const categoryScores = {};
    currentQuiz.categories.forEach(cat => {
        categoryScores[cat] = { raw: 0, count: 0 };
    });

    currentQuiz.questions.forEach(q => {
        const score = answers[q.id] || 0;
        if (categoryScores[q.category]) {
            categoryScores[q.category].raw += score;
            categoryScores[q.category].count++;
        }
    });

    const categoryResults = currentQuiz.categories.map(cat => {
        const data = categoryScores[cat];
        const maxRaw = currentQuiz.scoring.maxRawPerCategory;
        const maxWeighted = currentQuiz.scoring.maxWeighted;
        const weighted = (data.raw / maxRaw) * maxWeighted;
        return { category: cat, raw: data.raw, maxRaw, weighted: weighted.toFixed(1), maxWeighted };
    });

    return { type: 'lpi', categories: categoryResults };
}

function calculateEiResults() {
    const categoryScores = {};
    currentQuiz.categories.forEach(cat => {
        categoryScores[cat] = { scored: 0, count: 0 };
    });

    let total = 0;
    currentQuiz.questions.forEach(q => {
        const raw = answers[q.id] || 0;
        const scored = q.reversed ? (6 - raw) : raw;
        total += scored;
        if (categoryScores[q.category]) {
            categoryScores[q.category].scored += scored;
            categoryScores[q.category].count++;
        }
    });

    const range = currentQuiz.scoreRanges.find(r => total >= r.min && total <= r.max)
        || currentQuiz.scoreRanges[currentQuiz.scoreRanges.length - 1];

    const categoryResults = currentQuiz.categories.map(cat => {
        const data = categoryScores[cat];
        const maxRaw = data.count * 5;
        return { category: cat, raw: data.scored, maxRaw, weighted: null };
    });

    return { type: 'ei', categories: categoryResults, total, maxTotal: currentQuiz.questions.length * 5, range };
}

// ─────────────────────────────────────────────
//  Results Rendering
// ─────────────────────────────────────────────

function renderResults(results) {
    // Title
    if (results.type === 'lpi') {
        ui.resultsTitle.textContent = 'Summary Profile';
        ui.resultsSubtitle.textContent = 'Here is your weighted score for each leadership practice.';
        ui.scoreInterpretation.style.display = 'none';
    } else {
        ui.resultsTitle.textContent = 'Your Emotional Intelligence Score';
        ui.resultsSubtitle.textContent = 'Here is how you scored across the five dimensions.';
        renderScoreInterpretation(results);
    }

    // Category bars
    ui.resultsGrid.innerHTML = '';
    results.categories.forEach(res => {
        const percent = (res.raw / res.maxRaw) * 100;
        const displayScore = res.weighted !== null ? res.weighted : res.raw;
        const subLabel = res.weighted !== null
            ? `Raw: ${res.raw}/${res.maxRaw}`
            : `Score: ${res.raw}/${res.maxRaw}`;

        const row = document.createElement('div');
        row.className = 'result-row';
        row.innerHTML = `
            <div class="result-info">
                <h4>${res.category}</h4>
                <div class="result-bar-bg">
                    <div class="result-bar-fill" style="width: ${percent}%"></div>
                </div>
            </div>
            <div class="result-stats">
                <div class="result-score">${displayScore}</div>
                <div class="result-sub">${subLabel}</div>
            </div>
        `;
        ui.resultsGrid.appendChild(row);
    });

    // References
    renderReferences();
}

function renderScoreInterpretation(results) {
    const { total, maxTotal, range } = results;
    ui.scoreInterpretation.className = `score-interpretation ${range.cssClass}`;
    ui.scoreInterpretation.innerHTML = `
        <div class="score-total">${total} / ${maxTotal}</div>
        <div class="score-label">${range.label}</div>
        <div class="score-desc">${range.description}</div>
    `;
    ui.scoreInterpretation.style.display = '';
}

function renderReferences() {
    const refs = currentQuiz.references;
    if (!refs || refs.length === 0) {
        ui.referencesSection.innerHTML = '';
        return;
    }

    const items = refs.map((ref, i) => {
        const text = ref.url
            ? `<a href="${ref.url}" target="_blank" rel="noopener noreferrer">${ref.text}</a>`
            : ref.text;
        return `<li>${text}</li>`;
    }).join('');

    ui.referencesSection.innerHTML = `
        <h3>References</h3>
        <ol>${items}</ol>
    `;
}

// ─────────────────────────────────────────────
//  Print View
// ─────────────────────────────────────────────

function renderPrintView(results) {
    ui.printTitle.textContent = `${currentQuiz.title} — ${currentQuiz.subtitle} Report`;

    // Questions list
    ui.printQuestionsList.innerHTML = '<h3>Responses</h3>';
    currentQuiz.questions.forEach(q => {
        const raw = answers[q.id] || 0;
        const displayScore = (currentQuiz.scoring.type === 'total-with-categories' && q.reversed)
            ? `${raw} → ${6 - raw}`
            : `${raw}`;
        const item = document.createElement('div');
        item.className = 'print-question-item';
        item.innerHTML = `
            <span class="print-q-content">
                <span class="print-q-num">${q.id}.</span>
                <span class="print-q-text">${q.text}</span>
            </span>
            <span class="print-score">${displayScore}</span>
        `;
        ui.printQuestionsList.appendChild(item);
    });

    // Results table
    ui.printResultsBody.innerHTML = '';
    results.categories.forEach(res => {
        const row = document.createElement('tr');
        const weighted = res.weighted !== null ? res.weighted : '—';
        row.innerHTML = `<td>${res.category}</td><td>${res.raw}/${res.maxRaw}</td><td>${weighted}</td>`;
        ui.printResultsBody.appendChild(row);
    });

    // Total for EI
    if (results.type === 'ei') {
        const totalRow = document.createElement('tr');
        totalRow.innerHTML = `<td><strong>Total</strong></td><td><strong>${results.total}/${results.maxTotal}</strong></td><td><strong>${results.range.label}</strong></td>`;
        ui.printResultsBody.appendChild(totalRow);
    }

    // References in print
    const refs = currentQuiz.references;
    if (refs && refs.length > 0) {
        const items = refs.map((ref, i) => {
            const text = ref.url
                ? `${ref.text} (${ref.url})`
                : ref.text;
            return `<li>${text}</li>`;
        }).join('');
        ui.printReferences.innerHTML = `<h2>References</h2><ol style="font-size:9pt;line-height:1.6;padding-left:20px;">${items}</ol>`;
    } else {
        ui.printReferences.innerHTML = '';
    }
}
