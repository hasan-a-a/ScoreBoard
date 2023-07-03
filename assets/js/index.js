let buttonScore1 = document.getElementById ('button_score')
// let buttonScore2 = document.getElementById ('button_score')
// let buttonScore3 = document.getElementById ('button_score')
// let buttonScore4 = document.getElementById ('button_score')
// let buttonScore5 = document.getElementById ('button_score')
// let buttonScore6 = document.getElementById ('button_score')
let resetbtn = document.getElementById ('newGame')
let homeScore = document.getElementById ('home-score')
let guestScore = document.getElementById ('guest-score')
let statsScore = document.getElementById ('stats-score')
let countHome = 0
let countGuest = 0
// const isTrue = true
// const isFalse = false
// homeScore = true
// guestScore = false


//the functions increment_1/2/3 are for home-score board

function increment_1(){
    countHome += 1
    homeScore.textContent = countHome
    stats()

}
function increment_2(){
    countHome += 2
    homeScore.textContent = countHome
    stats()

}
function increment_3(){
    countHome += 3
    homeScore.textContent = countHome
    stats()

}
//the functions icrement_4/5/6 are for guest-score boards
function increment_4(){
    countGuest += 1
    guestScore.textContent = countGuest
    stats()

}
function increment_5(){
    countGuest += 2
    guestScore.textContent = countGuest
    stats()

}
function increment_6(){
    countGuest += 3
    guestScore.textContent = countGuest
    stats()

}
function reset() {
    countHome = 0
    countGuest = 0
    homeScore.textContent = countHome
    guestScore.textContent = countGuest
    stats()
}
function stats() {
if ( countHome > countGuest ) {
    statsScore.textContent = 'HOME TEAM GET THE LEAD';
    document.getElementById ("home").style.color = "red"
    document.getElementById ("guest").style.color = "white"
}else if ( countGuest > countHome ){
    statsScore.textContent = 'GUEST TEAM GET THE LEAD';
    document.getElementById ("guest").style.color = "green"
    document.getElementById ("home").style.color = "white"

}else if (countHome == 0 && countHome == 0){
    statsScore.textContent = 'NEW GAME';
}
else {
    statsScore.textContent = 'THE SCORE IS TIE';
}
}


