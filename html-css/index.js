// Function to handle quiz submission
function submitQuiz() {
    const question = document.querySelector('input[name="question"]').value;
    const answer1 = document.querySelector('input[name="answer1"]').value;
    const answer2 = document.querySelector('input[name="answer2"]').value;
    const answer3 = document.querySelector('input[name="answer3"]').value;
    const answer4 = document.querySelector('input[name="answer4"]').value;
    const correctAnswer = document.querySelector('select[name="correctAnswer"]').value;

    // Check if any input is empty
    if (!question || !answer1 || !answer2 || !answer3 || !answer4 || !correctAnswer) {
        alert("Please fill out all inputs before submitting.");
        return;
    }

    const quizData = {
        question,
        answers: [answer1, answer2, answer3, answer4],
        correctAnswer
    };

    // Retrieve existing quizzes from local storage
    let quizzes = JSON.parse(localStorage.getItem('quizzes')) || [];

    // Add the current quiz to the list
    quizzes.push(quizData);

    // Save the updated list to local storage
    localStorage.setItem('quizzes', JSON.stringify(quizzes));

    // Redirect to the quiz results page
    window.location.href = 'quiz-results.html';
}