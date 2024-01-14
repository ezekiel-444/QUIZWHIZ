const questions = [
    // 1 
       {
           question: "Which tribe took and robbed Rome in the 50s of the 5th century?",
           optionA:"Huns",
           optionB: "Gauls",
           optionC: "Vandals",
           optionD: "Ostrogoths",
           correctOption: "optionC"
       },
   // 2
       {
           question: "Which information is true about the VII Ecumenical council?",
           optionA: "Iconoclasm was condemned",
           optionB: "Patriarchate of Antioch was abolished;",
           optionC: "Severance of church ties with the Pope was confirmed",
           optionD: "supremacy of the Patriarch of Jerusalem in the Christian world was confirmed.",
           correctOption: "optionA"
           },
   // 3
       {
           question: "Which event is NOT related to the reign of King Tamar?",
           optionA: "Campaign in North Iran",
           optionB: "Defeat of the Sultan of Rumi",
           optionC: "Creation of the Trebizond Empire",
           optionD: "Battle of Didgori",
           correctOption: "optionD"
           },
   // 4
       {
           question: "Which information is correct about Temur Leng's first expedition to Georgia?",
           optionA: "Raided Western Georgia;",
           optionB: "Victory of Battle of Sokhoista",
           optionC: "Took Tbilisi",
           optionD: "King Giorgi VIII was captured.",
           correctOption: "optionC"
       }, 
   // 5
       {
           question: "Georgia's Obligations under Treaty of Georgievsk ",
           optionA: "the heir had to be brought up at the court of the Russian emperor;",
           optionB: "foreign policy should be conducted in agreement with Russia",
           optionC: "annual monetary tribute was to be paid to Russia",
           optionD: "Yerevan and Ganji khanates should be handed over to Russia",
           correctOption: "optionB"
       },
   // 6
       {
           question: "Which state was opposed by the Russian Empire in the war of 1826-1828?",
           optionA: "Ottoman Empire",
           optionB: "Armenia",
           optionC: "Iran",
           optionD: "Azerbaijan",
           correctOption: "optionC"
       },
   // 7
       {
           question: "What important event happened during the French Second Republic?",
           optionA: "the directory was broken;",
           optionB: "Jacoban convention was restored",
           optionC: "General States were abolished",
           optionD: "Presidential election were held",
           correctOption: "optionD"
       },
   // 8
       {
           question: "In which region did the Russian Empire wage war in 1904-1905?",
           optionA: "Central Asia",
           optionB: "Eastern Asia",
           optionC: "Middle East",
           optionD: "Eastern Europe",
           correctOption: "optionB"
       },
   // 9
       {
           question: "Whose name is related to the reforms in Turkey in the 20s-30s of the 20th century?",
           optionA: "Enver Pasha",
           optionB: "Abdel Nasser",
           optionC: "Mustafa Kemal",
           optionD: "Amanullah Khan",
           correctOption: "optionC"
       },
   // 10
       {
           question: "What was one of the reason, king of Italy in 1922 had to appoin Benito Mussolini as the prime-minister?",
           optionA: "Nazi Germany's ultimatum",
           optionB: "Results of refrendum",
           optionC: "Threat of comminist uprising",
           optionD: "Fear of civil war",
           correctOption: "optionD"
       },
   // 11
       {
           question: "Which was one of the reason, that led to the system of fortification on the borders of the Roman Empire?",
           optionA: "Protection of the Great Silk Road",
           optionB: "Frequent attack of barbarian tribes",
           optionC: "the fight against rebellious slaves",
           optionD: "the new military startegy",
           correctOption: "optionB"
       },
   // 12
       {
           question: "Which Byzantine emperor is associated with the start of iconoclasm?",
           optionA: "Romanoz IV",
           optionB: "Alex I",
           optionC: "Basil I",
           optionD: "Leon III",
           correctOption: "optionD"
       },
   //13
       {
           question: "Which military order was destroyed by King Philip IV?",
           optionA: "Teutonic Order",
           optionB: "Knights Templar",
           optionC: "Knights Hospitaller",
           optionD: "Jesuits",
           correctOption: "optionB"
       },
   //14
       {
           question: "Who won the presidential elections held in France in 1848?",
           optionA: "Louis Napoleon",
           optionB: "Alfred Dreyfus",
           optionC: "George Boulanger",
           optionD: "Adolpe Thierry",
           correctOption: "optionA"
       },
   //15
       { 
           question: "What was the result of Russia's war with Japan in 1905?",
           optionA: "Japan lost",
           optionB: "Pre-war situtation was maintained",
           optionC: "Russia lost",
           optionD: "Korean peninsula was declared as a neutral zone",
           correctOption: "optionC"
       },
   //16
       {    
           question: "Whose name is associated with the creation of the Republic of Turkey?",
           optionA: "alaat Pasha",
           optionB: "Mustafa Kemali",
           optionC: "Reza Fehlevi",
           optionD: "Enver Khoja",
           correctOption: "optionB"
      },
   //17 
      {     
           question: "What excuse did Stalin use in 1934 to kill one of the Soviet leaders, Sergei Kirov?",
           optionA: "start mass repressions",
           optionB: "ban all opposition parties",
           optionC: "declare martial law in the state",
           optionD: "to create the State Security Service",
           correctOption: "optionA"
      },
   //18
   {     
           question: "Whos helped Pharnavaz defeat Azo(Azon)?",
           optionA: "Ashurbanipal",
           optionB: "Argishti II",
           optionC: "Sargon of Akkad",
           optionD: "Hammurabi",
           correctOption: "optionD"
   }, 
   
   //19
   {    
           question: "Where was the Thirty Years War primarily fought?",
           optionA: "Spain",
           optionB: "N.America",
           optionC: "England",
           optionD: "Germany",
           correctOption: "optionD"
   },  
   
   //20
   {    
           question: "Who was the last English Monarch to be killed in Battle?",
           optionA: "Richard III",
           optionB: "Richard the Lionheart",
           optionC: "Henry V",
           optionD: "Harold II",
           correctOption: "optionA"
   }, 
     
   //21
   {    
           question: "What is the significance of the Maersk Alabama?",
           optionA: "It is the only US flagged vessel to be seized by pirates since 1822",
           optionB: "It is ran aground off the coast of Alaska causing the largest oil spill ever recorder",
           optionC: "It extinguished the fire on the Deepwater Horizon oil rig",
           optionD: "Its sinking by a German U-Boat was part of what led US involment in WW1",
           correctOption: "optionA"
   }, 
   
   //22
   {    
           question: "What is the origin of the name Neanderthal?",
           optionA: "Latin 'primative'",
           optionB: "Ancient Greek 'small brain'",
           optionC: "Name of archaeologist who first discovered their fossils",
           optionD: "Name of area where it was first discovered",
           correctOption: "optionD"
   },
     
   //22
   {    
           question: "In a daring raid in 1976 Israeli special forces rescued hostages being held at which airport?",
           optionA: "Enrebbe, Uganda",
           optionB: "Mogadishu, Somalia",
           optionC: "Munich, Zambia",
           optionD: "Cairo, Egypt",
           correctOption: "optionA"
   },
     
   //23
   {    
           question: "What disease is thought to have contributed to the demise of sailors exploring the Arctic on the HMS Erebus and Terror?",
           optionA: "Smallpox",
           optionB: "Bubonic Plague",
           optionC: "Tuberculosis",
           optionD: "Leprosy",
           correctOption: "optionC"
   }, 
   
   //24
   {    
           question: "What weapon damaged the rudder of the Battleship Bismarck, allowing pursuing British forces to sink her??",
           optionA: "A sea minwe",
           optionB: "A torpedo from a Fairey Swordfish aircraft",
           optionC: "A torpedo from the submarine HMS Tharsher",
           optionD: "a 15in from the Battlecruiser HMS Hood",
           correctOption: "optionB"
   },
   
   //25
   {    
           question: "In 1913 Emily Davison died after jumping in front of the King's Horse at the Epsom derby. What cause was she campaigning for?",
           optionA: "Irish Independence",
           optionB: "The Abolition of Slavery",
           optionC: "Woman's Suffarage",
           optionD: "Opposition to Industrialisation",
           correctOption: "optionC"
   },
     
   //26
   {    
           question: "What year was the Berlin Wall built?",
           optionA: "1945",
           optionB: "1961",
           optionC: "1979",
           optionD: "1986",
           correctOption: "optionB"
   },
   
   //27
   {    
           question: "By what name is Leningrad now known?",
           optionA: "Saint Petersburg",
           optionB: "Stalinigrad",
           optionC: "Kalinigrad",
           optionD: "Nizhny Novgorod",
           correctOption: "optionA"
   },
     
   //28
   {    
           question: "Who was the British Prime Minister during the Falklands War?",
           optionA: "Jogn Major",
           optionB: "Margaret Thatcher",
           optionC: "Tony Blair",
           optionD: "Harold Wilson",
           correctOption: "optionB"
   },
     
   //29
   {    
           question: "Where did Captain James Cook die?",
           optionA: "New Zealand",
           optionB: "Australia",
           optionC: "England",
           optionD: "Hawaii",
           correctOption: "optionD"
   },
     
   //30
   {    
           question: "Which British monarch accepted Magna Carta?",
           optionA: "Alfred the Great",
           optionB: "Edward the Confessor",
           optionC: "Wiliam the Conqueror",
           optionD: "John I",
           correctOption: "optionD"
   },
     
   //31
   {    
           question: "Who was the first person in space?",
           optionA: "John Glenn",
           optionB: "Yuri Gagarin",
           optionC: "Vladimir Komarov",
           optionD: "Neil Armstrong",
           correctOption: "optionB"
   },
     
   //32
   {    
           question: "Who was the first person to walk on the moon?",
           optionA: "John Glenn",
           optionB: "Yuri Gagarin",
           optionC: "Vladimir Komarov",
           optionD: "Neil Armstrong",
           correctOption: "optionD"
   },
     
   //33
   {    
           question: "In what year was Napoleon defeated at Waterloo?",
           optionA: "1810",
           optionB: "1815",
           optionC: "1816",
           optionD: "1863",
           correctOption: "optionB"
   },
     
   //34
   {    
           question: "What period of Japanese history was marked by rapid social change and industrialisation?",
           optionA: "The Industrial Revolution",
           optionB: "The Edo Period",
           optionC: "The Meiji Period",
           optionD: "The Shogun Period",
           correctOption: "optionC"
   },
     
   //35
   {    
           question: "Where in Britain did Viking raiders first attack?",
           optionA: "london",
           optionB: "York",
           optionC: "Stamford Bridge",
           optionD: "Lindisfarne",
           correctOption: "optionD"
   },
     
   //36
   {    
           question: "The ancient city of Salzburg was founded on which industry?",
           optionA: "Slave trading",
           optionB: "Salt mining",
           optionC: "Wheat cropping",
           optionD: "Ceramic production",
           correctOption: "optionB"
   },
     
   //37
   {    
           question: "Which of these conflicts involved two US allies fighting against each other?",
           optionA: "The Korean War",
           optionB: "The Boer War",
           optionC: "The invasion of the Falklands",
           optionD: "The Crimean War",
           correctOption: "optionC"
   },
   
   //38
   {    
           question: "Which Roman Emperor legalised Christianity in the Roman Empire?",
           optionA: "Claudius",
           optionB: "Constantine I",
           optionC: "Vespain",
           optionD: "Hadria",
           correctOption: "optionB"
   },
     
   //39
   {    
           question: "In what year did the highland clearances begin?",
           optionA: "1565",
           optionB: "1688",
           optionC: "1745",
           optionD: "1871",
           correctOption: "optionC"
   },
     
   //40
   {    
           question: "Who was the first Chancellor of Germany?",
           optionA: "Otto von Bismarck",
           optionB: "Bernhard von Bulow",
           optionC: "Erich von Falkenhayn",
           optionD: "Alfren von Schlieffen",
           correctOption: "optionA"
   },
     
   //41
   {    
           question: "The siege of Kohima was part of which conflict?",
           optionA: "WW1",
           optionB: "WW2",
           optionC: "Korean War",
           optionD: "Vietnam War",
           correctOption: "optionB"
   },

//41
    {    
        question: "What woman discovered radium and polonium?",
        optionA: "Ada Lovelace",
        optionB: "Barbara McClintock",
        optionC: "Rosalind Franklin",
        optionD: "Maria Skłodowska-Curie",
        correctOption: "optionD"
    },

//42
    {    
        question: "In front of what memorial did Martin Luther King Jr. give his famous ', I have a Dream' speech?",
        optionA: "Statue of Liberty",
        optionB: "USS Indianapolis Memorial",
        optionC: "Oklahoma City National Memorial",
        optionD: " The Lincoln Memorial",
        correctOption: "optionD"
    },   
 
//43
    {    
        question: "On what island would you find the Minoans?",
        optionA: "Crete",
        optionB: "Delos",
        optionC: "Mykonos",
        optionD: "Samos",
        correctOption: "optionA"
    },

//44
    {    
        question: "Whose statue stand in Trafallgar square?",
        optionA: "King George",
        optionB: "Admiral Horatio Nelson",
        optionC: "St George",
        optionD: "Queen Elisabeth I",
        correctOption: "optionB"
    },

//45
    {    
        question: "Who did NOT attended the Yalta Conference",
        optionA: "Josph Stalin",
        optionB: "Winston Churchill",
        optionC: "Mustafa Kemal Ataturk",
        optionD: "Franklin D. Roosevelt",
        correctOption: "optionC"
    },

//46
    {    
        question: "Who did NOT attended the Yalta Conference",
        optionA: "Josph Stalin",
        optionB: "Winston Churchill",
        optionC: "Mustafa Kemal Ataturk",
        optionD: "Franklin D. Roosevelt",
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