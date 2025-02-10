// Получаем элементы
const startQuizBtn = document.getElementById('start-quiz-btn');
const quizModal = document.getElementById('quiz-guide-modal');
const continueQuizBtn = document.getElementById('continue-quiz-btn');
const exitQuizBtn = document.getElementById('exit-quiz-btn');
const quizContainer = document.getElementById('quiz-modal');
const questionContainer = document.getElementById('question-container');
const scoreDisplay = document.getElementById('score');
const nextBtn = document.getElementById('next-question-btn');

// Вопросы для квиза
const questions = [
    {
        question: "Төмендегі сөздердің қайсысы сын есім?",
        options: [
            "A. Кітап",
            "B. Жақсы",
            "C. Оқу",
            "D. Адам"
        ],
        answer: "B. Жақсы"
    },
    {
        question: "Төмендегі сөздердің қайсысы сан?",
        options: [
            "A. Үй",
            "B. Бес",
            "C. Күн",
            "D. Су"
        ],
        answer: "B. Бес"
    },
    {
        question: "Төмендегі сөйлемдердің қайсысы дұрыс сұрақ?",
        options: [
            "A. Сен қайда барасың?",
            "B. Сен барасың қайда?",
            "C. Қайда сен барасың?",
            "D. Барасың сен қайда?"
        ],
        answer: "A. Сен қайда барасың?"
    },
    {
        question: "'Кітап' сөзінің көпше түрі қалай жазылады?",
        options: [
            "A. Кітаптар",
            "B. Кітаптер",
            "C. Кітаптарлар",
            "D. Кітаптерлер"
        ],
        answer: "A. Кітаптар"
    },
    {
        question: "Антоним дегеніміз не?",
        options: [
            "A. Бір-біріне ұқсас сөздер",
            "B. Бір-біріне қарама-қарсы мағынасы бар сөздер",
            "C. Синонимдер",
            "D. Сөздердің көпше түрі"
        ],
        answer: "B. Бір-біріне қарама-қарсы мағынасы бар сөздер"
    },
    {
        question: "'Жылдам' сөзінің антонимі қандай?",
        options: [
            "A. Қиын",
            "B. Тез",
            "C. Жеңіл",
            "D. Баяу"
        ],
        answer: "D. Баяу"
    }
];

let currentQuestionIndex = 0;
let score = 0;

// Показываем модальное окно с гайдом при нажатии на кнопку "Start Quiz"
startQuizBtn.addEventListener('click', () => {
    quizModal.style.display = 'flex';
});

// Закрыть квиз
exitQuizBtn.addEventListener('click', () => {
    alert('You have exited the quiz');
    quizModal.style.display = 'none'; // Скрыть модальное окно с гайдом
});

// Продолжить квиз
continueQuizBtn.addEventListener('click', () => {
    quizModal.style.display = 'none'; // Скрыть модальное окно с гайдом
    startQuiz();
});

// Начинаем квиз
function startQuiz() {
    quizContainer.style.display = 'flex';
    loadQuestion();
}

// Загружаем вопрос
function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionContainer.innerHTML = `
        <p>${currentQuestion.question}</p>
        ${currentQuestion.options.map((option, index) => {
            return `<input type="radio" name="answer" id="option${index}" value="${option}">
                    <label for="option${index}">${option}</label><br>`;
        }).join('')}
    `;
    scoreDisplay.textContent = `${score} / 5`;
}

// Обработчик кнопки "Next"
nextBtn.addEventListener('click', () => {
    const selectedOption = document.querySelector('input[name="answer"]:checked');
    if (selectedOption) {
        const correctAnswer = questions[currentQuestionIndex].answer;
        if (selectedOption.value === correctAnswer) {
            score++;
        }
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        alert(`Quiz Over! Your score is ${score} out of 5.`);
        quizContainer.style.display = 'none';
    }
});

function startQuiz() {
    quizContainer.style.display = 'flex';
    score = 0; // Reset score at start
    currentQuestionIndex = 0;
    loadQuestion();
}

// Update the score dynamically
function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionContainer.innerHTML = `
        <p>${currentQuestion.question}</p>
        ${currentQuestion.options.map((option, index) => {
            return `
                <label for="option${index}">
                    <input type="radio" name="answer" id="option${index}" value="${option}">
                    ${option}
                </label>`;
        }).join('')}
         <div id="score">Score: ${score} / 5</div>
    `;
}

function updateScore() {
    document.getElementById('score').textContent = `Score: ${score} / 5`;
}

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionContainer.innerHTML = `
        <p>${currentQuestion.question}</p>
        ${currentQuestion.options.map((option, index) => {
            return `
                <label for="option${index}">
                    <input type="radio" name="answer" id="option${index}" value="${option}">
                    ${option}
                </label>`;
        }).join('')}
    `;
    updateScore();
}

nextBtn.addEventListener('click', () => {
    const selectedOption = document.querySelector('input[name="answer"]:checked');
    if (selectedOption) {
        if (selectedOption.value === questions[currentQuestionIndex].answer) {
            score++;
        }
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        alert(`Quiz Over! Your score is ${score} out of 5.`);
        quizContainer.style.display = 'none';
    }
});

