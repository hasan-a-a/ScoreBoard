let buttonScore1 = document.getElementById ('button_score')
let buttonScore2 = document.getElementById ('button_score')
let buttonScore3 = document.getElementById ('button_score')
let buttonScore4 = document.getElementById ('button_score')
let buttonScore5 = document.getElementById ('button_score')
let buttonScore6 = document.getElementById ('button_score')
let resetbtn = document.getElementById ('newGame')
let homeScore = document.getElementById ('home-score')
let guestScore = document.getElementById ('guest-score')
let statsScore = document.getElementById ('stats-score')
let countHome = 0
let countGuest = 0


function increment_1(){
    countHome += 1
    homeScore.textContent = countHome

}
function increment_2(){
    countHome += 2
    homeScore.textContent = countHome

}
function increment_3(){
    countHome += 3
    homeScore.textContent = countHome

}
function increment_4(){
    countGuest += 1
    guestScore.textContent = countGuest

}
function increment_5(){
    countGuest += 2
    guestScore.textContent = countGuest

}
function increment_6(){
    countGuest += 3
    guestScore.textContent = countGuest

}
function reset() {
    countHome = 0
    countGuest = 0
    homeScore.textContent = countHome
    guestScore.textContent = countGuest
}

