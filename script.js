function computerPlay() {
  let plays = ["Rock", "Paper", "Scissors"];
  let randomComputerPlay = plays[Math.floor(Math.random() * plays.length)];
  console.log("Computer plays:" + " " + randomComputerPlay);

  return randomComputerPlay;
}

function playerPlay() {
  let plays = ["Rock", "Paper", "Scissors"];
  let randomPlayerPlay = plays[Math.floor(Math.random() * plays.length)];
  console.log("Player plays:" + " " + randomPlayerPlay);

  return randomPlayerPlay;
}

function oneRound(computerPlay, playerPlay) {
  let paper = "Paper";
  let rock = "Rock";
  let scissors = "Scissors";

  //Draw scenario
  if (playerPlay.toLowerCase() === computerPlay.toLowerCase()) {
    console.log("Draw!");
  }
  //Scenarios where the computer wins
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
  }
  //Scenarios where the player wins
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
  }
}

let compRandom = computerPlay(); /*.toLowerCase()*/
let playerPrompt = window.prompt("Rock, paper, or scissors?");
//let playerRandom = playerPlay()/*.toLowerCase()*/;
oneRound(compRandom, playerPrompt);
