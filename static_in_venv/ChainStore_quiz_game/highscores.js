const highScoresList = document.querySelector('#highScoresList');
const highScores = [JSON.parse(localStorage.getItem('highScores'))] || []


console.log(highScores, highScoresList);

highScores.forEach(element => {
    let li = document.createElement('li');
    li.appendChild(document.createTextNode(`${element.name} - ${element.score}`));
    highScoresList.appendChild(li)
});