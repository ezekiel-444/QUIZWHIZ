const questions = [
    // 1 
    {
       question: "Which of these is NOT an element of art?",
       optionA:"Balance",
       optionB: "Texture",
       optionC: "Line",
       optionD: "Color",
       correctOption: "optionA"
    },
    // 2
    {
       question: "Rough is an example of which element?",
        optionA:"Value",
        optionB: "Texture",
        optionC: "Shape",
        optionD: "Color",
        correctOption: "optionB"
    },
    // 3
    {
        question: "This refers to the way something feels or looks as if it might feel like something.",
         optionA:"Line",
         optionB: "Space",
         optionC: "Value",
         optionD: "Texture",
         correctOption: "optionD"
     },
    // 4
    {
        question: "This is an empty place or surface in or around a work of art. It can be two-dimensional, three-dimensional, negative, and/or positive.",
         optionA:"Line",
         optionB: "Shape",
         optionC: "Space",
         optionD: "Value",
         correctOption: "optionC"
     },
    // 5
    {
        question: "When lines meet to form an enclosed area, this is formed.",
         optionA:"Line",
         optionB: "Shape",
         optionC: "Value",
         optionD: "Form",
         correctOption: "optionB"
     },
    // 6
    {
        question: "This is the most basic element of art. It is used to form lots of different things in art. It is the path of a dot through a space.",
         optionA:"Line",
         optionB: "Shape",
         optionC: "Value",
         optionD: "Form",
         correctOption: "optionA"
     },
    // 7
    {
        question: "This is the lightness or darkness of a color.",
         optionA:"Value",
         optionB: "Texture",
         optionC: "Shape",
         optionD: "Color",
         correctOption: "optionA"
     },
    // 8
    {
        question: "They are three-dimensional—they have height, width, and thickness.",
         optionA:"Value",
         optionB: "Form",
         optionC: "Shape",
         optionD: "Color",
         correctOption: "optionC"
     },
    // 9
    {
        question: "This is what we see as light waves are absorbed or reflected by everything around us.",
         optionA:"Value",
         optionB: "Form",
         optionC: "Shape",
         optionD: "Color",
         correctOption: "optionD"
     },
     // 10
     {
        question: "What is the largest museum of fine art as defined by available gallery space?",
         optionA:"Louvre",
         optionB: "Hermitage",
         optionC: "Museo Nacional del Prado",
         optionD: "Metopolitan Museum of Art",
         correctOption: "optionA"
     },   
     // 11
     {
        question: "The painting “The Starry Night” by Vincent van Gogh is an example of what art movement?",
         optionA:"Pointilism",
         optionB: "Post-Impressionism",
         optionC: "Cubism",
         optionD: "Abstract Impressionism",
         correctOption: "optionB"
     },   
     // 12
     {
        question: "Who painted The Last Supper over a three-year period between 1495 to 1498?",
         optionA:"Michaelangelo",
         optionB: "Raphael",
         optionC: "Leonardo da Vinci",
         optionD: "Botticelli",
         correctOption: "optionC"
     },
     // 13
     {
        question: "What 2013 work of American literature follows the theft of a painting by Carel Fabritius?",
         optionA:"The Cardinal",
         optionB: "The White Dove",
         optionC: "The Goldfinch",
         optionD: "The Flamingo",
         correctOption: "optionC"
     },
    // 14
    {
        question: "The Portrait of Lisa Gherardini is the alternate title of what world-famous painting?",
        optionA:"Girl with the Pearl Earring",
        optionB: "Whistler’s Mother",
        optionC: "Milkmaid",
        optionD: "Mona Lisa",
        correctOption: "optionD"
    },  
    // 15
    {
        question: "What American artist is best known for his work in Abstract Impressionism?",
        optionA:"Jackson Pollock",
        optionB: "Andy Warhol",
        optionC: "Edward Hopperl",
        optionD: "Norman Rockwell",
        correctOption: "optionA"
    },
    // 16
    {
        question: "Dutch painter Vincent van Gogh famously cut off what body part in 1888?",
        optionA:"Finger",
        optionB: "Toe",
        optionC: "Nose",
        optionD: "Ear",
        correctOption: "optionD"
    },
    // 17
    {
        question: "Which of these painters is NOT Italian?",
        optionA:"Pablo Picasso",
        optionB: "Leonardo da Vinci",
        optionC: "Titian",
        optionD: "Caravaggio",
        correctOption: "optionA"
    },          
    // 18
    {
        question: "What type of paint commonly used in fine art is the slowest to dry?",
        optionA:"Acrylic",
        optionB: "Watercolor",
        optionC: "Oil",
        optionD: "Spray",
        correctOption: "optionC"
    },
    // 19
    {
        question: "The New York City art studio known as The Factory was ran by what famous Pop Art artist?",
        optionA:"Andy Warhol",
        optionB: "Roy Lichtenstein",
        optionC: "Keith Haring",
        optionD: "Jasper Johns",
        correctOption: "optionA"
    },
    // 20
    {
        question: "Which Mexican artist famously painted self-portraits with a distinctive unibrow?",
        optionA:"Frida Kahlo",
        optionB: "Diego Rivera",
        optionC: "David Alfaro Siqueiros",
        optionD: "Francisco Goya",
        correctOption: "optionD"
    },
    // 21
    {
        question: "Paul Gauguin was known for portraits and landscapes of what tropical region?",
        optionA:"Hawaii",
        optionB: "The Caribbean",
        optionC: "Amazon",
        optionD: "French Polynesia",
        correctOption: "optionD"
    },
    // 22
    {
        question: "Pablo Picasso is known as the pioneer of what art movement?",
        optionA:"Abstract Impressionism",
        optionB: "Surrealism",
        optionC: "Cubism",
        optionD: "Pop Art",
        correctOption: "optionC"
    },
    // 23
    {
        question: "In what century was the Sistine Chapel’s ceiling painted by Michelangelo?",
        optionA:"14th",
        optionB: "15th",
        optionC: "16th",
        optionD: "17th",
        correctOption: "optionB"
    },
    // 24
    {
        question: "What artist is known for the sculptures, The Thinker, The Kiss, and The Gates of Hell?",
        optionA:"Donatello",
        optionB: "Gian Lorenzo Bernini",
        optionC: "Yayoi Kusama",
        optionD: "Georgia O'Keefe",
        correctOption: "optionD"
    },
    // 25
    {
        question: "Which artist was on the Turner Prize shortlist for her controversial piece 'My Bed'?",
        optionA:"Tracey Emin",
        optionB: "Frida Kahlo",
        optionC: "Jeff Koons",
        optionD: "Auguste Rodin",
        correctOption: "optionA"
    },
    // 26
    {
        question: "In which Parisian museum would you find Monet's Water Lilies?",
        optionA:"The Louvre",
        optionB: "Musee D'Orsay",
        optionC: "Musee De L'Orangerie",
        optionD: "Pablo Picassou",
        correctOption: "optionC"
    },
    // 27
    {
        question: "Who painted the Persistence of Memory?",
        optionA:"Salvador Dali",
        optionB: "Joan Miro",
        optionC: "Rene Magritte",
        optionD: "Pablo Picasso",
        correctOption: "optionA"
    },
    // 28
    {
        question: "In which Spanish city would you find the Guggenheim?",
        optionA:"Madrid",
        optionB: "Bilbao",
        optionC: "Barcelona",
        optionD: "Valenciao",
        correctOption: "optionB"
    },
    // 29
    {
        question: "Where would you find the Statue of David?",
        optionA:"Accademia Gallery",
        optionB: "The Uffizi Gallery",
        optionC: "The Borghese Gallery",
        optionD: "The Vatican Museums",
        correctOption: "optionA"
    },
    // 30
    {
        question: "Which artist advocated AIDs awareness with his graffiti-style drawing?",
        optionA:"Banksy",
        optionB: "Damien Hirst",
        optionC: "Takashi Murakami",
        optionD: "Keith Haring",
        correctOption: "optionD"
    },
    // 31
    {
        question: "Where can you see the Mona Lisa?",
        optionA:"Guggenheim Museum",
        optionB: "Tate Britain",
        optionC: "Louvre",
        optionD: "Pompidou Centre",
        correctOption: "optionc"
    },
    // 32
    {
        question: "Which popular children’s cartoon characters are named after Italian Renaissance artists?",
        optionA:"Teenage Mutant Ninja Tortoises",
        optionB: "LEGO Ninjas",
        optionC: "Teenage Mutant Ninja Turtles",
        optionD: "Teenage Mutant Ninja Spiders",
        correctOption: "optionc"
    },
    // 33
    {
        question: "Which artist, often called the ‘mother of American modernists’, is known for her paintings of flowers and New York skyscrapers?",
        optionA:"Georgia O’Keeffe",
        optionB: "Eva Hess",
        optionC: "Jo Baer",
        optionD: "Amy Sillman",
        correctOption: "optionA"
    },
    // 34
    {
        question: "Which American artist, a major figure in the abstract expressionist movement, is best known for his ‘drip’ technique?",
        optionA:"Jackson Pollock",
        optionB: "Mark Rothko",
        optionC: "Jeff Koons",
        optionD: "Sam Francis",
        correctOption: "optionA"
    },
    // 35
    {
        question: "Who painted the Water Lilies, a series of 250 paintings made over a period of 30 years?",
        optionA:"Henri Matisse",
        optionB: "Claude Monet",
        optionC: "Paul Cezanne",
        optionD: "Édouard Manet",
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