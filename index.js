const btn1 = document.getElementById("btn-1")
const btn2 = document.getElementById("btn-2")
const btn3 = document.getElementById("btn-3")
const btn4 = document.getElementById("btn-4")
const btn5 = document.getElementById("btn-5")
const btn6 = document.getElementById("btn-6")
const homeBoard = document.getElementById("home-board")
const guestBoard = document.getElementById("guest-board")
const newBtn = document.getElementById("new-btn")
const periodBtn = document.getElementById("period-btn")
const periodBoard = document.getElementById("period-board")
const foulBtn = document.getElementById("foul-btn")
const foulBoard = document.getElementById("foul-board")

let count = 0
let count2 = 0
let count3 = 0
let count4 = 0

periodBtn.addEventListener("click",function(){
    count3 += 1
    periodBoard.textContent = count3
    if (count3 > 4){
        periodBoard.textContent=4
    }

})
foulBtn.addEventListener("click",function(){
    count4 += 1
    foulBoard.textContent = count4

})

btn1.addEventListener("click",function(){

    count += 1
    homeBoard.textContent = count

})

btn2.addEventListener("click",function(){

    count += 2
    homeBoard.textContent = count

})
btn3.addEventListener("click",function(){

    count += 3
    homeBoard.textContent = count

})
btn4.addEventListener("click",function(){

    count2 += 1
    guestBoard.textContent = count2

})

btn5.addEventListener("click",function(){

    count2 += 2
    guestBoard.textContent = count2

})
btn6.addEventListener("click",function(){
    
   count2 += 3
   guestBoard.textContent = count2

})
newBtn.addEventListener("click",function(){
    newGame()

})
function newGame(){
    count = 0
    count2 = 0
    count3 = 0
    count4 = 0
    homeBoard.textContent = 0
    guestBoard.textContent = 0
    periodBoard.textContent = 0
    foulBoard.textContent = 0

}


