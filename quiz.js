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
        options: ["A. Кітап", "B. Жақсы", "C. Оқу", "D. Адам"],
        answer: "B. Жақсы"
    },
    {
        question: "Төмендегі сөздердің қайсысы сан?",
        options: ["A. Үй", "B. Бес", "C. Күн", "D. Су"],
        answer: "B. Бес"
    },
    {
        question: "Төмендегі сөйлемдердің қайсысы дұрыс сұрақ?",
        options: ["A. Сен қайда барасың?", "B. Сен барасың қайда?", "C. Қайда сен барасың?", "D. Барасың сен қайда?"],
        answer: "A. Сен қайда барасың?"
    },
    {
        question: "'Кітап' сөзінің көпше түрі қалай жазылады?",
        options: ["A. Кітаптар", "B. Кітаптер", "C. Кітаптарлар", "D. Кітаптерлер"],
        answer: "A. Кітаптар"
    },
    {
        question: "Антоним дегеніміз не?",
        options: ["A. Бір-біріне ұқсас сөздер", "B. Бір-біріне қарама-қарсы мағынасы бар сөздер", "C. Синонимдер", "D. Сөздердің көпше түрі"],
        answer: "B. Бір-біріне қарама-қарсы мағынасы бар сөздер"
    },
    {
        question: "'Жылдам' сөзінің антонимі қандай?",
        options: ["A. Қиын", "B. Тез", "C. Жеңіл", "D. Баяу"],
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
    quizContainer.style.display = 'none'; // Скрыть сам квиз
});

// Продолжить квиз
continueQuizBtn.addEventListener('click', () => {
    quizModal.style.display = 'none'; // Скрыть модальное окно с гайдом
    startQuiz();
});

// Начинаем квиз
function startQuiz() {
    quizContainer.style.display = 'flex';
    score = 0; // Сбросить счет перед новым квизом
    currentQuestionIndex = 0;
    loadQuestion();
}

// Загружаем вопрос
function loadQuestion() {
    if (currentQuestionIndex >= questions.length) {
        endQuiz();
        return;
    }

    const currentQuestion = questions[currentQuestionIndex];
    questionContainer.innerHTML = `
        <p>${currentQuestion.question}</p>
        ${currentQuestion.options.map((option, index) => `
            <label for="option${index}">
                <input type="radio" name="answer" id="option${index}" value="${option}">
                ${option}
            </label><br>
        `).join('')}
    `;

    updateScore();
}

// Обновление счета
function updateScore() {
    scoreDisplay.textContent = `Ұпай: ${score} / ${questions.length}`;
}

// Обработчик кнопки "Next"
nextBtn.addEventListener('click', () => {
    const selectedOption = document.querySelector('input[name="answer"]:checked');

    if (!selectedOption) {
        alert("Жауапты таңдаңыз!");
        return;
    }

    if (selectedOption.value === questions[currentQuestionIndex].answer) {
        score++;
    }

    currentQuestionIndex++;
    loadQuestion();
});

// Завершение квиза
function endQuiz() {
    alert(`Quiz Over! Ұпай саны: ${score} / ${questions.length}.`);
    quizContainer.style.display = 'none';
}

