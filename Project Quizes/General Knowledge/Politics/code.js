const questions = [
    // 1 
    {
       question: "This U.S. president’s Secret Service code name was Lancer.",
       optionA:"Donald Trump",
       optionB: "Bill Clinton",
       optionC: "George H.W Bush",
       optionD: "Johnuhuj F.Kennedy",
       correctOption: "optionD"
    },
    //2
    {
        question: "Which amendment to the U.S. Constitution grants freedom of religion, speech, and the press?",
        optionA:"1st amendment",
        optionB: "5th amendment",
        optionC: "2nd amendment",
        optionD: "10th amendment",
        correctOption: "optionA"
     },    
    //3
     {
        question: "Which organization was established at the initiative of the victorious Allied Powers at the end of World War I?",
        optionA:"Potsdam Conference",
        optionB: "League of Nations",
        optionC: "NATO",
        optionD: "United Nations",
        correctOption: "optionB"
     },
    //4 
     {
        question: "Which international alliance’s self-defense clause was first invoked in 2001, following terrorist attacks on the World Trade Center and Pentagon?",
        optionA:"NATO",
        optionB: "European Nations",
        optionC: "ANZAC",
        optionD: "SEATO",
        correctOption: "optionA"
     }, 
    //5 
     {
        question: "Who is considered the father of the U.S. Constitution?",
        optionA:"Andrew Jackson",
        optionB: "James Madison",
        optionC: "Thomas Jefferson",
        optionD: "John Quincy Adams",
        correctOption: "optionB"
     },  
    //6
     {
        question: "Who was the first secretary-general of the United Nations?",
        optionA:"Trygve Lie",
        optionB: "Dag Hammarskjöld",
        optionC: "Kurt Waldheim",
        optionD: "Boutros Boutros-Ghali",
        correctOption: "optionA"
     }, 
     //7
     {
        question: "Which organization, established as a military counterweight to the Soviet military presence in eastern Europe during the Cold War, formed a cooperative bond with Russia in 2001 to address arms control and terrorism?",
        optionA:"League of Nations",
        optionB: "United Nations",
        optionC: "Nato",
        optionD: "European Union",
        correctOption: "optionB"
     }, 
     //8
     {
        question: "What is democratization?",
        optionA:"Voting to elect representatives to the government",
        optionB: "Rise of an absolute monarch",
        optionC: "Introduction of a democratic system",
        optionD: "Democratic Party getting elected",
        correctOption: "optionC"
     }, 
     //9
     {
        question: "What do we call a government where a single person holds absolute power?",
        optionA: "Authoritarian",
        optionB: "Absolutist",
        optionC: "Democratic",
        optionD: "Effective",
        correctOption: "optionB"
     },
     //10
     {
        question: "What governmental body was created to start Great Britain's move towards democracy?",
        optionA: "The National Diet",
        optionB: "The Monarchy",
        optionC: "Parliament",
        optionD: "The Red Coats",
        correctOption: "optionB"
     }, 
     //11
     {
        question: "Which philosopher supported the idea of a one-world government?",
        optionA: "Dante Alighieri",
        optionB: "Stephen Bronner",
        optionC: "Murray Bookchin",
        optionD: "Bertrand Russell",
        correctOption: "optionA"
     },
    //12
    {
        question: "What was the Brezhnev Doctrine?",
        optionA: "Soviet interference in the affairs of other communist countries in eastern Europe",
        optionB: "Soviet non-interference in the affairs of other communist countries in eastern Europe",
        optionC: "Polish interference in the affairs of other communist countries in eastern Europe",
        optionD: "American non-interference in the affairs of communist countries in eastern Europe",
        correctOption: "optionB"
    },
     //13
    {
        question: " _____ was a movement in Poland that helped led to democracy and the end of Communism.",
        optionA: "The Velvet Revolution",
        optionB: "The Warsaw Pact",
        optionC: "The Brezhnev Doctrine",
        optionD: "Solidarity Movement",
        correctOption: "optionD"
    },
     //14
    {
        question: "Hans Morgenthau is considered a _____ in international relations.",
        optionA: "Idealist",
        optionB: "Centrist",
        optionC: "Leftist",
        optionD: "advocate of Realpolitik",
        correctOption: "optionD"
    },
     //15
     {
        question: "Which Russian premier attempted to reinvigorate the Soviet economy and government through increased openness in the 1980s?",
        optionA: "Joseph Stalin",
        optionB: "Nikita Khrushchev",
        optionC: "Mikhail Gorbachev",
        optionD: "Leonid Brezhnev",
        correctOption: "optionC"
    },
     //16
     {
        question: "Which Russian premier attempted to reinvigorate the Soviet economy and government through increased openness in the 1980s?",
        optionA: "Glasnost",
        optionB: "Perestroika",
        optionC: "Brezhnev Doctrine",
        optionD: "",
        correctOption: "optionA"
     },    
     //17
     {
        question: "In which books of the Christian Bible is global government discussed?",
        optionA: "Matthew, Mark, Luke, and John",
        optionB: "All books of the Old Testament",
        optionC: "Ephesians, Romans, and Genesis",
        optionD: "Book of Revelation",
        correctOption: "optionD"
     },  
     //18
     {
        question: "What was the conclusion of the Nye Committee?",
        optionA: "That Hideki Tojo was a threat to America's national security and should be stopped",
        optionB: "That WWI had improved America's stature in the world and the nation should be a leader in future conflicts.",
        optionC: "That Hitler was making reasonable requests and should be allowed to rearm his nation.",
        optionD: "That WWI was fought for financial reasons and the U.S. should stay out of future foreign wars.",
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
                   remark = "Bad Grades, YOU CAN DO BETTER."
                   remarkColor = "red"
               }
               else if (playerScore >= 4 && playerScore < 7) {
                   remark = "Average Grades, You can do better."
                   remarkColor = "orange"
               }
               else if (playerScore >= 7) {
                   remark = "Excellent."
                   remarkColor = "lightgreen"
               }
               else if (playerScore >= 10) {
                   remark = "LEGENDARY"
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