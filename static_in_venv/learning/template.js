const hamburger = document.querySelector('.hamburger-menu');
const contentArea = document.querySelector('.main-container')


hamburger.addEventListener('click', () => {
    contentArea.classList.toggle('active');
    console.log('Yes');
})

const navbar = document.querySelector('.navbar');

window.onscroll = () => {
    if (window.scrollY > 50) {
        navbar.classList.add('nav-color');
        navbar.classList.remove('nav-title');
    } else {
        navbar.classList.remove('nav-color');
    }
};

const accBtn = document.querySelectorAll('.accBtn');
const items = document.querySelectorAll('.items');

accBtn.forEach(element => {
    element.addEventListener('click', function () {
        let els = [];
        while (true) {
            els.unshift(element);
            element = element.parentNode;

            if (element.classList.contains('items')) {
                break
            }
        }
        element.classList.add('active');
    })
});