const question = document.querySelector('#question');
const choices = document.querySelectorAll('.choice-text');
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');
const correctAnswerDisplay = document.querySelector('.correct-answer-display');

const correctAnswerDisplayVideo1 = document.querySelector('#video-item-1');
const correctAnswerDisplayVideo2 = document.querySelector('#video-item-2');
const correctAnswerDisplayVideo3 = document.querySelector('#video-item-3');
const correctAnswerDisplayVideo4 = document.querySelector('#video-item-4');

let correct_audio = new Audio('correct.mp3');
let wrong_audio = new Audio('wrong.mp3');
let currentQuestion = {};
let acceptAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];
let currentVideo = 0;

// video1 = chain store 
// video2 = departmental
// video3 = retail
// video4 = wholesale


let questions = [
    {
        question: "How is centralized procurement of goods beneficial for chain store?",
        choice1: "Offer economies of scale",
        choice2: "Hiring good managers. ",
        choice3: "Flexibility",
        choice4: "Diffusuion of Risk",
        answer: function () {
            return this.choice1
        },
        video: 1
    },
    {
        question: "Identify the limitation of Chain store which explains that managing the multiple shops have to obey the instructions received from the head office.",
        choice1: "Lack of Personal touch",
        choice2: "Difficult to change demand",
        choice3: "Limited Selection of goods",
        choice4: "Lack of Initiative",
        answer: function () {
            return this.choice4
        },
        video: 1
    }, 
    {
        question: "Identify the WRONG advantage of chain store.",
        choice1: "Transfer of Goods",
        choice2: "Elimination of middlemen",
        choice3: "Limited Variety of goods",
        choice4: "Flexibilty",
        answer: function () {
            return this.choice3
        },
        video: 1
    },   
    {
        question: "Identify the advantage of Chain store which explains that the losses incurred by one shop may be covered by profits in other shops.",
        choice1: "Low Cost",
        choice2: "Diffusion of Risk",
        choice3: "Flexibility",
        choice4: "No bad debts",
        answer: function () {
            return this.choice2
        },
        video: 1
    }, 
    {
        question: "Which of these is not a feature of Chain store?",
        choice1: "Located in populous localities",
        choice2: "Sale on credit basis",
        choice3: "Savings in cost of operation",
        choice4: "Centrally Controlled by Head Office",
        answer: function () {
            return this.choice2
        },
        video: 1
    }, 
    {
        question: "Why are multiple locations advantageous to a chain store?",
        choice1: "They're not.",
        choice2: "They permit bulk buying of products.",
        choice3: "They make management easier.",
        choice4: "They help capture more market share.",
        answer: function () {
            return this.choice4
        },
        video: 1
    }, 
    ];

// console.log(questions.length);

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

    currentVideo = currentQuestion.video;

    // let i = 1;

    choices.forEach(choice => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
        // i++;
    });

    availableQuestions.splice(questionsIndex, 1);

    acceptAnswers = true;
}


function videoSelector(videoNumber) {
    switch (videoNumber) {
        case 1:
            return correctAnswerDisplayVideo1.classList.toggle('d-none');
            break;
        case 2:
            return correctAnswerDisplayVideo2.classList.toggle('d-none');
            break;
        case 3:
            return correctAnswerDisplayVideo3.classList.toggle('d-none');
            break;
        case 4:
            return correctAnswerDisplayVideo4.classList.toggle('d-none');
            break;
    }
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

            correct_audio.play()

            setTimeout(() => {
                selectedChoice.parentElement.classList.remove(classToApply);
                getNewQuestion();
            }, 1000);
        }

        if (classToApply === 'incorrect') {
            selectedChoice.parentElement.classList.add(classToApply)

            correctAnswerDisplay.innerText = `CORRECT ANSWER: ${currentQuestion.answer()}`;

            // correctAnswerDisplayVideo.classList.toggle('d-none');
            videoSelector(currentVideo);
            console.log(currentVideo);

            wrong_audio.play()
            
            setTimeout(() => {
                correctAnswerDisplay.innerText = "";
                videoSelector(currentVideo);
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