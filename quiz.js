function checkAnswer() {
    let correctAnswer = "4";
    let selectedAnswer = document.querySelector('input[name="quiz"]:checked');
    let feedback = document.getElementById('feedback');
    let userAnswer = selectedAnswer.value;


    if (userAnswer === correctAnswer) {
        feedback.textContent = "Correct! Well done.";
    } else {
        feedback.textContent = "That's incorrect. Try again!";
    }
}
document.getElementById('submit-answer').addEventListener('click', checkAnswer);

