const questions = [
    // 1 
        {
            question: "What was the reason the USA, the European Union and other democratic countries sanctioned the Russian Federation in 2022?",
            optionA: "War in Georgia",
            optionB: "War in Afghanistan",
            optionC: "War in Ukraine",
            optionD: "War in Syria",
            correctOption: "optionC"
        },
    // 2
        {
            question: "What does <b>NOT</b> influence formation of European climate",
            optionA: "North Atlantic currents",
            optionB: "Alpine-Himalayan system",
            optionC: "Sahara desert",
            optionD: "Cold currents in the Pacific Ocean",
            correctOption: "optionD"
        },
    // 3
        {
            question: "Where is Ruhr Urban Area located?",
            optionA: "United Kingdom",
            optionB: "France",
            optionC: "Italy",
            optionD: "Germany",
            correctOption: "optionD"
        },
    // 4
        {
            question: "<b>(TRICK QUESTION)</b> Which country has TWO official languages?",
            optionA: "USA",
            optionB: "Albania",
            optionC: "Canada",
            optionD: "Luxembourg",
            correctOption: "optionC"
        },
    // 5
        {
            question: "Which of the following is <b>NOT</b> considered as a green energy",
            optionA: "Solar",
            optionB: "Wind",
            optionC: "Geothermal",
            optionD: "Coal",
            correctOption: "optionD"
        },
    // 6
        {
            question: "Which is the longest river in the world ?",
            optionA: "Nile",
            optionB: "Amzaon",
            optionC: "yangtze",
            optionD: "Mississppi",
            correctOption: "optionA"
        },
    // 7
        {
            question: "In which country is the place with geographical coordinates 40.7128° N, 74.0060° W",
            optionA: "India",
            optionB: "Ukraine",
            optionC: "Argentine",
            optionD: "USA",
            correctOption: "optionD"
        },
    // 8
        {
            question: "Which country has the lowerst avergae population density?",
            optionA: "Saudi Arabia",
            optionB: "China",
            optionC: "Mongolia",
            optionD: "Iceland",
            correctOption: "optionC"
        },
    // 9
        {
            question: "Which of these animals is a endemic to Australia?",
            optionA: "Savanna Elephant",
            optionB: "East African Lion",
            optionC: "Kiwi",
            optionD: "Platypus",
            correctOption: "optionD"
        },
    // 10
        {
            question: "Which country has the most time zones",
            optionA: "China",
            optionB: "United States",
            optionC: "Russia",
            optionD: "France",
            correctOption: "optionD"
        },
    // 11
        {
            question: "Which of the following deserts is located in the southern hemisphere??",
            optionA: "Sahara",
            optionB: "Atacama",
            optionC: "Thar",
            optionD: "Antarctica",
            correctOption: "optionD"
        },
    // 12
        {
            question: "The longest river in the United Kingdom is ?",
            optionA: "Severn",
            optionB: "Tweed",
            optionC: "Thames",
            optionD: "Dee",
            correctOption: "optionA"
        },
    // 13
        {
            question: "In which US region is New York City located in ?",
            optionA: "Mid-Atlantic",
            optionB: "Mid-West",
            optionC: "South East",
            optionD: "Kanye West",
            correctOption: "optionA"
        },
    // 14
        {
            question: "Which of the listed countries does not have a monarchy?",
            optionA: "England",
            optionB: "Spain",
            optionC: "Sweden",
            optionD: "Ireland",
            correctOption: "optionD"
        },
    // 15
        {
            question: "In which country has the political system not changed since the end of the Cold War?",
            optionA: "Poland",
            optionB: "Russia",
            optionC: "China",
            optionD: "Taiwan",
            correctOption: "optionC"
        },
    // 16
        {
            question: "What is the name of the world-class high-tech and innovation center in the USA(California) ?",
            optionA: "Creative zone",
            optionB: "Silicon Valley",
            optionC: "Valey of Death",
            optionD: "Schengen zone",
            correctOption: "optionB"
        },
    // 17
        {
            question: "Which criteria is Human Development Index(HDI) is <b>NOT</b> assesed by?",
            optionA: "GDPP",
            optionB: "Average length of life",
            optionC: "Average population denisty",
            optionD: "Level of education",
            correctOption: "optionC"
        },
    // 18
        {
            question: "Los Angeles is also known as ?",
            optionA: "Angels City",
            optionB: "City of Angels",
            optionC: "Shining city",
            optionD: "Lost Angels",
            correctOption: "optionB"
        },
    // 19
        {
            question: "What is the capital of New York state ?",
            optionA: "NYC",
            optionB: "Albany",
            optionC: "Buffalo",
            optionD: "Yonkers",
            correctOption: "optionB"
        },
    // 20
        {
            question: "Which of the following deserts is located in the Northern Hemisphere?",
            optionA: "Sahara",
            optionB: "Atacama",
            optionC: "Patagonia",
            optionD: "Kalahari",
            correctOption: "optionA"
        },
    // 21
        {
            question: "Which relict plant was massively damaged by an invasive butterfly species in Georgia (spread in 2016)?",
            optionA: "Colchis hazel",
            optionB: "Colchis Boxwood",
            optionC: "Tacud baccata",
            optionD: "Lilac",
            correctOption: "optionB"
        },
    // 21
        {
            question: "Which of the following map scale would show the area in more detail?",
            optionA: "1: 500 000",
            optionB: "1: 100 000",
            optionC: "1: 50 000",
            optionD: "1: 10 000",
            correctOption: "optionD"
        },
    // 22
        {
            question: "Which archipelago is located in the tropical zone??",
            optionA: "Japan",
            optionB: "Lesser Antilles",
            optionC: "North Frisian Islands",
            optionD: "Svalbard",
            correctOption: "optionB"
        },
    // 23
        {
            question: "What term is used to describe the angular measurement in a circular coordinate system, often expressed in degrees, indicating the horizontal direction of a compass bearing or the position of an object in the sky ?",
            optionA: "Longitude",
            optionB: "Latitude",
            optionC: "Azimuth",
            optionD: "Equator",
            correctOption: "optionC"
        },
    // 23
        {
            question: "Which of the listed US state is abundant with oil and gas?",
            optionA: "Alaska",
            optionB: "Georgia",
            optionC: "New Jersey",
            optionD: "Montana",
            correctOption: "optionA"
        },
    // 23
    {
        question: "Which island is located in the equatorial climate zone?",
        optionA: "Madagascar",
        optionB: "Cuba",
        optionC: "Kalimantan",
        optionD: "Tasmania",
        correctOption: "optionC"
    },
    //24
    {
        question: "In what range is the azimuth calculated?",
        optionA: "from 0° to 90°",
        optionB: "from 0° to 180",
        optionC: "from 0° to 270",
        optionD: "from 0° to 360",
        correctOption: "optionD"
    },
    
    //25
    {
        question: "Which is NOT classified as a wind",
        optionA: "Trade winds",
        optionB: "Meander",
        optionC: "Sea breeze",
        optionD: "Tornado",
        correctOption: "optionB"
    },
    
    //26
    {
        question: "Which country is located on the continent of Africa?",
        optionA: "Algeria",
        optionB: "Nepal",
        optionC: "North Macedonia",
        optionD: "Paraguay",
        correctOption: "optionA"
    },
    
    //27
    {
        question: "What significance Fernando Magellan's expedition had?",
        optionA: "determine the location of the international date shift line",
        optionB: "proved the unity of the world ocean",
        optionC: "measured the total length of the southern tropic",
        optionD: "studied the water properties of the Pacific Ocean",
        correctOption: "optionA"
    },
      
    //28
    {
        question: "Which country has the most natural lakes?",
        optionA: "USA",
        optionB: "Canada",
        optionC: "Australia",
        optionD: "Brazil",
        correctOption: "optionB"
    },
      
    //29
    {
        question: "What is the coldest sea on Earth?",
        optionA: "Caspian",
        optionB: "Norwegian",
        optionC: "White",
        optionD: "Aegean",
        correctOption: "optionC"
    },
      
    //30
    {
        question: "What is the oldest active volcano on Earth?",
        optionA: "Mount Fuji",
        optionB: "Mount Etna",
        optionC: "Mount Erapi",
        optionD: "Mount Erebus",
        correctOption: "optionB"
    }, 
      
    //31
    {
        question: "What is the flattest state in the U.S.?",
        optionA: "Kansas",
        optionB: "Oklhoma",
        optionC: "Florida",
        optionD: "Ohio",
        correctOption: "optionB"
    }, 
     
    //32
    {
        question: "What is the only continent with land in all four hemispheres?",
        optionA: "Africa",
        optionB: "Asia",
        optionC: "Australia",
        optionD: "North America",
        correctOption: "optionA"
    },   
      
    //33
    {
       question: "What ocean is home to 75% of the Earth's volcanoes?",
       optionA: "Arctic",
       optionB: "Atlantic",
       optionC: "Pacific",
       optionD: "Indian",
       correctOption: "optionC"
    },  
      
    //34
    {
       question: "What Australian city has the world's largest natural harbor?",
       optionA: "Perth",
       optionB: "Melbourne",
       optionC: "Brisbane",
       optionD: "Sydney",
       correctOption: "optionD"
    },  
      
    //35
    {
       question: "And how many countries are there in Africa?",
       optionA: "60",
       optionB: "35",
       optionC: "54",
       optionD: "52",
       correctOption: "optionC"
    }, 
      
    //36
    {
       question: "Which Chinese city is situated at the mouth of the Chang Jiang (Yangtze) River?",
       optionA: "Shanghai",
       optionB: "Hangzhou",
       optionC: "Chongqing",
       optionD: "Beijing",
       correctOption: "optionA"
    },  
      
    //37
    {
       question: "Which country is Casablanca in?",
       optionA: "Egypt",
       optionB: "Algeria",
       optionC: "Tunisia",
       optionD: "Morocco",
       correctOption: "optionD"
    },    
    
    //38
    {
       question: "Which African country has the lowest population?",
       optionA: "Gambia",
       optionB: "Guinea-Bissau",
       optionC: "Mauritius",
       optionD: "Seychelles",
       correctOption: "optionD"
    }, 
    
    //39
    {
       question: " Brazil shares a border with every South American country, EXCEPT two. Can you name those two?",
       optionA: "Bolivia and Colombia",
       optionB: "Chile and Ecuador",
       optionC: "Argentina and Uruguay",
       optionD: "Peru and Venezuela",
       correctOption: "optionB"
    }, 
      
    //40
    {
       question: " In which US state is Harvard University?",
       optionA: "Massachusetts",
       optionB: "Maine",
       optionC: "New York",
       optionD: "Michigan",
       correctOption: "optionB"
    }, 
      
    //41
    {
       question: "Which African country is covered almost entirely by the Kalahari Desert?",
       optionA: "Somalia",
       optionB: "Zambia",
       optionC: "Tanzania",
       optionD: "Botswana",
       correctOption: "optionD"
    }, 
      
    //42
    {
       question: "On which Italian island would you find the volcano Mount Etna?",
       optionA: "Sardinia",
       optionB: "Caprera",
       optionC: "Elba",
       optionD: "Sicily",
       correctOption: "optionD"
    }, 
      
    //43
    {
       question: "Which river flows through the Grand Canyon?",
       optionA: "Mississippi River",
       optionB: "Colorado River",
       optionC: "Missouri River",
       optionD: "Rio Grande",
       correctOption: "optionB"
    },
     
    //44
    {
       question: "In which ocean is the Bermuda Triangle located?",
       optionA: "Indian",
       optionB: "Pacific",
       optionC: "Arctic",
       optionD: "Atlantic",
       correctOption: "optionD"
    },
      
    //45
    {
       question: "Ljubljana is the largest city and capital of which country?",
       optionA: "Latvia",
       optionB: "Slovakia",
       optionC: "Lithuania",
       optionD: "Slovenia",
       correctOption: "optionD"
    },
      
    //46
    {
       question: "Which European country has Mount Olympus at 2,917 meters as its highest elevation point?",
       optionA: "North Macedonia",
       optionB: "Greece",
       optionC: "Cyprus",
       optionD: "Turkey",
       correctOption: "optionB"
    },
    
    //47
    {
       question: "What mountain range runs along the northern border of India?",
       optionA: "Karakoram",
       optionB: "Alay Mountains",
       optionC: "Tian Shan",
       optionD: "Himalayas",
       correctOption: "optionD"
    },
    
    //48  
    {
       question: " In which country is the world's highest waterfall?",
       optionA: "Venezuela",
       optionB: "Argentina",
       optionC: "Iceland",
       optionD: "Namibia",
       correctOption: "optionA"
    },
      
    //49
    {
       question: "Which river flows through the center of Dublin?",
       optionA: "Slaney",
       optionB: "Shannon",
       optionC: "Barrow",
       optionD: "Liffey",
       correctOption: "optionD"
    },
      
    //50 
    {
       question: "Which country has won the most Olympic medals?",
       optionA: "Russia",
       optionB: "China",
       optionC: "USA",
       optionD: "Germany",
       correctOption: "optionC"
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