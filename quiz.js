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
        question: "What does HTML stand for?",
        options: [
            "A. Hyper Type Multi Language",
            "B. Hyper Text Multiple Language",
            "C. Hyper Text Markup Language",
            "D. Home Text Multi Language"
        ],
        answer: "C. Hyper Text Markup Language"
    },
    {
        question: "What does CSS stand for?",
        options: [
            "A. Cascading Style Sheets",
            "B. Coded Style Sheets",
            "C. Computer Style Sheets",
            "D. Styles Sheets"
        ],
        answer: "A. Cascading Style Sheets"
    },
    {
        question: "What is the correct HTML element for the largest heading?",
        options: [
            "A. <h1>",
            "B. <heading>",
            "C. <head>",
            "D. <h6>"
        ],
        answer: "A. <h1>"
    },
    {
        question: "Which HTML attribute is used to define inline styles?",
        options: [
            "A. style",
            "B. class",
            "C. font",
            "D. styles"
        ],
        answer: "A. style"
    },
    {
        question: "How do you add a comment in HTML?",
        options: [
            "A. // This is a comment",
            "B. <!-- This is a comment -->",
            "C. ' This is a comment",
            "D. -- This is a comment --"
        ],
        answer: "B. <!-- This is a comment -->"
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

