//Selectors
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
const cScoreText = document.querySelector("#c-score-text")
const pScoreText = document.querySelector("#p-score-text")
const playerScoreBox = document.querySelector(".playerScoreBox")
const computerScoreBox = document.querySelector(".computerScoreBox")
const computerImage = document.querySelector("#computer-image")
const playerImage = document.querySelector("#player-image")
const roundPlayBox = document.querySelector(".round-play-box")
const roundCounter = document.querySelector("#round-counter")
let roundCount=1

//Computer picks randomly from array: Rock, Paper or Scissors.
function computerPlay() {
  let randomComputerPlay = plays[Math.floor(Math.random() * plays.length)];
  
  if(randomComputerPlay == "Rock"){
    document.getElementById("computer-image").src="IMG/rock.png"
  }
  else if(randomComputerPlay == "Paper"){
    document.getElementById("computer-image").src="IMG/paper.png"
  }
  else if(randomComputerPlay == "Scissors"){
    document.getElementById("computer-image").src="IMG/scissors.png"
  }

  return randomComputerPlay;


}

//Function to play one round of Rock-Paper-Scissors.

function playRound(computerPlay, playerPlay) {
  paper = "Paper";
  rock = "Rock";
  scissors = "Scissors";
  
  
  roundCounter.textContent = `ROUND ${roundCount}`

  //Draw scenario
  if (playerPlay.toLowerCase() === computerPlay.toLowerCase()) {
    roundCount+=1;
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
    roundCount+=1;
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
      finalResult.textContent = "Game over, computer wins!";
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
    roundCount+=1;
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
      finalResult.textContent = "Congratulations, you win!";
      finalResultBox.appendChild(finalResult);
      gameOver();
    }
  }
  
  
}

//Button functionality

function buttonFunctions() {
  rockBtn.addEventListener("click", () => {
    
    playRound(computerPlay(), "rock");
    computerScoreDisplay();
    playerScoreDisplay();
    
    playerImage.setAttribute("style", "opacity:1")
    document.getElementById("player-image").src="IMG/rock.png"
    computerImage.setAttribute("style", "opacity:1")
  });

  paperBtn.addEventListener("click", () => {
    playRound(computerPlay(), "paper");
    computerScoreDisplay();
    playerScoreDisplay();
    
    playerImage.setAttribute("style", "opacity:1")
    document.getElementById("player-image").src="IMG/paper.png"
    computerImage.setAttribute("style", "opacity:1")
  });

  scissorsBtn.addEventListener("click", () => {
    playRound(computerPlay(), "scissors");
    computerScoreDisplay();
    playerScoreDisplay();
    
    playerImage.setAttribute("style", "opacity:1")
    document.getElementById("player-image").src="IMG/scissors.png"
    computerImage.setAttribute("style", "opacity:1")
    
    
  });

  
}

//Display scores

function computerScoreDisplay() {

  computerScoreActual.textContent = compScore;
  cScoreText.textContent = "COMPUTER"

  scoreboard.appendChild(computerScoreBox);
  computerScoreBox.appendChild(cScoreText)
  cScoreText.appendChild(computerScoreActual)
}

function playerScoreDisplay() {
  playerScoreActual.textContent = playerScore
  pScoreText.textContent = "PLAYER";
  
  scoreboard.appendChild(playerScoreBox);
  playerScoreBox.appendChild(pScoreText)
  pScoreText.appendChild(playerScoreActual);
}

//Play game

function game() {
  playerScore = 0;
  compScore = 0;

  buttonFunctions();
  
 
}

//End game

function gameOver() {
  rockOff.disabled = true;

  paperOff.disabled = true;

  scissorsOff.disabled = true;

  createRestartBtn.innerHTML = "Rematch?";
  
  createRestartBtn.setAttribute("style", "opacity:1",);
  createRestartBtn.addEventListener("click", () => {
    restart();
  });
}

//Restart game

function restart() {
  window.location.reload(true);
}

game();
