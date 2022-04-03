//Declarations
const plays = ["Rock", "Paper", "Scissors"];
const resultsContainer = document.querySelector("#results");
const resultsInside = document.querySelector("#resultsInside");
const finalResultBox = document.querySelector("#finalResultBox");
const finalResult = document.querySelector("#finalResults");
const rockBtn = document.querySelector("#rockBtn");
const paperBtn = document.querySelector("#paperBtn");
const scissorsBtn = document.querySelector("#scissorsBtn");
const compScoreNumber = document.querySelector("#computerScoreNumber");
const scoreboard = document.querySelector("#scoreBoard");
const computerScoreActual = document.querySelector("#computerScore");
const playerScoreActual = document.querySelector("#playerScore");
const playerScoreNumber = document.querySelector("#playerScoreNumber");
const rockOff = document.querySelector("#rockBtn");
const paperOff = document.querySelector("#paperBtn");
const scissorsOff = document.querySelector("#scissorsBtn");
const createRestartBtn = document.querySelector("#restartBtn");

//Computer picks randomly from array: Rock, Paper or Scissors.
function computerPlay() {
  let randomComputerPlay = plays[Math.floor(Math.random() * plays.length)];
  return randomComputerPlay;
}

//Function to play one round of Rock-Paper-Scissors.

function playRound(computerPlay, playerPlay) {
  paper = "Paper";
  rock = "Rock";
  scissors = "Scissors";

  //Draw scenario
  if (playerPlay.toLowerCase() === computerPlay.toLowerCase()) {
    resultsInside.textContent = "Draw!";
    resultsContainer.appendChild(resultsInside);
  }
  //Scenarios where the computer wins.
  else if (
    (computerPlay.toLowerCase() === rock.toLowerCase() &&
      playerPlay.toLowerCase() === scissors.toLowerCase()) ||
    (computerPlay.toLowerCase() === scissors.toLowerCase() &&
      playerPlay.toLowerCase() === paper.toLowerCase()) ||
    (computerPlay.toLowerCase() === paper.toLowerCase() &&
      playerPlay.toLowerCase() === rock.toLowerCase())
  ) {
    resultsInside.textContent =
      "You lose! " +
      computerPlay.charAt(0).toUpperCase() +
      computerPlay.slice(1) +
      " beats " +
      playerPlay.charAt(0).toUpperCase() +
      playerPlay.slice(1) +
      ".";
    resultsContainer.appendChild(resultsInside);

    compScore += 1;

    if (compScore == 5) {
      finalResult.textContent = "Game over! Computer wins!";
      finalResultBox.appendChild(finalResult);
      gameOver();
    }
  }
  //Scenarios where the player wins.
  else if (
    (computerPlay.toLowerCase() === rock.toLowerCase() &&
      playerPlay.toLowerCase() === paper.toLowerCase()) ||
    (computerPlay.toLowerCase() === scissors.toLowerCase() &&
      playerPlay.toLowerCase() === rock.toLowerCase()) ||
    (computerPlay.toLowerCase() === paper.toLowerCase() &&
      playerPlay.toLowerCase() === scissors.toLowerCase())
  ) {
    resultsInside.textContent =
      "You win! " +
      playerPlay.charAt(0).toUpperCase() +
      playerPlay.slice(1) +
      " beats " +
      computerPlay.charAt(0).toUpperCase() +
      computerPlay.slice(1) +
      ".";
    resultsContainer.appendChild(resultsInside);

    playerScore += 1;

    if (playerScore == 5) {
      finalResult.textContent = "Congratulations, you've won the game!";
      finalResultBox.appendChild(finalResult);
      gameOver();
    }
  }
}

function buttonFunctions() {
  rockBtn.addEventListener("click", () => {
    playRound(computerPlay(), "rock");
    computerScoreDisplay();
    playerScoreDisplay();
  });

  paperBtn.addEventListener("click", () => {
    playRound(computerPlay(), "paper");
    computerScoreDisplay();
    playerScoreDisplay();
  });

  scissorsBtn.addEventListener("click", () => {
    playRound(computerPlay(), "scissors");
    computerScoreDisplay();
    playerScoreDisplay();
  });
}

function computerScoreDisplay() {
  computerScoreActual.textContent = "COMPUTER: " + compScore;
  scoreboard.appendChild(computerScoreActual);
}

function playerScoreDisplay() {
  playerScoreActual.textContent = "PLAYER: " + playerScore;
  scoreboard.appendChild(playerScoreActual);
}

function game() {
  playerScore = 0;
  compScore = 0;

  buttonFunctions();
}

function gameOver() {
  rockOff.disabled = true;

  paperOff.disabled = true;

  scissorsOff.disabled = true;

  createRestartBtn.innerHTML = "Rematch?";
  finalResultBox.appendChild(createRestartBtn);
  createRestartBtn.setAttribute("style", "opacity:1;");
  createRestartBtn.addEventListener("click", () => {
    restart();
  });
}
function restart() {
  window.location.reload(true);
}

game();
