// let map = [
//     [0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0],
// ]

// let winConditions = [
//     [0, 1, 2, 3], [41, 40, 39, 38], [7, 8, 9, 10],
//     [34, 33, 32, 31], [14, 15, 16, 17], [27, 26, 25, 24],
//     [21, 22, 23, 24], [20, 19, 18, 17], [28, 29, 30, 31],
//     [13, 12, 11, 10], [35, 36, 37, 38], [6, 5, 4, 3],
//     [0, 7, 14, 21], [41, 34, 27, 20], [1, 8, 15, 22],
//     [40, 33, 26, 19], [2, 9, 16, 23], [39, 32, 25, 18],
//     [3, 10, 17, 24], [38, 31, 24, 17], [4, 11, 18, 25],
//     [37, 30, 23, 16], [5, 12, 19, 26], [36, 29, 22, 15],
//     [6, 13, 20, 27], [35, 28, 21, 14], [0, 8, 16, 24],
//     [41, 33, 25, 17], [7, 15, 23, 31], [34, 26, 18, 10],
//     [14, 22, 30, 38], [27, 19, 11, 3], [35, 29, 23, 17],
//     [6, 12, 18, 24], [28, 22, 16, 10], [13, 19, 25, 31],
//     [21, 15, 9, 3], [20, 26, 32, 38], [36, 30, 24, 18],
//     [5, 11, 17, 23], [37, 31, 25, 19], [4, 10, 16, 22],
//     [2, 10, 18, 26], [39, 31, 23, 15], [1, 9, 17, 25],
//     [40, 32, 24, 16], [9, 7, 25, 33], [8, 16, 24, 32],
//     [11, 7, 23, 29], [12, 18, 24, 30], [1, 2, 3, 4],
//     [5, 4, 3, 2], [8, 9, 10, 11], [12, 11, 10, 9],
//     [15, 16, 17, 18], [19, 18, 17, 16], [22, 23, 24, 25],
//     [26, 25, 24, 23], [29, 30, 31, 32], [33, 32, 31, 30],
//     [36, 37, 38, 39], [40, 39, 38, 37], [7, 14, 21, 28],
//     [8, 15, 22, 29], [9, 16, 23, 30], [10, 17, 24, 31],
//     [11, 18, 25, 32], [12, 19, 26, 33], [13, 20, 27, 34]
// ]

// let cpuChoice = randomize(0, map.length - 1)
// let btn = document.querySelector("#replay")
// let playerOneTurn = true
// let tour = 0;
// let mapContainer = document.querySelector("#gameContainer")
// let messageContainer = document.querySelector("#congrat")
// let isPlayable = true
// let cpuMode = false

// function displayMap() {
//     btn.style.display = "none"
//     mapContainer.innerHTML = ""
//     map.forEach((row) => {
//         let rowContainer = document.createElement('div')
//         rowContainer.classList.add('row')
//         mapContainer.appendChild(rowContainer)
//         row.forEach((cell) => {
//             let cellContainer = document.createElement('div')
//             cellContainer.addEventListener("click", () => {
//                 if (isPlayable) {
//                     play(cellContainer)
//                 }
//             }, { once: true })
//             cellContainer.classList.add("cell")
//             rowContainer.appendChild(cellContainer)
//         });
//     })
// }
// displayMap()

// function play(cell) {

//     if (playerOneTurn == true) {
//         cell.style.backgroundColor = "#4154bb"
//         cell.style.color = "#4154bb"
//         cell.innerHTML = "1"
//     } else {
//         cell.style.backgroundColor = "#E91E63";
//         cell.style.color = "#E91E63";
//         cell.innerHTML = "2"
//     }
//     youWin()
//     equalScore()
//     playerOneTurn = !playerOneTurn
//     if (isPlayable && playerOneTurn == false && cpuMode == true) {
//         cpuPlay()
//     }
// }
// function youWin() {
//     let tabGrid = document.querySelectorAll('.cell')
//     for (let i = 0; i < winConditions.length; i++) {

//         if (tabGrid[winConditions[i][0]].innerHTML != "") {
//             if (tabGrid[winConditions[i][0]].innerHTML == tabGrid[winConditions[i][1]].innerHTML && tabGrid[winConditions[i][1]].innerHTML == tabGrid[winConditions[i][2]].innerHTML && tabGrid[winConditions[i][2]].innerHTML == tabGrid[winConditions[i][3]].innerHTML) {
//                 tabGrid[winConditions[i][0]].style.backgroundColor = "yellow"
//                 tabGrid[winConditions[i][1]].style.backgroundColor = "yellow"
//                 tabGrid[winConditions[i][2]].style.backgroundColor = "yellow"
//                 tabGrid[winConditions[i][3]].style.backgroundColor = "yellow"
//                 messageContainer.innerHTML = "Gagné Pour le joueur " + (tabGrid[winConditions[i][0]].innerHTML);
//                 endGame()
//                 return true
//             }
//         }
//     }
//     return false
// }
// function equalScore() {

//     if (youWin()) {
//         return false;
//     }
//     tour++;
//     if (tour === 41) {
//         messageContainer.innerHTML = "Match nul";
//         endGame();
//         return true;
//     }
// }
// function endGame() {
//     isPlayable = false
//     btn.style.display = "block"
// }

// function replay() {
//     messageContainer.innerHTML = ""
//     playerOneTurn = true
//     isPlayable = true
//     tour = 0;
//     displayMap()
// }

// function cpuPlay(cellContainer) {
//     let cells = document.querySelectorAll('.cell')
//     while (cells[cpuChoice].innerHTML != "") {
//         cpuChoice = randomize(0, cells.length - 1)
//     }
//     cells[cpuChoice].click()
//     youWin()
// }

// function randomize(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }
// function choiceCpu(cpu) {
//     cpuMode = cpu
//     replay()
// }



