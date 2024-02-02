const questions = [
    // 1 
{
    question: "Who did the cat in The Godfather belong to?",
    optionA: "Francis Ford Coppola",
    optionB: "Diane Keaton",
    optionC: "Al Pacino",
    optionD: "No one, it was a stray",
    correctOption: "optionD"
},            
// 2    
{
    question: "Who directed the movie Seven Samurai?",
    optionA: "Francis Ford Coppola",
    optionB: "Akira Kurosawa",
    optionC: "Tatsuya Nakadai",
    optionD: "Steven Spielberg",
    correctOption: "optionB"
},   
// 3
{
    question: "Which item is in every Fight Club scene?",
    optionA: "Coca-Cola can",
    optionB: "Starbucks cup",
    optionC: "Water bottle",
    optionD: "Dr Pepper can",
   correctOption: "optionB"
},
// 4
{
    question: "If you watch the Marvel movies in chronological order, which movie would you watch first?",
    optionA: "Iron Man",
    optionB: "Captain America: The First Avenger",
    optionC: "Thor",
    optionD: "Black Panther",
   correctOption: "optionB"
},
// 5
{
    question: "Which movie is this quote from: “Here’s looking at you, kid.”?",
    optionA: "Breakfast at Tiffany’s",
    optionB: "Citizen Kane",
    optionC: "Casablanca",
    optionD: "Notorious",
   correctOption: "optionC"
},
// 6
{
    question: "Some of the velociraptor noises in Jurassic Park are actually which animals mating?",
    optionA: "Tortoises",
    optionB: "Frogs",
    optionC: "Lizards",
    optionD: "Crocodiles",
   correctOption: "optionA"
},
// 7
{
    question: "Which actor hasn't played the Joker?",
    optionA: "Jack Nicholson",
    optionB: "Sean Penn",
    optionC: "Jared Leto",
    optionD: "Mark Hamill",
    correctOption: "optionB"
},
//8
{
    question: "Which movie is this quote from: 'What’s in the box?'",
    optionA: "Speed",
    optionB: "Reservoir Dogs",
    optionC: "The Boondock",
    optionD: "Se7en",
    correctOption: "optionD"
},
//9
{
    question: "Who directed Silence of the Lambs?",
    optionA: "Wes Anderson",    
    optionB: "Jonathan Demme",
    optionC: "Oliver Stone",
    optionD: "Christopher Nolan",
    correctOption: "optionB"
},
// 10
{
    question: "Which Studio Ghibli film was NOT directed by Hayao Miyazaki?",
    optionA: "Spirited Away",
    optionB: "Grave of the Fireflies",
    optionC: "Ponyo",
    optionD: "Princess Mononoke",
    correctOption: "optionB"
},
// 11
{
    question: "Which professional athlete was considered for the lead in The Terminator?",
    optionA: "Dan Marino",
    optionB: "Mike Tyson",
    optionC: "O.J. Simpson",
    optionD: "Wayne Gretzky",
   correctOption: "optionC"
},
// 12
{
    question: "Which Star Wars characters appear in Indiana Jones?",
    optionA: "R2-D2 and C-3PO",
    optionB: "Luke Skywalker and Princess Leia",
    optionC: "Yoda and Obi-Wan Kenobi",
    optionD: "Han Solo and Chewbacca",
   correctOption: "optionA"
},
// 13
{
    question: "United Artists is a film and television entertainment studio founded in 1919. Among the studio’s four co-founders, who was the oldest? ",
    optionA: "D.W. Griffith ",
    optionB: "Douglas Fairbanks s",
    optionC: "Mary Pickford ",
    optionD: "Charlie Chaplin",
   correctOption: "optionA"
},
// 14
{
    question: "Originally released in 1929, what is the first Hollywood film to contain an entire black cast? ",
    optionA: "Hoorah!",
    optionB: "Cheers!",
    optionC: "Hallelujah!",
    optionD: " Yipee!",
   correctOption: "optionA"
},
// 15 
{
    question: "What is the name of the titular prince in a 1926 production that also happens to be the oldest surviving animated feature film? ",
    optionA: "Abdul",
    optionB: "Ashur",
    optionC: "Achmed",
    optionD: "Ali",
   correctOption: "optionC"
},
// 16
{
    question: "Which two actors directed themselves in movies and won Oscars for Best Actor? ",
    optionA: "Al Pacino and Timothy Hutton",
    optionB: "Jack Nicholson and Kevin Spacey",
    optionC: "Laurence Olivier and Roberto Benigni",
    optionD: "Tom Hanks and Paul Newman",
   correctOption: "optionC"
},
// 17
{
    question: "'After all, tomorrow is another day!' was the last line in which Oscar-winning Best Picture?",
    optionA: "Gone With the Wind",
    optionB: "Great Expectations",
    optionC: "Harold and Maude",
    optionD: "The Matrix",
   correctOption: "optionA"
},
// 18
{
    question: "The code in The Matrix comes from what food recipes?",
    optionA: "Sushi",
    optionB: "Dumplings",
    optionC: "Stir-fry",
    optionD: "Pad thai",
   correctOption: "optionA"
},
// 19
{
    question: "What’s the name of Meatloaf’s character in The Rocky Horror Picture Show?",
    optionA: "Henry",
    optionB: "Eddie",
    optionC: "Chuck",
    optionD: "Al",
   correctOption: "optionB"
},
// 20
{
    question: "Who actually drew the sketch of Rose in Titanic?",
    optionA: "Leonardo DiCaprio",
    optionB: "Billy Zane",
    optionC: "James Cameron",
    optionD: "Kathy Bates",
   correctOption: "optionC"
},
// 21
{
    question: "Who voices Joy in Inside Out?",
    optionA: "Tina Fey",
    optionB: "Kathryn Hahn",
    optionC: "Ellen DeGeneres",
    optionD: "Amy Poehler",
   correctOption: "optionD"
},
// 22
{
    question: "Who voices Dori in Finding Nemo?",
    optionA: "Tina Fey",
    optionB: "Kathryn Hahn",
    optionC: "Ellen DeGeneres",
    optionD: "Amy Poehler",
   correctOption: "optionC"
},
// 23
{
    question: "Where were The Lord of the Rings movies filmed?",
    optionA: "Ireland",
    optionB: "Iceland",
    optionC: "New Zealand",
    optionD: "Austria",
   correctOption: "optionC"
},
// 24
{
    question: "Which country does Forrest Gump travel to as part of the All-American Ping-Pong Team?",
    optionA: "Vietnam",
    optionB: "China",
    optionC: "Sweden",
    optionD: "France",
   correctOption: "optionB"
},
// 25
{
    question: "Which famous Pulp Fiction scene was filmed backward?",
    optionA: "Vincent and Mia’s dance",
    optionB: "Mia’s overdose",
    optionC: "'Royale with cheese'",
    optionD: "Ezekiel 25:17 scene",
   correctOption: "optionB"
},
// 26
{
    question: "Who was the first Black person to win an Oscar?",
    optionA: "Hattie McDaniel",
    optionB: "Sidney Poitier",
    optionC: "Dorothy Dandridge",
    optionD: "James Earl Jones",
   correctOption: "optionA"
},
// 27
{
    question: "Freddy Krueger wears a striped sweater that is which colors?",
    optionA: "Red and blue",
    optionB: "Orange and green",
    optionC: "Red and green",
    optionD: "Orange and brown",
   correctOption: "optionC"
},
// 28
{
    question: "What is the name of the fictional land where Frozen takes place?",
    optionA: "Arendelle",
    optionB: "Naples",
    optionC: "Florin",
    optionD: "Grimm",
   correctOption: "optionA"
},
// 29
{
    question: "What score did Elle Woods get on her LSAT in Legally Blonde?",
    optionA: "155",
    optionB: "166",
    optionC: "170",
    optionD: "179",
   correctOption: "optionD"
},
// 30
{
    question: "What was the top-grossing movie of 2014?",
    optionA: "The Hunger Games: Mockingjay Part 1",
    optionB: "The Lego Movie",
    optionC: "Captain America: The Winter Soldier",
    optionD: "Guardians of the Galaxy",
   correctOption: "optionD"
},
    ]
        
        
        let shuffledQuestions = [] 
        
        function handleQuestions() { 
            while (shuffledQuestions.length <= 9) {
                const random = questions[Math.floor(Math.random() * questions.length)]
                if (!shuffledQuestions.includes(random)) {
                    shuffledQuestions.push(random)
                }
            }
        }
        
        
        let questionNumber = 1 
        let playerScore = 0  
        let wrongAttempt = 0 
        let indexNumber = 0 
        
        
        function NextQuestion(index) {
            handleQuestions()
            const currentQuestion = shuffledQuestions[index]
            document.getElementById("question-number").innerHTML = questionNumber
            document.getElementById("player-score").innerHTML = playerScore
            document.getElementById("display-question").innerHTML = currentQuestion.question;
            document.getElementById("option-one-label").innerHTML = currentQuestion.optionA;
            document.getElementById("option-two-label").innerHTML = currentQuestion.optionB;
            document.getElementById("option-three-label").innerHTML = currentQuestion.optionC;
            document.getElementById("option-four-label").innerHTML = currentQuestion.optionD;
        
        }
        
        
        function checkForAnswer() {
            const currentQuestion = shuffledQuestions[indexNumber] 
            const currentQuestionAnswer = currentQuestion.correctOption 
            const options = document.getElementsByName("option"); 
            let correctOption = null
        
            options.forEach((option) => {
                if (option.value === currentQuestionAnswer) {
                    correctOption = option.labels[0].id
                }
            })
        
            if (options[0].checked === false && options[1].checked === false && options[2].checked === false && options[3].checked == false) {
                document.getElementById('option-modal').style.display = "flex"
            }
        
            options.forEach((option) => {
                if (option.checked === true && option.value === currentQuestionAnswer) {
                    document.getElementById(correctOption).style.backgroundColor = "green"
                    playerScore++ 
                    indexNumber++ /
                    setTimeout(() => {
                        questionNumber++
                    }, 1000)
                }
        
                else if (option.checked && option.value !== currentQuestionAnswer) {
                    const wrongLabelId = option.labels[0].id
                    document.getElementById(wrongLabelId).style.backgroundColor = "red"
                    document.getElementById(correctOption).style.backgroundColor = "green"
                    wrongAttempt++ 
                    indexNumber++
                    setTimeout(() => {
                        questionNumber++
                    }, 1000)
                }
            })
        }
        
        
        
        
        function handleNextQuestion() {
            checkForAnswer() 
            unCheckRadioButtons()
            setTimeout(() => {
                if (indexNumber <= 9) {
                    NextQuestion(indexNumber)
                }
                else {
                    handleEndGame()
                }
                resetOptionBackground()
            }, 1000);
        }
        
        function resetOptionBackground() {
            const options = document.getElementsByName("option");
            options.forEach((option) => {
                document.getElementById(option.labels[0].id).style.backgroundColor = ""
            })
        }
        
        function unCheckRadioButtons() {
            const options = document.getElementsByName("option");
            for (let i = 0; i < options.length; i++) {
                options[i].checked = false;
            }
        }
        
        function handleEndGame() {
            let remark = null
            let remarkColor = null
        
            if (playerScore <= 3) {
                remark = "Bad Grades, Try Agin"
                remarkColor = "red"
            }
            else if (playerScore >= 4 && playerScore < 7) {
                remark = "Average Grades, You can do better <3"
                remarkColor = "orange"
            }
            else if (playerScore >= 7) {
                remark = "Excellent, Keep the good work going."
                remarkColor = "lightgreen"
            }
            else if (playerScore = 10) {
                remark = "LETS GO!!! Great Job."
                remarkColor = "green"
            }
            const playerGrade = (playerScore / 10) * 100
        
            document.getElementById('remarks').innerHTML = remark
            document.getElementById('remarks').style.color = remarkColor
            document.getElementById('grade-percentage').innerHTML = playerGrade
            document.getElementById('wrong-answers').innerHTML = wrongAttempt
            document.getElementById('right-answers').innerHTML = playerScore
            document.getElementById('score-modal').style.display = "flex"
        
        }
        
        function closeScoreModal() {
            questionNumber = 1
            playerScore = 0
            wrongAttempt = 0
            indexNumber = 0
            shuffledQuestions = []
            NextQuestion(indexNumber)
            document.getElementById('score-modal').style.display = "none"
        }
        
        function closeOptionModal() {
            document.getElementById('option-modal').style.display = "none"
        }