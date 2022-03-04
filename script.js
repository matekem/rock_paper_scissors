//Computer picks randomly from array: Rock, Paper or Scissors.

function computerPlay() {
  const plays = ["Rock", "Paper", "Scissors"];
  let randomComputerPlay = plays[Math.floor(Math.random() * plays.length)];
  /*console.log("Computer plays:" + " " + randomComputerPlay);*/

  return randomComputerPlay;
}

//Function to play one round of Rock-Paper-Scissors.

function playRound(computerPlay, playerPlay) {
  paper = "Paper";
  rock = "Rock";
  scissors = "Scissors";
 
 
  //Draw scenario
  if (playerPlay.toLowerCase() === computerPlay.toLowerCase()) {
    console.log("Draw!");
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
    console.log(
      "You lose! " +
        computerPlay.charAt(0).toUpperCase() +
        computerPlay.slice(1) +
        " beats " +
        playerPlay.charAt(0).toUpperCase() +
        playerPlay.slice(1) +
        "."
        
    );
    compScore +=1;
    
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
    console.log(
      "You win! " +
        playerPlay.charAt(0).toUpperCase() +
        playerPlay.slice(1) +
        " beats " +
        computerPlay.charAt(0).toUpperCase() +
        computerPlay.slice(1) +
        "."
    );
    playerScore += 1;
  }
  
}

//Function to determine winner

//Function to decide the length of the game.

function game() {
  //let length = prompt("How many games do you want to play?");
  playerScore = 0;
  compScore = 0; 

  const rockBtn = document.querySelector('#rockBtn');
  rockBtn.addEventListener('click', () => {
  playRound(computerPlay(), "rock")});

  const paperBtn = document.querySelector('#paperBtn');
  paperBtn.addEventListener('click', () => {
  playRound(computerPlay(), "paper")});

  const scissorsBtn = document.querySelector('#scissorsBtn');
  scissorsBtn.addEventListener('click', () => {
  playRound(computerPlay(), "scissors");});


}
    
game();
