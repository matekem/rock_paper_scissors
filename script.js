function computerPlay () 
{
    let plays = ["Rock" , "Paper" , "Scissors"];

    let randomPlay = plays[Math.floor(Math.random() * plays.length)];

    console.log(randomPlay);
}
computerPlay();