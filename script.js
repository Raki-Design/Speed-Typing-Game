const paragraphs = [
    'The quick brown fox jumps over the lazy dog. The dog, surprised by the sudden leap of the fox, quickly turned around and chased after the fox.',
    'A journey of a thousand miles begins with a single step. That step, whether it be small or large, is the first step towards achieving your goals.',
    'To be or not to be, that is the question. It is a question that has puzzled philosophers for centuries, and it is one that each of us must answer for ourselves.',
    'Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.',
    'Believe you can and you’re halfway there. The other half is all about taking action and not giving up when things get tough.',
    'Don’t wait. The time will never be just right. Start where you stand, and work with whatever tools you may have at your command, and better tools will be found as you go along.',
    'Life is what happens when you’re busy making other plans. So, don’t forget to take a moment to enjoy the journey.',
    'In the end, it’s not the years in your life that count. It’s the life in your years. Make every moment count.',
    'The only limit to our realization of tomorrow will be our doubts of today. Let us move forward with strong and active faith.',
    'The future belongs to those who believe in the beauty of their dreams. Dream big, work hard, and you can achieve anything.'
];

let startTime;
let timerInterval;
let score = 0;
let totalTyped = 0;

const wordDisplay = document.getElementById('wordDisplay');
const textInput = document.getElementById('textInput');
const stats = document.getElementById('stats');
const startButton = document.getElementById('startButton');
const resetButton = document.getElementById('resetButton');

function getRandomParagraph() {
    return paragraphs[Math.floor(Math.random() * paragraphs.length)];
}

function displayParagraph() {
    const paragraph = getRandomParagraph();
    wordDisplay.textContent = paragraph;
}

function startTimer() {
    startTime = new Date().getTime();
    timerInterval = setInterval(updateTimer, 1000);
}

function updateTimer() {
    const currentTime = new Date().getTime();
    const elapsedTime = (currentTime - startTime) / 1000;
    stats.textContent = `Time: ${Math.floor(elapsedTime)}s | Score: ${score} | Typing Speed: ${Math.floor(totalTyped / elapsedTime)} WPM`;
}

function startGame() {
    score = 0;
    totalTyped = 0;
    displayParagraph();
    startTimer();
    textInput.focus();
    textInput.addEventListener('input', checkInput);
    // Add the keypress event listener to handle the Enter key
    textInput.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            sendWords(this.value);
            this.value = ''; // Clear the input field after sending
        }
    });
}

function checkInput() {
    const typedParagraph = textInput.value.trim();
    const displayedParagraph = wordDisplay.textContent;

    if (typedParagraph === displayedParagraph) {
        score++;
        totalTyped += displayedParagraph.length;
        textInput.value = '';
        displayParagraph();
    }
}

// Add a new function to handle sending words (replace with your actual sending logic)
function sendWords(words) {
    console.log('Words sent:', words);
    // Add the logic to send words here
}

startButton.addEventListener('click', startGame);
resetButton.addEventListener('click', function() {
    clearInterval(timerInterval);
    startGame();
});
