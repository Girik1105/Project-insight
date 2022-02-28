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
        question: "Identify the service of wholesaler which relieves the retailers of the work of collecting goods from several producers and keeping big inventory of the same.",
        choice1: "Available of goods",
        choice2: "Market support",
        choice3: "Grant of credit",
        choice4: "Risk Sharing",
        answer: function () {
            return this.choice1
        },
        video: 4
    },
    {
        question: "'Wholesaler takes care of stock from fall in prices, theft, pilferage, spoilage, fire, etc.' Identify the service he is providing to manufacturer.",
        choice1: "Facilitating large scale production",
        choice2: "Bearing of risk",
        choice3: "provide financial assistance",
        choice4: "Expert Advise",
        answer: function () {
            return this.choice2
        },
        video: 4
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
        video: 4
    },   
    {
        question: "Wholesaler purchases goods as and when these are produced and store them till the time these are demanded by retailers or consumers in the market. Choose the service mentioned here?",
        choice1: "Facilitating production continuity",
        choice2: "Bearing risk",
        choice3: "Financial Assistance",
        choice4: "Expert Advise",
        answer: function () {
            return this.choice1
        },
        video: 4
    }, 
    {
        question: "Wholesalers inform the retailers about the new products, their uses, quality, prices, etc. Identify the service provided by them?",
        choice1: "Marketing support",
        choice2: "grant of credit",
        choice3: "Specialised knowledge",
        choice4: "Risk Sharing",
        answer: function () {
            return this.choice3
        },
        video: 4
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