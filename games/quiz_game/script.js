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
        question: "Is Tanveer a trash Coder?",
        choice1: "Yes",
        choice2: "No",
        choice3: "He'll feel bad:yes",
        choice4: "Who is Tanveer I dunno I dunno?",
        answer: function () {
            return this.choice4
        }
    },
    {
        question: "Aadit is the real _____",
        choice1: "King",
        choice2: "Punjabi",
        choice3: "Trash (like Tanveer)",
        choice4: "Boss",
        answer: function () {
            return this.choice1
        }
    }, 
    {
        question: "Girik saves your ass",
        choice1: "Eveytime",
        choice2: "I think not",
        choice3: "He is God",
        choice4: "All hail Girik",
        answer: function () {
            return this.choice4
        }
    },   
];

const scorePoints = 100;
const maxQuestions = questions.length;

getNewQuestion = () => {
    if (availableQuestions.length === 0 || questionCounter > maxQuestions) {
        localStorage.setItem('mostRecentScore', score)
        return window.location.assign('end.html');
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

        acceptingAnswers = false;
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
    scoreText.innerText = score;
}

function startGame () {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions]; // Spreading array with ...
    getNewQuestion();
}

startGame();