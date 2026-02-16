const QUESTIONS = [
    { id: 1, text: "set a personal example for others.", category: "Model the Way" },
    { id: 2, text: "talk about future trends and how they will affect the work of the project, team, or organization.", category: "Inspire a Shared Vision" },
    { id: 3, text: "look for ways to challenge or grow my skills and abilities.", category: "Challenge the Process" },
    { id: 4, text: "encourage people.", category: "Encourage the Heart" },
    { id: 5, text: "am self-aware.", category: "Model the Way" },
    { id: 6, text: "find common ground when trying to motivate others to act.", category: "Inspire a Shared Vision" },
    { id: 7, text: "challenge the status quo by asking questions and thinking innovatively.", category: "Challenge the Process" },
    { id: 8, text: "recognize the accomplishments of others.", category: "Encourage the Heart" },
    { id: 9, text: "foster collaborative, rather than competitive, relationships.", category: "Enable Others to Act" },
    { id: 10, text: "follow through on promises or commitments.", category: "Model the Way" },
    { id: 11, text: "identify what is important to others before suggesting a course of action.", category: "Inspire a Shared Vision" },
    { id: 12, text: "experiment and try new ways of doing things.", category: "Challenge the Process" },
    { id: 13, text: "celebrate group/team accomplishments.", category: "Encourage the Heart" },
    { id: 14, text: "give people choice about how to do their work when we work together.", category: "Enable Others to Act" },
    { id: 15, text: "seek feedback about the impact of my actions.", category: "Model the Way" },
    { id: 16, text: "ask \"what can we learn,\" when things don't go as expected.", category: "Challenge the Process" },
    { id: 17, text: "provide constructive feedback to others.", category: "Encourage the Heart" },
    { id: 18, text: "treat people with dignity and respect.", category: "Enable Others to Act" },
    { id: 19, text: "talk about my values and principles.", category: "Model the Way" },
    { id: 20, text: "communicate ideas persuasively.", category: "Inspire a Shared Vision" },
    { id: 21, text: "encourage others to take risks and/or try new things.", category: "Challenge the Process" },
    { id: 22, text: "encourage others when they are down or self-doubting.", category: "Encourage the Heart" },
    { id: 23, text: "seek others' opinions before making up my mind.", category: "Enable Others to Act" },
    { id: 24, text: "provide opportunities for others to take on leadership opportunities.", category: "Enable Others to Act" },
    { id: 25, text: "demonstrate optimism and enthusiasm.", category: "Inspire a Shared Vision" }
];

const CATEGORIES = [
    "Model the Way",
    "Inspire a Shared Vision",
    "Challenge the Process",
    "Enable Others to Act",
    "Encourage the Heart"
];

// State
let currentStep = 0;
let answers = {}; // { questionId: score }

// DOM Elements
const screens = {
    intro: document.getElementById('intro-screen'),
    wizard: document.getElementById('wizard-screen'),
    results: document.getElementById('results-screen')
};

const ui = {
    progressBar: document.getElementById('progress-bar'),
    currentStepSpan: document.getElementById('current-step'),
    questionText: document.getElementById('question-text'),
    optionsGrid: document.getElementById('options-grid'),
    prevBtn: document.getElementById('prev-btn'),
    resetBtn: document.getElementById('reset-btn'), // New
    infoBtn: document.getElementById('info-btn'), // New
    infoModal: document.getElementById('info-modal'), // New
    closeModalBtn: document.getElementById('close-modal-btn'), // New
    resultsGrid: document.getElementById('results-grid'),
    printQuestionsList: document.getElementById('print-questions-list'),
    printResultsBody: document.getElementById('print-results-body')
};

// Reset Listener
if (ui.resetBtn) {
    ui.resetBtn.addEventListener('click', () => {
        if (confirm("Are you sure you want to restart? All progress will be lost.")) {
            startAssessment();
        }
    });
}

// Info Modal Logic
if (ui.infoBtn && ui.infoModal) {
    ui.infoBtn.addEventListener('click', () => {
        ui.infoModal.classList.add('active');
    });

    if (ui.closeModalBtn) {
        ui.closeModalBtn.addEventListener('click', () => {
            ui.infoModal.classList.remove('active');
        });
    }

    ui.infoModal.addEventListener('click', (e) => {
        if (e.target === ui.infoModal) {
            ui.infoModal.classList.remove('active');
        }
    });
}

// Init
document.addEventListener('DOMContentLoaded', () => {
    // Re-grab elements if needed, but 'ui' object uses getElementById which runs now
    // Actually, 'ui' object defined at top level runs immediately. 
    // Ideally, we move UI definition inside, but for minimal diff:

    // Ensure listeners are attached
    const startBtn = document.getElementById('start-btn');
    if (startBtn) startBtn.addEventListener('click', startAssessment);

    const restartBtn = document.getElementById('restart-btn');
    if (restartBtn) restartBtn.addEventListener('click', startAssessment);

    const homeBtn = document.getElementById('home-btn');
    if (homeBtn) document.getElementById('home-btn').addEventListener('click', goHome);

    const printBtn = document.getElementById('print-btn');
    if (printBtn) printBtn.addEventListener('click', () => window.print());

    if (ui.prevBtn) ui.prevBtn.addEventListener('click', prevStep);

    // Re-attach modal listeners here to be safe
    const infoBtn = document.getElementById('info-btn');
    const infoModal = document.getElementById('info-modal');
    const closeModalBtn = document.getElementById('close-modal-btn');

    if (infoBtn && infoModal) {
        infoBtn.addEventListener('click', () => {
            infoModal.classList.add('active');
        });

        if (closeModalBtn) {
            closeModalBtn.addEventListener('click', () => {
                infoModal.classList.remove('active');
            });
        }

        infoModal.addEventListener('click', (e) => {
            if (e.target === infoModal) {
                infoModal.classList.remove('active');
            }
        });
    }
});

