let random_release = Math.floor(Math.random() * 500) + 1 - 20;

const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    question: 'To which type of the goods will the automatic vending machines a useful option for retailing?',
    answers: [
      { text: 'Selling pre-packed brands', correct: true },
      { text: 'High priced products', correct: false },
      { text: 'Low turnover', correct: false },
      { text: 'No uniformity in size and weight', correct: false},
    ]
  },
  {
    question: 'Which of these is the newest revolution in marketing methods?',
    answers: [
      { text: 'Super Markets', correct: false },
      { text: 'General Stores', correct: false },
      { text: 'Vending Machines', correct: true },
      { text: 'Coorporative Store', correct: false }
    ]
  },
  {
    question: 'Pick up all the items which can be sold through vending machines:',
    answers: [
      { text: 'Hot beverages', correct: true },
      { text: 'Television', correct: false },
      { text: 'Jewelry', correct: false },
      { text: 'Garments', correct: false }
    ]
  },
  {
    question: 'Identify all the disadvantages of Vending machines from the following:',
    answers: [
        { text: 'Useful for selling pre-packed brands of low priced products', correct: false },
        {text: 'Promotes sale of goods', correct: false},
      { text: 'Expensive installation', correct: true },
      {text: 'High maintenance and repair cost', correct: true},
    ]
  }
]
