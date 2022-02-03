const question = document.querySelector('#question');
const choices = document.querySelectorAll('.choice-text');
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');
const correctAnswerDisplay = document.querySelector('.correct-answer-display');
const correctAnswerDisplayVideo = document.querySelector('#video-item');


console.log(choices);

let currentQuestion = {};
let acceptAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
    {
        question: "How does centralized procurement of goods beneficial for chain store?",
        choice1: "Offer economies of scale",
        choice2: "Hiring good managers. ",
        choice3: "Flexibility",
        choice4: "Diffusuion of Risk",
        answer: function () {
            return this.choice1
        }
    },
    {
        question: "Identify the limitation of Chain store which explains that managing the multiple shops have to obey the instructions received from the head office",
        choice1: "Lack of Personal touch",
        choice2: "Difficult to change demand",
        choice3: "Limited Selection of goods",
        choice4: "Lack of Initiative",
        answer: function () {
            return this.choice4
        }
    }, 
    {
        question: "Identify the WRONG advantage of chain store:",
        choice1: "Transfer of Goods",
        choice2: "Elimination of middlemen",
        choice3: "Limited Variety of goods",
        choice4: "Flexibilty",
        answer: function () {
            return this.choice3
        },
    },   
    {
        question: "Identify the advantages of Chain store which explains that the losses incurred by one shop may be covered by profits in other shops",
        choice1: "Low Cost",
        choice2: "Diffusion of Risk",
        choice3: "Flexibility",
        choice4: "No bad debts",
        answer: function () {
            return this.choice2
        }
    }, 
    {
        question: "Which of these is not a feature of Chain store?",
        choice1: "Located in populous localities",
        choice2: "Sale on credit basis",
        choice3: "Savings in cost of operation",
        choice4: "Centrally Controlled by Head Office",
        answer: function () {
            return this.choice2
        }
    }, 
    {
        question: "Why are multiple locations advantageous to a chain store?",
        choice1: "They're not.",
        choice2: "They permit bulk buying of products.",
        choice3: "They make management easier.",
        choice4: "They help capture more market share.",
        answer: function () {
            return this.choice4
        }
    }, 
    {
        question: "Identify the service of wholesaler which relieves the retailers of the work of collecting goods from several producers and keeping big inventory of the same?",
        choice1: "Available of goods",
        choice2: "Market support",
        choice3: "Grant of credit",
        choice4: "Risk Sharing",
        answer: function () {
            return this.choice1
        }
    },
    {
        question: "'Wholesaler takes care of stock from fall in prices, theft, pilferage, spoilage, fire, etc.' Identify the service he is providing to manufacturer?",
        choice1: "Facilitating large scale production",
        choice2: "Bearing of risk",
        choice3: "provide financial assistance",
        choice4: "Expert Advise",
        answer: function () {
            return this.choice2
        }
    }, 
    {
        question: "Wholesalers enables retailers to manage their business with relatively small amount of working capital. How they do so?",
        choice1: "Marketing support",
        choice2: "specialised knowledge",
        choice3: "Grant of credit",
        choice4: "risk sharing",
        answer: function () {
            return this.choice3
        },
    },   
    {
        question: "Wholesaler purchases goods as and when these are produced and store them till the time these are demanded by retailers or consumers in the market. Choose the service mentioned here?",
        choice1: "Facilitating production continuity",
        choice2: "Bearing risk",
        choice3: "Financial Assistance",
        choice4: "Expert Advise",
        answer: function () {
            return this.choice1
        }
    }, 
    {
        question: "Wholesalers inform the retailers about the new products, their uses, quality, prices, etc. Identify the service provided by them?",
        choice1: "Marketing support",
        choice2: "grant of credit",
        choice3: "Specialised knowledge",
        choice4: "Risk Sharing",
        answer: function () {
            return this.choice3
        }
    },
    {
        question: "Identify the service offered by retailer to the wholesaler:",
        choice1: "Specialised knowledge",
        choice2: "Personal selling",
        choice3: "Credit facility",
        choice4: "Economies of scale",
        answer: function () {
            return this.choice2
        }
    },
    {
        question: "Which type of service is not offered by retailers to manufacturers and wholesalers?",
        choice1: "New product information",
        choice2: "Personal selling",
        choice3: "Helps in promotion",
        choice4: "Helps in distribution of goods",
        answer: function () {
            return this.choice1
        }
    },
    {
        question: "Identify the services of the retailer to wholesaler which states that he makes all types of commodities available to consumers in one place.",
        choice1: "Convenience in buying",
        choice2: "Home delivery",
        choice3: "New product information",
        choice4: "Regular availability of products",
        answer: function () {
            return this.choice4
        }
    },
    {
        question: "Which of these is not a service of retailer towards manufacturer, wholesaler or consumer?",
        choice1: "Convenience in buying",
        choice2: "Risk sharing",
        choice3: "New product information",
        choice4: "Regular availability of products",
        answer: function () {
            return this.choice2
        }
    },
    {
        question: " Arrangement for the supply of goods at the customer’s doorstep is done without any extra charges. Identify the above-mentioned service of the retailer.",
        choice1: "Personal Selling",
        choice2: "Economies of scale",
        choice3: "Home delivery",
        choice4: "Wide selection",
        answer: function () {
            return this.choice3
        }
    },
    {
        question: "They satisfy diverse market segments with a wide variety of goods and services under one roof.” The quoted sentence is in reference to:",
        choice1: "Chain Store",
        choice2: "Departmental Store",
        choice3: "Itinerant retailer",
        choice4: "Speciality shops",
        answer: function () {
            return this.choice2
        }
    },
  
    {
        question: "Identify the limitation of Departmental Store which is a result of high operating costs and large-scale operations.",
        choice1: "Lack of personal attention",
        choice2: "High operating cost",
        choice3: "High possibility of loss",
        choice4: "Lack of initiative",
        answer: function () {
            return this.choice3
        }
    },
    {
        question: " Which statement about department stores is not correct? ",
        choice1: "Department stores offer the greatest selection of any general merchandise retailer. ",
        choice2: "Department stores provides different services to customers.",
        choice3: "Department stores are usually part of a chain. ",
        choice4: "Department stores use centralized buying for all departments.",
        answer: function () {
            return this.choice3
        }
    },
    {
        question: " Which of the following is not the feature of Departmental Store? ",
        choice1: "All items under one roof. ",
        choice2: "Centrally located.",
        choice3: "Located in populous localities.",
        choice4: "Combines both the functions of Retailing as well as Warehousing.",
        answer: function () {
            return this.choice3
        }
    },
];

