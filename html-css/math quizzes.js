const questions = [
    // 1 
    {
       question: "What is 6372+5849?",
       optionA:"14253",
       optionB: "12221",
       optionC: "06458",
       optionD: "74839",
       correctOption: "optionB"
    },
    // 2
    {
        question: "If there are 23 boys and 21 girls in class A, Class B has 21 boys and 22 girls. How many girls and boys are there in Class A and B combined?",
        optionA:"73 boys and 70 girls",
        optionB: "35 boys and 37 girls",
        optionC: "44 boys and 43 girls",
        optionD: "50 boys and 47 girls",
        correctOption: "optionC"
    },
    // 3
    {
        question: "Your mom is in the market. She bought 22kg of fish and 24kg of chicken. You ate 4kg of chicken and 12kg of fish. How many kg was left of the 2 foods combined?",
        optionA:"34kgs",
        optionB: "37kg",
        optionC: "41kg",
        optionD: "30kg",
        correctOption: "optionD"
    },
    // 4
    {
        question: "What if you divide 352 by 12?",
        optionA:"23.9",
        optionB: "27.9",
        optionC: "29.3",
        optionD: "67.8",
        correctOption: "optionC"
    },
    // 5
    {
        question: "What if you divide 70 by 69?",
        optionA:"1",
        optionB: "11",
        optionC: "1.1",
        optionD: "1.01",
        correctOption: "optionD"
    },
    // 6
    {
        question: "What if you divide 20 by 0.5?",
        optionA:"10",
        optionB: "20.5",
        optionC: "40",
        optionD: "30",
        correctOption: "optionC"
    },
    // 7
    {
        question: "What if you multiply 45.5 by 2?",
        optionA:"91",
        optionB: "92",
        optionC: "93",
        optionD: "90.5",
        correctOption: "optionA"
    },
    // 8
    {
        question: "What if you add 7778.1 into 0.0001",
        optionA:"7778.0010",
        optionB: "7778.1001",
        optionC: "7778.0011",
        optionD: "7779",
        correctOption: "optionB"
    },
    // 9
    {
        question: "You are the baker. You have 253 loaves of bread and 152 donuts. You are making 13 more loaves of bread and 4 donuts, while a boy bought 7 donuts and 17 loaves of bread. How many loaves of bread and donuts do you still have?",
        optionA:"264",
        optionB: "398",
        optionC: "402",
        optionD: "372",
        correctOption: "optionB"
    },
    // 10
    {
        question: "what is th derivative of (x+1)sinx",
        optionA:"(x+1)tanx",
        optionB: "sinx",
        optionC: "sinx+(x+1)cosx",
        optionD: "(x+2)cosx",
        correctOption: "optionC"
    },
    // 11
    {
        question: "Integral of the constant function f(x) = k is:",
        optionA:"C",
        optionB: "0",
        optionC: "kx+C",
        optionD: "k+C",
        correctOption: "optionC"
    },
    // 12
    {
        question: "What is the integral of the function f(x) = sin 2x?",
        optionA:"(-1/2) cos x + C",
        optionB: "(1/2) sin x + C",
        optionC: "(-1/2) cos 2x + C",
        optionD: "(1/2) sin 2x + C",
        correctOption: "optionC"
    },
    // 13
    {
        question: "Evaluate the approximate value of the definite integral of ln(x) over [2,4]",
        optionA:"-6.3",
        optionB: "0.9",
        optionC: "-1.204",
        optionD: "2.16",
        correctOption: "optionD"
    },
    // 14
    {
        question: "For a function f(x) to satisfy the mean value theorem over (a, b), the function should be continuous on:",
        optionA:"[a,b)",
        optionB: "[a, b]",
        optionC: "(a,b]",
        optionD: "(a, b)",
        correctOption: "optionB"
    },

    // 15
    {
        question: "Solution of the differential equation 𝑥 𝑑𝑦 − 𝑦 𝑑𝑥 = 0 represents",
        optionA:"A parabola whose vertex is at the origin",
        optionB: "A circle with centre at the origin",
        optionC: "A rectangular hyperbola",
        optionD: "Straight lines passing through the origin",
        correctOption: "optionD"
    },
    // 16
    {
        question: "The differential equation of the curve for which the initial ordinate of any tangent is equal to the corresponding subnormal, is",
        optionA:"Non-linear",
        optionB: "Homogeneous",
        optionC: "In variable separable form",
        optionD: "None of the above",
        correctOption: "optionB"
    },

    // 17
    {
        question: "As per divergence function, ∇ (F x G) = ?",
        optionA:"G.(∇xF)+F.(∇xG)",
        optionB: "G.(∇xF)-F.(∇xG)",
        optionC: "G.(∇.F)-F.(∇.G)",
        optionD: "None of the above",
        correctOption: "optionB"
    },
    
    // 18
    {
        question: "Based on Degree two function: ∇ x (∇ f) = ?",
        optionA:"0",
        optionB: "1",
        optionC: "-1",
        optionD: "None of these",
        correctOption: "optionA"
    },
    // 19
    {
        question: "Which of the following is the wrong notation for derivative?",
        optionA:"dy/dx",
        optionB: "f'(x)",
        optionC: "-1",
        optionD: "dy'",
        correctOption: "optionD"
    },
    // 20
    {
        question: "The product rule is used to",
        optionA:"Integrate a function",
        optionB: "Differentiate a function",
        optionC: "Divide the functions",
        optionD: "None of these",
        correctOption: "optionB"
    },
    // 21
    {
        question: "The product rule is used to",
        optionA:"Integrate a function",
        optionB: "Differentiate a function",
        optionC: "Divide the functions",
        optionD: "None of these",
        correctOption: "optionB"
    },
    // 22
    {
        question: "The product rule formula is",
        optionA:"dy/dx=uv+vu",
        optionB: "dy/dx=uv'+vu'",
        optionC: "dy/dx=u'v'+vu",
        optionD: "dy/dx=uv-vu'",
        correctOption: "optionB"
    },
    // 23
    {
        question: "The derivative of the function is the",
        optionA:"Slope of secant",
        optionB: "Minima",
        optionC: "Maxima",
        optionD: "Instantaneous rate of change",
        correctOption: "optionD"
    },
    
    // 24
    {
        question: "Quotient rule is used to find thee",
        optionA:"Derivative of the function",
        optionB: "None of these",
        optionC: "Integration",
        optionD: "Root",
        correctOption: "optionA"
    },
    // 25
    {
        question: "Evaluate: d/dx [(x/7) + 7]",
        optionA:"50/7",
        optionB: "7",
        optionC: "49/7",
        optionD: "1/7",
        correctOption: "optionA"
    },
    
    // 26
    {
        question: "According to graphic or point method of elasticity of demand, at midpoint on a straight-line demand curve, elasticity will be ____________.",
        optionA:"unitary (i.e. one)",
        optionB: "Less than one",
        optionC: "greater than one",
        optionD: "None of the above",
        correctOption: "optionA"
    },
    // 27
    {
        question: "If a demand curve exhibits unit elasticity for all prices the MR curve ___________.",
        optionA:"unitary (i.e. one)",
        optionB: "Lies below the demand curve",
        optionC: "is parallel to the x-axis",
        optionD: "is parallel to the y-axis",
        correctOption: "optionC"
    },
    // 28
    {
        question: "Price depends on _________. ",
        optionA:"utility and scarcity",
        optionB: "cost of production",
        optionC: "transferability",
        optionD: "all of the above",
        correctOption: "optionD"
    },
    // 29
    {
        question: "If elasticity of supply becomes negative, supply curve is _________.",
        optionA:"negatively sloping",
        optionB: "positively sloping",
        optionC: "horizontal",
        optionD: "vertical",
        correctOption: "optionA"
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