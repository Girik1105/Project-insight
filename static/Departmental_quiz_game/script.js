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
        question: "They satisfy diverse market segments with a wide variety of goods and services under one roof.” The quoted sentence is in reference to.",
        choice1: "Chain Store",
        choice2: "Departmental Store",
        choice3: "Itinerant retailer",
        choice4: "Speciality shops",
        answer: function () {
            return this.choice2
        },
        video: 2
    },
  
    {
        question: "Identify the limitation of Departmental Store which is a result of high operating costs and large-scale operations.",
        choice1: "Lack of personal attention",
        choice2: "High operating cost",
        choice3: "High possibility of loss",
        choice4: "Lack of initiative",
        answer: function () {
            return this.choice3
        },
        video: 2
    },
    {
        question: "Which statement about department stores is not correct?",
        choice1: "Department stores offer the greatest selection of any general merchandise retailer.",
        choice2: "Department stores provides different services to customers.",
        choice3: "Department stores are usually part of a chain.",
        choice4: "Department stores use centralized buying for all departments.",
        answer: function () {
            return this.choice3
        },
        video: 2
    },
    {
        question: " Which of the following is not the feature of Departmental Store? ",
        choice1: "All items under one roof. ",
        choice2: "Centrally located.",
        choice3: "Located in populous localities.",
        choice4: "Combines both the functions of Retailing as well as Warehousing.",
        answer: function () {
            return this.choice3
        },
        video: 2
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