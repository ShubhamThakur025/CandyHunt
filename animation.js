let btnSound  = new Audio('assets/btn-pressed.mp3')
let play = document.getElementById('playBtn')

//Animation effect on home page
document.addEventListener('DOMContentLoaded', function () {
    const image = document.querySelector('.welcome-img img');
    image.classList.add('loaded');
    image.addEventListener('click', function () {
        btnSound.play()
        let welcomeText = document.querySelector('#instructions-screen');
        let firstOut = document.querySelector('.first-out')
        image.classList.toggle('animate');
        firstOut.classList.toggle('animate');
        welcomeText.classList.toggle('animate')
    });
})

