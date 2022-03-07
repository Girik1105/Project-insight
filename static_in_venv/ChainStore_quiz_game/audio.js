const player = document.querySelector("#btn-play");


player.addEventListener("click" , () => {
    let audio = new Audio('lofi.mp3');
    audio.play();
});