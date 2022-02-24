const switcherBtn = document.querySelector('#light-dark');
const contentArea = document.querySelector('.big-wrapper');
const teamArea = document.querySelector('.team-wrapper');
const featuresArea = document.querySelector('.features-wrapper');
const main = document.querySelector('main');
const hamburger = document.querySelector('.hamburger-menu');

let dark = false;

function Animation() {
    if (!dark) {
        contentArea.classList.add('dark');
        contentArea.classList.remove('light');

        teamArea.classList.add('dark');
        teamArea.classList.remove('light');

        featuresArea.classList.add('dark');
        featuresArea.classList.remove('light');

        dark = true;
    }
    else{
        contentArea.classList.remove('dark');
        contentArea.classList.add('light');  

        teamArea.classList.add('light');
        teamArea.classList.remove('dark');

        featuresArea.classList.add('light');
        featuresArea.classList.remove('dark');
        
        dark = false;
    }
}

switcherBtn.addEventListener('click', Animation)

hamburger.addEventListener('click', () => {
    contentArea.classList.toggle('active');
    console.log('Yes');
})