// Получаем элементы
const startQuizBtn = document.getElementById('start-quiz-btn');
const quizModal = document.getElementById('quiz-guide-modal');
const continueQuizBtn = document.getElementById('continue-quiz-btn');
const exitQuizBtn = document.getElementById('exit-quiz-btn');

// Показываем модальное окно при нажатии на кнопку "Start Quiz"
startQuizBtn.addEventListener('click', () => {
    quizModal.style.display = 'flex';
});

// Закрыть квиз
exitQuizBtn.addEventListener('click', () => {
    alert('You have exited the quiz');
    quizModal.style.display = 'none'; // Скрыть модальное окно
});

// Продолжить квиз
continueQuizBtn.addEventListener('click', () => {
    alert('Quiz has started!');
    quizModal.style.display = 'none'; // Скрыть модальное окно
});
