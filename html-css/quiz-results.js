 // Function to display submitted quizzes
 function displayQuizzes() {
    const quizzes = JSON.parse(localStorage.getItem('quizzes')) || [];
    const quizResultsList = document.getElementById('quiz-results-list');

    // Clear existing list items
    quizResultsList.innerHTML = '';

    // Populate the list with quiz results
    quizzes.forEach((quiz, index) => {
        const listItem = document.createElement('li');
        
        // Ensure quiz.answers is an array
        const answersString = Array.isArray(quiz.answers) ? quiz.answers.join(', ') : '';
        
        listItem.textContent = `Question: ${quiz.question}\nAnswers: ${answersString}\n`;

        const revealButton = document.createElement('button');
        revealButton.textContent = 'Reveal Correct Answer';
        revealButton.className = 'reveal-button';
        revealButton.onclick = () => revealAnswer(quiz.correctAnswer);

        listItem.appendChild(revealButton);
        quizResultsList.appendChild(listItem);
    });
}

// Function to reveal correct answer
function revealAnswer(correctAnswer) {
    alert(`The correct answer is: ${correctAnswer}`);
}

// Display submitted quizzes on page load
displayQuizzes();