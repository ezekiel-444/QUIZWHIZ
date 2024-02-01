const questions = [
    // 1 
        {
            question: "Who wrote The Iliad?",
            optionA: "Euripides",
            optionB: "Beowulf",
            optionC: "Homer",
            optionD: "Virgil",
            correctOption: "optionC"
        },
    // 2
    {
        question: "Put the three cantos of The Divine Comedy in the correct order.",
        optionA: "Paradiso, Purgatorio, Inferno",
        optionB: "Inferno, Limbo, Paradiso",
        optionC: "Purgatorio, Inferno, Limbo",
        optionD: "Inferno, Purgatorio, Paradiso",
        correctOption: "optionD"
    }, 
    // 3
    {
        question: "Don Quixote was written in which language?",
        optionA: "Old English",
        optionB: "Italian",
        optionC: "Spanish",
        optionD: "Greek",
        correctOption: "optionC"
    },
    // 4
    {
        question: "The hero Beowulf faces a monster known by this name.",
        optionA: "Hrothgar",
        optionB: "Grendel",
        optionC: "Heorot",
        optionD: "Minotaur",
        correctOption: "optionB"
    },
    // 5
    {
        question: "John Donne is known as a member of which school of poetry?",
        optionA: "Romanticism",
        optionB: "Jacobean",
        optionC: "Georgian",
        optionD: "Metaphysical",
        correctOption: "optionD"
    }, 
    // 6
    {
        question: "John Milton’s Paradise Lost was written during which century?",
        optionA: "1400’s",
        optionB: "1500’s",
        optionC: "1600’s",
        optionD: "1700’s",
        correctOption: "optionC"
    }, 
    // 7
    {
        question: "Mark Twain’s beloved characters Tom Sawyer and Huckleberry Finn reside in which state?",
        optionA: "Alabama",
        optionB: "Missouri",
        optionC: "Mississippi",
        optionD: "Tennessee",
        correctOption: "optionB"
    }, 
    // 8
    {
        question: "This genre of fiction, in which novels like Dracula are told in letters, diary entries, newspaper clippings, and more mixed formats, came to prominence in the late 18th century.",
        optionA: "Belles-lettres",
        optionB: "Pastoral",
        optionC: "Bildungsroman",
        optionD: "Epistolary",
        correctOption: "optionD"
    },
    // 9
    {
        question: "Sir Walter Scott is known for his historical novels about which country?",
        optionA: "Ireland",
        optionB: "Scotland",
        optionC: "Wales",
        optionD: "England",
        correctOption: "optionB"
    },
    // 10
    {
        question: "In Charles Dickens’s Oliver Twist, what food does Oliver famously ask for more of when he says: 'Please, Sir, I want some more'?",
        optionA: "Bread",
        optionB: "Soup",
        optionC: "Cheese",
        optionD: "Gruel",
        correctOption: "optionD"
    },
    // 11
    {
        question: "Emily Brontë’s Wuthering Heights recounts the tragic romance between which two lovers?",
        optionA: "Catherine and Heathcliff",
        optionB: "Eleanor and Christian",
        optionC: "Isabella and Hindley",
        optionD: "Anne and Gordon",
        correctOption: "optionA"
    }, 
    // 12
    {
        question: "Who is the heroine of Nathaniel Hawthorne’s The Scarlet Letter?",
        optionA: "Anne Hutchinson",
        optionB: "Emily Shelby",
        optionC: "Agnes Grey",
        optionD: "Hester Prynne",
        correctOption: "optionD"
    }, 
    // 13
    {
        question: "Author Zora Neale Hurston was part of which literary movement",
        optionA: "Romanticism",
        optionB: "Harlem Renaissance",
        optionC: "Transcendentalism",
        optionD: "Beat",
        correctOption: "optionB"
    },
    // 14
    {
        question: "Truman Capote’s In Cold Blood takes its name from which Shakespeare play?",
        optionA: "Macbeth",
        optionB: "Timon of Athens",
        optionC: "Othello",
        optionD: "Hamlet",
        correctOption: "optionB"
    },
    // 15
    {
        question: "Who is the protagonist of James Joyce’s Ulysses?",
        optionA: "Leopold Bloom",
        optionB: "Leopold Ulysses",
        optionC: "Ulysses Bloom",
        optionD: "Homer Bloom",
        correctOption: "optionA"
    },
    // 16
    {
        question: "Who wrote The Electric Kool-Aid Acid Test?",
        optionA: "William S. Burroughs",
        optionB: "Hunter S. Thompson",
        optionC: "Ken Kesey",
        optionD: "Tom Wolfe",
        correctOption: "optionD"
    },
    // 17
    {
        question: "In J.D. Salinger’s The Catcher in the Rye, protagonist Holden Caulfield worries about how this animal survives the winter in New York.",
        optionA: "Ducks",
        optionB: "Pigeons",
        optionC: "Cats",
        optionD: "Squirrels",
        correctOption: "optionA"
    },
    // 18
    {
        question: "How many volumes are in Marcel Proust’s novel à La Recherche du Temps Perdu (“In Search of Lost Time”)?",
        optionA: "3",
        optionB: "4",
        optionC: "5",
        optionD: "6",
        correctOption: "optionD"
    },
    // 19
    {
        question: "The Girl with the Dragoon Tattoo was originally published in which language?",
        optionA: "Swedish",
        optionB: "Norweigian",
        optionC: "Danish",
        optionD: "English",
        correctOption: "optionA"
    },      
    // 20
    {
        question: "In what year was Gillian Flynn’s domestic thriller Gone Girl published?",
        optionA: "2012",
        optionB: "2013",
        optionC: "2014",
        optionD: "2016",
        correctOption: "optionA"
    }, 
    // 21
    {
        question: "E.L. James’s Fifty Shades of Grey was originally fan fiction for which book series?",
        optionA: "The Twilight Series",
        optionB: "The Harry Potter Series",
        optionC: "The Outlander Series",
        optionD: "The Left Behind Series",
        correctOption: "optionA"
    },  
    // 22
    {
        question: "Name That Book: What is the seventh and final installment in J. K. Rowling’s Harry Potter series?",
        optionA: "Harry Potter and the Order of the Phoenix",
        optionB: "Harry Potter and the Half-Blood Prince",
        optionC: "Harry Potter and the Cursed Child",
        optionD: "Harry Potter and the Deathly Hallows",
        correctOption: "optionD"
    }, 
    // 23
    {
        question: "In Erin Morgenstern’s The Night Circus, two star-crossed lovers are rivals. What profession do they share?",
        optionA: "Acrobats",
        optionB: "Magicians",
        optionC: "Tightrope Walkers",
        optionD: "Trapeze Artists",
        correctOption: "optionB"
    },                 
    // 24
    {
        question: "In Stephen King’s 11/22/63, a high school English teacher hurtles back in time to 1963 and attempts to stop what monumental event?",
        optionA: "Assassination of JFK",
        optionB: "Moon landing of Apollo 11",
        optionC: "Cuban Missle Crisis",
        optionD: "assassination of MLK",
        correctOption: "optionA"
    },
    // 25
    {
        question: "Name That Author: This writer penned the Pulitzer Prize winning novel The Goldfinch.",
        optionA: "Elizabeth Strout",
        optionB: "Donna Tartt",
        optionC: "Anita Shreve",
        optionD: "Anne Patchett",
        correctOption: "optionB"
    },
    // 26
    {
        question: "Who is the hero of Douglas Adams’s Hitchhiker’s Guide to the Galaxy series?",
        optionA: "Paul Atreides",
        optionB: "Winston Smith",
        optionC: "Arthur Dent",
        optionD: "Rick Deckard",
        correctOption: "optionC"
    }, 
    // 27
    {
        question: "Stanley Kubrick’s 1968 epic sci-fi film 2001: A Space Odyssey was inspired by a short story by this writer, who also co-wrote the screenplay with Kubrick.",
        optionA: "Arthur C. Clarke",
        optionB: "Robert Heinlein",
        optionC: "Philip K. Dick",
        optionD: "William Gibson",
        correctOption: "optionA"
    },
   // 28    
   {
    question: "In H.G. Wells’s The Time Machine, does the character first travel forward or backward in time?",
    optionA: "Forward",
    optionB: "Backward",
    optionC: "Stop the time",
    optionD: "None of above",
    correctOption: "optionA"
    },
   // 29   
   {
    question: "Neil Gaiman’s Neverwhere is set in an underground world of which city?",
    optionA: "Dublin",
    optionB: "Paris",
    optionC: "New York City",
    optionD: "London",
    correctOption: "optionD"
    },  
   // 30   
   {
    question: "Who is the central hero of Patrick Rothfuss’s The Name of the Wind?",
    optionA: "Felurian",
    optionB: "Kvothe",
    optionC: "Denna",
    optionD: "Bast",
    correctOption: "optionB"
    },
   // 31  
   {
    question: "Name That Book: Chronologically, this novel comes first in C. S. Lewis’s Chronicles of Narnia series.",
    optionA: "The Lion, the Witch and the Wardrobe",
    optionB: "The Voyage of the Dawn Treader",
    optionC: "The Magician’s Nephew",
    optionD: "The Silver Chair",
    correctOption: "optionC"
    },
   // 32 
   {
    question: "What’s the name of the college of magic that Quentin Coldwater attends in Lev Grossman’s Magicians trilogy?",
    optionA: "Osthorne",
    optionB: "Brasenose",
    optionC: "Pembroke",
    optionD: "Brakebills",
    correctOption: "optionD"
    },
   // 33
   {
    question: "Sir Arthur Conan Doyle’s Sherlock Holmes made his first appearance in print with which novel?",
    optionA: "he Sign of the Four",
    optionB: "The Valley of Fear",
    optionC: "The Hound of the Baskervilles",
    optionD: "A Study in Scarlet",
    correctOption: "optionD"
    }, 
   // 34
   {
    question: "What is the title of Agatha Christie's 1953 novel featuring the death of Rex Fortescue?",
    optionA: "Four and Twenty Blackbirds",
    optionB: "The Maid Was in the Garden",
    optionC: "A Pocket Full of Rye",
    optionD: "Sing a Song of Sixpence",
    correctOption: "optionC"
    }, 
   // 35
   {
    question: "Name That Author: Who wrote the noir classic The Maltese Falcon?",
    optionA: "James Ellory",
    optionB: "Dashiell Hammett",
    optionC: "James M. Cain",
    optionD: "Raymond Chandler",
    correctOption: "optionB"
    },  
   // 36
   {
    question: "Tana French’s mystery series that starts with In the Woods is based in which city?",
    optionA: "Dublin",
    optionB: "London",
    optionC: "Edinburgh",
    optionD: "Belfast",
    correctOption: "optionA"
    },
   // 37
   {
    question: "Who is the heroine of Janet Evanovich’s One for the Money and its sequels?",
    optionA: "Sadie Pear",
    optionB: "Stacy Partridge",
    optionC: "Sarah Peach",
    optionD: "Stephanie Plum",
    correctOption: "optionD"
    },
   // 38
   {
    question: "Name That Author: Who wrote The Girl on the Train?",
    optionA: "A.J. Finn",
    optionB: "Sophie Hannah",
    optionC: "Paula Hawkins",
    optionD: "Ruth Ware",
    correctOption: "optionC"
    }, 
   // 39
   {
    question: "Which is NOT a poem by Emily Dickinson?",
    optionA: "'Hope’ is the thing with feathers'",
    optionB: "'Because I could not stop for Death'",
    optionC: "'Acquainted with the night'",
    optionD: "'I felt a Funeral, in my Brain'",
    correctOption: "optionC"
    }, 
   // 40
   {
    question: "Name That Poet: Who wrote the Beat classic 'Howl'?",
    optionA: "Jack Kerouac",
    optionB: "Lawrence Ferlinghetti",
    optionC: "Allen Ginsberg",
    optionD: "William Carlos Williams",
    correctOption: "optionC"
    }, 
   // 41
   {
    question: "Which two poets co-wrote the Lyrical Ballads?",
    optionA: "T.S. Eliot and Ezra Pound",
    optionB: "William Wordsworth and Samuel Taylor Coleridge",
    optionC: "Sylvia Plath and Anne Sexton",
    optionD: "Robert Lowell and Elizabeth Bishop",
    correctOption: "optionB"
    },
   // 42
   {
    question: "When was Edgar Allan Poe’s 'The Raven' first published?",
    optionA: "1838",
    optionB: "1840",
    optionC: "1845",
    optionD: "1850",
    correctOption: "optioC"
    },
   // 43
   {
    question: "Name That Poet: Which poet associated with Romanticism wrote Songs of Innocence and Experience?",
    optionA: "William Blake",
    optionB: "John Keats",
    optionC: "William Wordsworth",
    optionD: "Percy Bysshe Shelley",
    correctOption: "optionA"
    }, 
   // 44
   {
    question: "Who wrote I Know Why the Caged Bird Sings?",
    optionA: "Audre Lorde",
    optionB: "Maya Angelou",
    optionC: "Adrienne Rich",
    optionD: "Gwendolyn Brooks",
    correctOption: "optionB"
    },
   // 45
   {
    question: "How many acts are in Romeo and Juliet?",
    optionA: "Two",
    optionB: "Three",
    optionC: "Four",
    optionD: "Five",
    correctOption: "optionD"
    },
   // 46
   {
    question: "The character of Hamlet was the ruler of which country?",
    optionA: "Denmark",
    optionB: "Scotland",
    optionC: "Sweden",
    optionD: "England",
    correctOption: "optionA"
    },
   // 47
   {
    question: "Who is the youngest daughter of King Lear?",
    optionA: "Ophelia",
    optionB: "Cordelia",
    optionC: "Regan",
    optionD: "Goneril",
    correctOption: "optionB"
    },
   // 48
   {
    question: "Which of these ingredients does NOT appear in the Witches’s 'Double, double toil and trouble' speech from Macbeth?",
    optionA: "Ophelia",
    optionB: "Cordelia",
    optionC: "Regan",
    optionD: "Goneril",
    correctOption: "optionC"
    },
   // 49
   {
    question: "William Faulkner’s The Sound and the Fury takes its title from which Shakespeare play?",
    optionA: "Hamlet",
    optionB: "King Lear",
    optionC: "Romeo and Juliet",
    optionD: "Much Ado About Nothing",
    correctOption: "optionA"
    },
   // 50
   {
    question: "Which of these plays is NOT considered to be one of Shakespeare’s comedies?",
    optionA: "Two Gentlemen of Verona",
    optionB: "Merchant of Venice",
    optionC: "Macbeth",
    optionD: "Winter’s Tale",
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