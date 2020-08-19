const cellElements = document.querySelectorAll('[data-cell]')
const board = document.getElementById("board")
const winningMessageTextElement = document.querySelector("[data-winning-message-text]")
const winningMessageElement = document.getElementById("winningMessage")
const restartBtn = document.getElementById("restartBtn")

const X_CLASS = 'x'
const CIRCLE_CLASS = 'circle'
let circleTurn
const winningCombination = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]



startGame()

restartBtn.addEventListener("click", startGame)

function startGame() {
    circleTurn = false
    cellElements.forEach(cell => {
        cell.classList.remove(X_CLASS)
        cell.classList.remove(CIRCLE_CLASS)
        cell.removeEventListener("click", handleClick)
        cell.addEventListener('click', handleClick, {
            once: true
        })
    })
    setHoverClass()
    winningMessageElement.classList.remove("show")
}


function handleClick(e) {
    const cell = e.target
    const currentClass = circleTurn ? CIRCLE_CLASS : X_CLASS
    placeMark(cell, currentClass)
    setHoverClass()
    if (checkWin(currentClass)) {
        endGame(false)
    } else if (isDraw()) {
        endGame(true)
    } else {
        swapTurn()
        setHoverClass()
    }
}

function endGame(draw) {
    if (draw) {
        winningMessageTextElement.innerText = "Draw!"
    } else {
        if (circleTurn) {
            winningMessageTextElement.innerText = "O's Wins!"
        } else {
            winningMessageTextElement.innerText = "X's Wins!"
        }

    }
    winningMessageElement.classList.add("show")
}

function isDraw() {
    return [...cellElements].every(cell => {
        return cell.classList.contains(X_CLASS) ||
            cell.classList.contains(CIRCLE_CLASS)
    })
}

//placeMarker
function placeMark(cell, currentClass) {
    cell.classList.add(currentClass)
}

//switch turns
function swapTurn() {
    circleTurn = !circleTurn
}

function setHoverClass() {
    board.classList.remove(X_CLASS)
    board.classList.remove(CIRCLE_CLASS)
    if (circleTurn) {
        board.classList.add(CIRCLE_CLASS)
    } else {
        board.classList.add(X_CLASS)

    }

}

function checkWin(currentClass) {
    return winningCombination.some(combination => {
        return combination.every(index => {
            return cellElements[index].classList.contains(currentClass)
        })
    })
}