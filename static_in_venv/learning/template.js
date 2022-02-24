const hamburger = document.querySelector('.hamburger-menu');
const contentArea = document.querySelector('.main-container')

const navBar = document.querySelector('.navbar');

hamburger.addEventListener('click', () => {
    contentArea.classList.toggle('active');
    console.log('Yes');
})

// window.onScroll = () => {
//     if (document.body.scrollTop >= 200 || document.documentElement.scrollTop >= 200 ) {
//         navBar.classList.add('colored-nav');
//     }
// }

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