const scorePoints = 100;
const maxQuestions = questions.length;

const endBtn = document.querySelector('#end-btn');
const endBtnItem = document.querySelector('#endBtnItem');

function endDisplay() {
    if (endBtn.classList.contains('d-none')) {
        endBtn.classList.toggle('d-none');
    }
    if (endBtnItem.classList.contains('d-none')) {
        endBtnItem.classList.toggle('d-none');
    }
}

getNewQuestion = () => {
    if (availableQuestions.length === 0 || questionCounter > maxQuestions) {
        localStorage.setItem('mostRecentScore', score)
        return endDisplay();
    }

    questionCounter++;
    progressText.innerText = `Question ${questionCounter} of ${maxQuestions}`;
    progressBarFull.style.width = `${(questionCounter/maxQuestions) * 100}%`;

    const questionsIndex = Math.floor(Math.random() *  availableQuestions.length);
    currentQuestion = availableQuestions[questionsIndex];
    question.innerText = currentQuestion.question;

    // let i = 1;

    choices.forEach(choice => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
        // i++;
    });

    availableQuestions.splice(questionsIndex, 1);

    acceptAnswers = true;
}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if (!acceptAnswers) return 

        acceptAnswers = false;
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.innerText

        let classToApply = selectedAnswer == currentQuestion.answer() ? 'correct' : 'incorrect';
        
        if (classToApply === 'correct') {
            incrementScore(scorePoints);

            selectedChoice.parentElement.classList.add(classToApply)

            setTimeout(() => {
                selectedChoice.parentElement.classList.remove(classToApply);
                getNewQuestion();
            }, 1000);
        }

        if (classToApply === 'incorrect') {
            selectedChoice.parentElement.classList.add(classToApply)

            correctAnswerDisplay.innerText = `CORRECT ANSWER: ${currentQuestion.answer()}`;
            correctAnswerDisplayVideo.classList.toggle('d-none');
            
            setTimeout(() => {
                correctAnswerDisplay.innerText = "";
                correctAnswerDisplayVideo.classList.toggle('d-none');
            }, 5000);

            setTimeout(() => {
                selectedChoice.parentElement.classList.remove(classToApply);
                getNewQuestion();
            }, 5000);
        }
    })
});

incrementScore = num => {
    score += num;
    scoreText.innerText = `${score}/${100*maxQuestions}`;
}

function startGame () {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions]; // Spreading array with ...
    scoreText.innerText = `${score}/${100*maxQuestions}`;
    getNewQuestion();
}

startGame();