const question = document.querySelector('#question');
const choices = document.querySelectorAll('.choice-text');
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');
const correctAnswerDisplay = document.querySelector('.correct-answer-display');

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
            
            setTimeout(() => {
                correctAnswerDisplay.innerText = "";
            }, 2000);

            setTimeout(() => {
                selectedChoice.parentElement.classList.remove(classToApply);
                getNewQuestion();
            }, 2000);
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