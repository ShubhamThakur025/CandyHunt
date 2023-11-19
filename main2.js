//JS file for the postGame events

//Accessing elements from the DOM
let music = document.getElementById('music')
let replay_2 = document.getElementById('replay2')
let bubbleGum = document.querySelector('.left-guest')
let rabbit = document.querySelector('.right-guest')
let showScore = document.getElementById('score')
let remarkStatement = document.getElementById('remarks')
var remark = ''

let bubbleGumMusic = new Audio('assets/yummy.mp3')
let rabbitMusic = new Audio('assets/ok.mp3')

//URL parameters to access the score player scored
const urlParams = new URLSearchParams(window.location.search);
const score = urlParams.get('score');

//To issue remark over the player's score
function remarkScore(showScore){
    if(showScore==180){
        remark = "Marvellous! Your dessert is divine!"
    }else if(showScore<180 && showScore>=150){
        remark = "It is really tasty!"
    }else if(showScore<150 && showScore>=120){
        remark = "Good Job!"
    }    else if(showScore<120 && showScore>=80){
        remark = "Not Bad!"
    }else{
        remark = "Try to cook again"
    }
    return remark
}

//To replay the game
replay_2.addEventListener('click', function() {
    window.location.href = "kitchen.html"
});

//To trigger the bg-music and print the score and remark
document.addEventListener('DOMContentLoaded', function(){
    music.play()
    remark = remarkScore(score)
    remarkStatement.innerText = remark
    showScore.innerText = score;
})

//The character's voices
bubbleGum.onclick = () => {
    bubbleGumMusic.play()
}
rabbit.onclick = () => {
    rabbitMusic.play()
}