function startAssessment() {
    // Reset State
    currentStep = 0;
    answers = {};

    switchScreen('wizard');
    renderQuestion(true);
}

function goHome() {
    switchScreen('intro');
}

function switchScreen(screenName) {
    Object.values(screens).forEach(s => s.classList.remove('active'));
    screens[screenName].classList.add('active');
}

function renderQuestion(animate = false) {
    const q = QUESTIONS[currentStep];
    const content = document.getElementById('question-content');

    // Function to update the actual text content
    const updateContent = () => {
        ui.questionText.textContent = q.text;
        ui.currentStepSpan.textContent = currentStep + 1;

        // Update Buttons Selection State (immediate update)
        const buttons = ui.optionsGrid.querySelectorAll('.option-btn');
        buttons.forEach(btn => {
            const val = parseInt(btn.dataset.value);
            btn.classList.remove('selected');
            if (answers[q.id] === val) {
                btn.classList.add('selected');
                btn.style.borderColor = 'var(--primary-color)';
                btn.style.backgroundColor = '#f0f4ff';
            } else {
                btn.style.borderColor = '#ddd';
                btn.style.backgroundColor = 'white';
            }
        });
    };

    // Update Progress Bar (Always animate smooth)
    const progress = ((currentStep) / QUESTIONS.length) * 100;
    ui.progressBar.style.width = `${progress}%`;
    ui.prevBtn.disabled = currentStep === 0;

    if (animate) {
        // Fade Out
        content.classList.add('fade-out');
        content.classList.remove('fade-in');

        // Wait for fade out, then swap and fade in
        setTimeout(() => {
            updateContent();
            content.classList.remove('fade-out');
            content.classList.add('fade-in');
        }, 200); // match CSS transition time
    } else {
        // Initial load or immediate update
        updateContent();
        content.classList.remove('fade-out');
        content.classList.add('fade-in');
    }
}

// Event Delegation for Options
ui.optionsGrid.addEventListener('click', (e) => {
    const btn = e.target.closest('.option-btn');
    if (!btn) return;

    const value = parseInt(btn.dataset.value);
    saveAnswer(value);
});

function saveAnswer(value) {
    const q = QUESTIONS[currentStep];
    answers[q.id] = value;

    // Visual Feedback (No animation here, just update selection state)
    renderQuestion(false);

    // Auto Advance
    setTimeout(() => {
        nextStep();
    }, 150);
}

function nextStep() {
    if (currentStep < QUESTIONS.length - 1) {
        currentStep++;
        renderQuestion(true); // Animate transition to new question
    } else {
        finishAssessment();
    }
}

function prevStep() {
    if (currentStep > 0) {
        currentStep--;
        renderQuestion(true); // Animate transition to previous question
    }
}

function finishAssessment() {
    const results = calculateResults();
    renderResults(results);
    renderPrintView(results);
    switchScreen('results');
}

function calculateResults() {
    const categoryScores = {};

    // Init categories
    CATEGORIES.forEach(cat => {
        categoryScores[cat] = {
            raw: 0,
            count: 0
        };
    });

    // Sum scores
    QUESTIONS.forEach(q => {
        const score = answers[q.id] || 0;
        if (categoryScores[q.category]) {
            categoryScores[q.category].raw += score;
            categoryScores[q.category].count++;
        }
    });

    // Calculate Weighted
    // Formula: (Total / 25) * 10
    const finalResults = CATEGORIES.map(cat => {
        const data = categoryScores[cat];
        // Ensure we don't divide by zero if count is somehow 0 (unlikely)
        // Actually, the specific instruction is Sum/25 * 10. 
        // Since there are 5 questions per category, Max raw is 25.
        // So Raw / 25 * 10.
        const weighted = (data.raw / 25) * 10;

        return {
            category: cat,
            raw: data.raw,
            weighted: weighted.toFixed(1) // Keep 1 decimal
        };
    });

    return finalResults;
}

function renderResults(results) {
    ui.resultsGrid.innerHTML = '';

    results.forEach(res => {
        const row = document.createElement('div');
        row.className = 'result-row';

        // Calculate width percent (max score is 10)
        const percent = (res.weighted / 10) * 100;

        row.innerHTML = `
            <div class="result-info">
                <h4>${res.category}</h4>
                <div class="result-bar-bg">
                    <div class="result-bar-fill" style="width: ${percent}%"></div>
                </div>
            </div>
            <div class="result-stats">
                <div class="result-score">${res.weighted}</div>
                <div class="result-sub">Raw: ${res.raw}/25</div>
            </div>
        `;
        ui.resultsGrid.appendChild(row);
    });
}

function renderPrintView(results) {
    // Render Questions List
    ui.printQuestionsList.innerHTML = '<h3>Responses</h3>';
    QUESTIONS.forEach(q => {
        const score = answers[q.id] || 0;
        const item = document.createElement('div');
        item.className = 'print-question-item';
        item.innerHTML = `<span class="print-question-text">${q.id}. ${q.text}</span>: <strong>${score}</strong>`;
        ui.printQuestionsList.appendChild(item);
    });

    // Render Results Table
    ui.printResultsBody.innerHTML = '';
    results.forEach(res => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${res.category}</td>
            <td>${res.raw}</td>
            <td>${res.weighted}</td>
        `;
        ui.printResultsBody.appendChild(row);
    });
}

