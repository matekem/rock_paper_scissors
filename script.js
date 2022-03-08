//Computer picks randomly from array: Rock, Paper or Scissors.

function computerPlay() {
  const plays = ["Rock", "Paper", "Scissors"];
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
    const resultsContainer = document.querySelector("#results");
    const resultsInside = document.querySelector("#resultsInside");
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
    const resultsContainer = document.querySelector("#results");

    const resultsInside = document.querySelector("#resultsInside");
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
      const finalResultBox = document.querySelector("#finalResultBox");
      const finalResult = document.querySelector("#finalResults");
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
    const resultsContainer = document.querySelector("#results");
    const resultsInside = document.querySelector("#resultsInside");
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
      const finalResultBox = document.querySelector("#finalResultBox");
      const finalResult = document.querySelector("#finalResults");
      finalResult.textContent = "Congratulations, you've won the game!";
      finalResultBox.appendChild(finalResult);
      gameOver();
    
    }
  }
}

function buttonFunctions() {
  const rockBtn = document.querySelector("#rockBtn");
  rockBtn.addEventListener("click", () => {
    playRound(computerPlay(), "rock");
    computerScoreDisplay();
    playerScoreDisplay();
  });

  const paperBtn = document.querySelector("#paperBtn");
  paperBtn.addEventListener("click", () => {
    playRound(computerPlay(), "paper");
    computerScoreDisplay();
    playerScoreDisplay();
  });

  const scissorsBtn = document.querySelector("#scissorsBtn");
  scissorsBtn.addEventListener("click", () => {
    playRound(computerPlay(), "scissors");
    computerScoreDisplay();
    playerScoreDisplay();
  });
}

function computerScoreDisplay() {
  const resultsContainer = document.querySelector("#scoreBoard");
  const computerScoreActual = document.querySelector("#computerScore");

  computerScoreActual.textContent = "Computer score: " + compScore;
  resultsContainer.appendChild(computerScoreActual);
}
function playerScoreDisplay() {
  const resultsContainer = document.querySelector("#scoreBoard");
  const playerScoreActual = document.querySelector("#playerScore");

  playerScoreActual.textContent = "Player score: " + playerScore;
  resultsContainer.appendChild(playerScoreActual);
}

//Function to decide the length of the game.

function game() {
  playerScore = 0;
  compScore = 0;
  

  buttonFunctions();
}

function gameOver() {

  const rockOff = document.querySelector('#rockBtn');
  rockOff.disabled = true;

  const paperOff = document.querySelector('#paperBtn');
  paperOff.disabled = true;

  const scissorsOff = document.querySelector('#scissorsBtn');
  scissorsOff.disabled = true;


  const restartBox = document.querySelector("#finalResultBox");
  const createRestartBtn = document.querySelector("#restartBtn");
  createRestartBtn.innerHTML = "Rematch?";
  restartBox.appendChild(createRestartBtn);
  createRestartBtn.setAttribute('style',  'opacity:1;')
  createRestartBtn.addEventListener("click", () => {
    restart();
  
  });

  

  
}
function restart() {
  window.location.reload(true);
}

game();
