let playerOneScore = document.querySelector("#player-1-score");
let playerTwoScore = document.querySelector("#player-2-score");
let playerOneButton = document.querySelector(".player-1");
let playerTwoButton = document.querySelector(".player-2");
let resetButton = document.querySelector(".reset");
let win = document.querySelector("#win");

if (playerOneScore === win || playerTwoScore === win) {
  console.log("you win!");
};

function score(evt) {
  let player = evt.target.value;

  if (player === "1") updateScore(playerOneScore);
  else updateScore(playerTwoScore);

  checkWin();
};

function updateScore(player) {
  let score = parseInt(player.innerText);
  score += 1;
  player.innerText = score;
};

function resetScore() {
  playerOneScore.innerText = 0;
  playerTwoScore.innerText = 0;
  playerOneButton.removeAttribute("disabled");
  playerTwoButton.removeAttribute("disabled");
  playerOneScore.style.color = "black"
  playerTwoScore.style.color = "black"
};

function checkWin() {
  let winVal = parseInt(win.value);
  let playerOne = parseInt(playerOneScore.innerText);
  let playerTwo = parseInt(playerTwoScore.innerText);

  if (playerOne === winVal || playerTwo === winVal) {
    playerOneButton.setAttribute("disabled", true);
    playerTwoButton.setAttribute("disabled", true);
    if (playerOne === winVal) {
      playerOneScore.style.color = "green"
      playerTwoScore.style.color = "red"
    } else {
      playerOneScore.style.color = "red"
      playerTwoScore.style.color = "green"

    }
  };
};

function updateWin(event) {
  win = event.target;
  resetScore();
}

win.addEventListener("change", updateWin)
playerOneButton.addEventListener("click", score);
playerTwoButton.addEventListener("click", score);
resetButton.addEventListener("click", resetScore);