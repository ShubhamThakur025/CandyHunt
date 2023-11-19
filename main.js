//Accessing the DOM elements needed
let playground = document.querySelector('.playground')
let movesRecord = document.querySelector('#moves')
let bgMusic = document.querySelector('#Background-Sound')
let replay = document.getElementById('replay')
let replay_2 = document.getElementById('replay2')

//Defining Variables to keep check on scores, candies and moves
let count = 0
let score = 0
let TotalScore = 0
let moves = 20
let swappedCandies = []
let foundCandies = []

//Audio for pressed buttons and matched pair
let btnPressed = new Audio('assets/btn-Pressed.mp3')
let yesAudio = new Audio('assets/yes.mp3')

//To reset the candies if they didn't matched
function resetCandies() {
    if (swappedCandies.length == 2) {
        moves--
        movesRecord.innerText = moves
        setTimeout(result,500)
        checkScore(swappedCandies[0], swappedCandies[1])
        for (let i = 0; i < swappedCandies.length; i++) {
            if(search(swappedCandies[i])){
            swappedCandies[i].src = `assets/questionMark.png`}
        }
        swappedCandies = []
    }
}

//To increment the score if candies matched
function checkScore(a, b) {
    if (a.src === b.src) { 
        yesAudio.play()       
        foundCandies.push(a)
        foundCandies.push(b)
        if (score === 0) { score += 10 }
        TotalScore += score
        let scoreBoard = document.querySelector('#score')
        scoreBoard.innerHTML = TotalScore
        setTimeout(result(), 500)
    } else {
        score == 0
    }
}

//To check if a candy is already found or not
function search(tile){
    let search = foundCandies.find(function(item){
        return tile == item
    })
    if(search===undefined){return true}
    else{return false}
}

//To end the game
function result(){    
    if(TotalScore===180||moves===0){
        gameEnd()
    }
}

//To jump on the respective winning or lossing page
function gameEnd(){
    if(TotalScore >= 80){
        window.location.href = `winGame.html?score=${TotalScore}`
    }else{
        window.location.href = `lossGame.html?score=${TotalScore}`
    }
}

//To trigger the bg-music
document.addEventListener("DOMContentLoaded", function() {
    bgMusic.volume = 0.5;
    bgMusic.play();
});

//To catch the selected tile
playground.addEventListener('click', function (event) {
    let tile = event.target
    let index = event.target.className    
    if(search(tile)){
    tile.src = `assets/Candy-${index}.png`
    swappedCandies.push(tile)
    setTimeout(resetCandies, 500);
    }
}, true)

//replay Button
replay.addEventListener('click', function() {
    btnPressed.volume = 1
    btnPressed.play();
    setTimeout(function() {
        location.reload();
    }, 500);
});



