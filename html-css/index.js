function submitQuiz() {

    const question = document.querySelector('input[name="question"]').value;
    const answer1 = document.querySelector('input[name="answer1"]').value;
    const answer2 = document.querySelector('input[name="answer2"]').value;
    const answer3 = document.querySelector('input[name="answer3"]').value;
    const answer4 = document.querySelector('input[name="answer4"]').value;
    const correctAnswer = document.querySelector('select[name="correctAnswer"]').value;

 if (!question || !answer1 || !answer2 || !answer3 || !answer4 || !correctAnswer) {
        alert("Please fill out all inputs before submitting.");
        return;}


 const quizData = {
        question,
        answers: [answer1, answer2, answer3, answer4],
        correctAnswer};
           

     let quizzes = JSON.parse(localStorage.getItem('quizzes')) || [];


     quizzes.push(quizData);


     localStorage.setItem('quizzes', JSON.stringify(quizzes));


     window.location.href = 'quiz-results.html';}