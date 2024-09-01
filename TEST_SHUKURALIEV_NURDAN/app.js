let correctCount = 0;

const questionElement = document.getElementById("question");
const answer = document.getElementById("answer");
const checkBtn = document.getElementById("check-btn");
const correctCountElement = document.getElementById("correct-count");
const resultElement = document.getElementById("result");

function generateQuestion() {
    const num1 = Math.floor(Math.random() *10) + 1;
    const num2 = Math.floor(Math.random() *10) + 1;
    questionElement.textContent = `Сколько будет ${num1} * ${num2}?`;
    return num1 * num2;
}

let correctAnswer = generateQuestion();

answer.addEventListener("input", function(){
    if(answer.value) {
        checkBtn.style.display = "inline-block";
    } else {
        checkBtn.style.display = "none"
    }
});

checkBtn.addEventListener("click", function() {
    let userAnswer = parseInt(answer.value);

    if (userAnswer === correctAnswer) {
        correctCount++;
        resultElement.textContent = "Правильно";
    } else {
        correctCount--;
        resultElement.textContent = "Неправильно";
    }

    correctCountElement.textContent = correctCount;

    setTimeout(function() {
        answer.value = "";
        resultElement.textContent = "";
        correctAnswer = generateQuestion();
    });

});