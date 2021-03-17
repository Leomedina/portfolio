let win = parseInt(document.querySelector("#win").value);
const winSelector = document.querySelector("#win");
const resetButton = document.querySelector(".reset");

const playerOne = {
  score: 0,
  button: document.querySelector(".player-1"),
  display: document.querySelector("#player-1-score")
};

const playerTwo = {
  score: 0,
  button: document.querySelector(".player-2"),
  display: document.querySelector("#player-2-score")
};

function score(evt) {
  let player = evt.target.value;

  if (player === "1") {
    playerOne.score++;
    playerOne.display.textContent = playerOne.score;
  } else {
    playerTwo.score++;
    playerTwo.display.textContent = playerTwo.score;
  };

  checkWin();
};

function resetScore() {
  for (let player of [playerOne, playerTwo]) {
    player.score = 0;
    player.display.textContent = 0;
    player.button.removeAttribute("disabled");
    player.display.style.color = "black"
  };
};

function checkWin() {
  if (playerOne.score === win || playerTwo.score === win) {
    playerOne.button.setAttribute("disabled", true);
    playerTwo.button.setAttribute("disabled", true);
    if (playerOne.score === win) {
      playerOne.display.style.color = "green"
      playerTwo.display.style.color = "red"
    } else {
      playerOne.display.style.color = "red"
      playerTwo.display.style.color = "green"

    };
  };
};

function updateWin(event) {
  win = parseInt(event.target.value);
  resetScore();
}

winSelector.addEventListener("change", updateWin)
playerOne.button.addEventListener("click", score);
playerTwo.button.addEventListener("click", score);
resetButton.addEventListener("click", resetScore);