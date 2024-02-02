function displayQuizzes() {
    const quizzes = JSON.parse(localStorage.getItem('quizzes')) || [];
    const quizResultsList = document.getElementById('quiz-results-list');


    quizResultsList.innerHTML = '';

    quizzes.forEach((quiz, index) => {
        const listItem = document.createElement('li');
        
     
        const answersString = Array.isArray(quiz.answers) ? quiz.answers.join(', ') : ''; 
        
        listItem.textContent = `Question: ${quiz.question}\nAnswers: ${answersString}\n`;

        const revealButton = document.createElement('button');
        revealButton.textContent = 'Reveal Correct Answer';
        revealButton.className = 'reveal-button';
        revealButton.onclick = () => revealAnswer(quiz.correctAnswer);

        listItem.appendChild(revealButton);
        quizResultsList.appendChild(listItem);});  }


function revealAnswer(correctAnswer) {
    alert(`The correct answer is: ${correctAnswer}`);}

displayQuizzes();