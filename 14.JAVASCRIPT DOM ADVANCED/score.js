var p1 = document.getElementById("p1");
var p2 = document.getElementById("p2");
var rbtn = document.getElementById("reset");
var numInp = document.getElementById("no");

var playingTo = document.querySelector("p span");
var p1Disp = document.getElementById("p1Disp");
var p2Disp = document.getElementById("p2Disp");

var p1Score = 0;
var p2Score = 0;
var defaultScore = 5;
var gameOver = false;

var temp = document.querySelectorAll("h1")[1];

p1.addEventListener("click", function () {

    if (!gameOver) {
        p1Score++;
    }
    if (p1Score === defaultScore) {
        gameOver = true;
        p1Disp.classList.add("winner")
    }
    p1Disp.textContent = p1Score;
})

p2.addEventListener("click", function () {
    if (!gameOver) {
        p2Score++;
    }
    if (p2Score === defaultScore) {
        gameOver = true;
        p2Disp.classList.add("winner");
    }
    p2Disp.textContent = p2Score;
})

numInp.addEventListener("change", function () {
    playingTo.textContent = numInp.value;
    defaultScore = Number(numInp.value);
    reset();
})

rbtn.addEventListener("click", reset);

function reset() {
    p1Score = 0;
    p2Score = 0;
    p1Disp.textContent = p1Score;
    p2Disp.textContent = p2Score;
    gameOver = false;
    p2Disp.classList.remove("winner");
    p1Disp.classList.remove("winner");
}