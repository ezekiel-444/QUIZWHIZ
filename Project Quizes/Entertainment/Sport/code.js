const questions = [
    // 1 
        {
            question: "What was the score in the Euro 2012 final?",
            optionA: "2-0",
            optionB: "3-0",
            optionC: "4-0",
            optionD: "5-0",
            correctOption: "optionC"
        },
            
    // 2
        {
            question: "Who won the Man of the Match award in the 2014 World Cup final?",
            optionA: "Mario Goetze",
            optionB: "Sergio Aguero",
            optionC: "Lionel Messi",
            optionD: "Bastian Schweinsteiger",
            correctOption: "optionB"
        },
            
    // 3
        {
            question: "After losing a key player in the first game, which team went onto the semi-finals of Euro 2020?",
            optionA: "Denmark",
            optionB: "Spain",
            optionC: "Wales",
            optionD: "England",
            correctOption: "optionA"
        },
    
    // 4
        {
            question: "Who is the current top scorer in the UEFA Champions League?",
            optionA: "Alan Shearer",
            optionB: "Thierry Henry",
            optionC: "Cristiano Ronaldo",
            optionD: "Robert Lewandowski",
            correctOption: "optionC"
        },
    // 5
        {
            question: "David Beckham became president of which newly founded club in 2018?",
            optionA: "Bergamo Calcio",
            optionB: "Inter Miami",
            optionC: "West London Blue",
            optionD: "The Potteries",
            correctOption: "optionA"
        },
    // 6
        {
            question: "Why are the Los Angeles Lakers called the Lakers?",
            optionA: "Their first arena was on a lake",
            optionB: "Their founder was named Lake",
            optionC: "They came from Minnesota, the land of 10 000 lakes",
            optionD: "No one knows",
            correctOption: "optionC"
        },
    // 7
        {
            question: "What is depicted on the logo of the Golden State Warriors?",
            optionA: "Basketball",
            optionB: "Bridge",
            optionC: "City Skyline",
            optionD: "Spearhead",
            correctOption: "optionB"
        },
    // 7
        {
            question: "TWho won more championships, Kobe or Shaq?",
            optionA: "Kobe",
            optionB: "Shaq",
            optionC: "They are tied",
            optionD: "I dont know",
            correctOption: "optionA"
        },
    // 8
        {
            question: "What team used to be the Seattle Supersonics?",
            optionA: "Oklahoma City Thunder",
            optionB: "Orlando Magic",
            optionC: "Phoenix Suns",
            optionD: "San Antonio Spurs",
            correctOption: "optionA"
        },
    // 9
        {
            question: "Which of the following was never a teammate of Michael Jordan?",
            optionA: "Dennis Rodmam",
            optionB: "Grant Hills",
            optionC: "Toni Kukoč",
            optionD: "Steve Kerr",
            correctOption: "optionB"
        },   
    // 10
        {
            question: "What country is Manu Ginóbili from?",
            optionA: "Argentina",
            optionB: "France",
            optionC: "Italy",
            optionD: "USA",
            correctOption: "optionA"
        },   
    // 11
        {
            question: "Which NFL team is based in Atlanta?",
            optionA: "Saints",
            optionB: "Falcons",
            optionC: "Panthers",
            optionD: "Seahawks",
            correctOption: "optionB"
        },
    // 12
        {
            question: "How long is an NFL football field?",
            optionA: "100 meters",
            optionB: "120 yards",
            optionC: "490 Feet",
            optionD: "Ludacris",
            correctOption: "optionB"
        }, 
    // 13
        {
            question: "English and what other language are the official languages of the Olympics?",
            optionA: "German",
            optionB: "French",
            optionC: "Greek",
            optionD: "Russian",
            correctOption: "optionB"
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
                remark = "Bad Grades, YOU CAN DO BETTER"
                remarkColor = "red"
            }
            else if (playerScore >= 4 && playerScore < 7) {
                remark = "Average Grades, You can do better."
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