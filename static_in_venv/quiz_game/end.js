const username = document.querySelector('#username');  
const saveScoreBtn = document.querySelector('#saveScoreBtn');  
const finalScore = document.querySelector('#finalScore');  
const mostRecentScore = localStorage.getItem('mostRecentScore');  

const highScores = JSON.parse(localStorage.getItem('highScores')) || []

const maxHighScores = 7;

finalScore.innerText = `Your Final Score ${mostRecentScore}`;

username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value;
})

saveHighScore = e => {

    const score = {
        score: mostRecentScore,
        name: username.value
    }

    console.log(score);

    localStorage.setItem('highScores', JSON.stringify(score));
    window.location.assign('index.html');

    highScores.push(score);

    highScores.sort((a, b) => {
        return b.score - a.score
    })

    highScores.splice(5);

}

saveScoreBtn.addEventListener('click', e => {
    e.preventDefault();
    console.log(e);
    saveHighScore();
})
