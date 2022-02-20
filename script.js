
// function to randomly choose 1 2 or 3 
function computerPlay() {
    let numberChoice = Math.floor((Math.random()*3)+1);
//convert 1 2 3 to rock paper and scissors
    switch (numberChoice) {
        case  1 : return "rock";
        case 2 : return  "paper";
        case 3 : return  "scissors"; 
    }   
}


// implement user input of rock paper and scissors, convert to lowercase
// compare rock paper scissors to see who has one


function playRound(playerSelection, computerSelection) {
    if(playerSelection == computerSelection) {
        console.log( `Draw! you both picked ${playerSelection}`)
        return "draw";
    } else if(playerSelection == "paper" && computerSelection =="rock" ||
             playerSelection == "rock" && computerSelection == "scissors" ||
              playerSelection == "scissors" && computerSelection == "paper") {
        console.log( `You win the round! ${playerSelection} beats ${computerSelection}`)
        return "win"
    } else {
        console.log( `You lose the round! ${computerSelection} beats ${playerSelection}`)
        return "lose"
    }
}


const computerSelection = computerPlay();
const playerSelection = "rock";


//record wins / losses
function game() {
let playerScore = 0;
let computerScore = 0;
    for(let i = 0; i < 5; i++) {
       switch (playRound(window.prompt(`rock,paper or scissors?`).toLowerCase(), computerPlay())){
           case "win":playerScore++;
           case "lose":computerScore++;
       }
    }
    console.log(`Player: ${playerScore} Computer :${computerScore}` );
    if(playerScore > computerScore) {
        console.log( `Congratulations you won! `)
    } else if (computerScore > playerScore){
        console.log(`You lost this time, bad luck!`) 
    } else {
        console.log(`Looks like its a draw :/`)
    }
}
//loop game until player or computer has won/lost 5 times