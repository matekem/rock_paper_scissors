function computerPlay() 
{
    let plays = ["Rock" , "Paper" , "Scissors"];
    let randomComputerPlay = plays[Math.floor(Math.random() * plays.length)];
    console.log("Computer plays:"+ " " + randomComputerPlay);

    return(randomComputerPlay);
}

function playerPlay() 
{
    let plays = ["Rock" , "Paper" , "Scissors"];
    let randomPlayerPlay = plays[Math.floor(Math.random() * plays.length)];
    console.log("Player plays:" + " " + randomPlayerPlay);
    
    return(randomPlayerPlay);
}

function oneRound(computerPlay, playerPlay)
{
    let paper = "Paper";
    let rock = "Rock"
    let scissors = "Scissors"

    //Draw scenario
    if(playerPlay.toLowerCase() === computerPlay.toLowerCase()){
        console.log("Draw!")
    }
    //Scenarios where the computer wins
    else if(computerPlay === rock && playerPlay === scissors || computerPlay === scissors && playerPlay === paper || computerPlay === paper && playerPlay === rock){
        console.log("Computer wins! " + computerPlay + " beats " + playerPlay + ".")
    }
    //Scenarios where the player wins
    else if(computerPlay === rock && playerPlay === paper || computerPlay === scissors && playerPlay === rock || computerPlay === paper && playerPlay === scissors){
        console.log("Player wins! " + playerPlay + " beats " + computerPlay + ".")
    }
    
}

let compRandom = computerPlay()/*.toLowerCase()*/;
let playerRandom = playerPlay()/*.toLowerCase()*/;
oneRound(compRandom, playerRandom);