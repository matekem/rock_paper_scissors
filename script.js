//Computer picks randomly from array: Rock, Paper or Scissors.

function computerPlay() {
  let plays = ["Rock", "Paper", "Scissors"];
  let randomComputerPlay = plays[Math.floor(Math.random() * plays.length)];
  console.log("Computer plays:" + " " + randomComputerPlay);

  return randomComputerPlay;
}

//Random picker for the player, used for testing in the beginning.

/*
function playerPlay() {
  let plays = ["Rock", "Paper", "Scissors"];
  let randomPlayerPlay = plays[Math.floor(Math.random() * plays.length)];
  console.log("Player plays:" + " " + randomPlayerPlay);

  return randomPlayerPlay;
} 
*/

//Function to play one round of Rock-Paper-Scissors.

function playRound(computerPlay, playerPlay) {
  let paper = "Paper";
  let rock = "Rock";
  let scissors = "Scissors";
  let win = false;
  let playerScore = 0;
  let compScore = 0;
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
    compScore += 1;
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
  console.log(playerScore);
  console.log(compScore);
}


//Function to decide the length of the game.

function game() {
  let length = prompt("How many games do you want to play?");
  let compRandom;
  let playerPrompt;

  for (let i = 0; i < length; i++) {
    compRandom = computerPlay();
    playerPrompt = prompt("Rock, paper, or scissors?");
    playRound(compRandom, playerPrompt);  
  }  
}

/*
let compRandom = computerPlay(); 
let playerPrompt = prompt("Rock, paper, or scissors?");
playRound(compRandom, playerPrompt)
*/
game();
