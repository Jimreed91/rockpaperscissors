
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
var computerScore = 0;
var playerScore = 0;

let computerScoreL = document.querySelector("#computer-score");
let playerScoreL = document.querySelector("#player-score");
let computerChoice = document.querySelector(`#computer-choice`);
let playerChoice = document.querySelector(`#player-choice`);
let winnerMessage = document.querySelector(`#winner-message`);


function playRound(playerSelection, computerSelection) {
    computerChoice.textContent = `Computer chose ${computerSelection}`;
    playerChoice.textContent = `You chose ${playerSelection}`;

    if(playerSelection == computerSelection) {
        winnerMessage.textContent =( `Draw! you both picked ${playerSelection}`);
        
    } else if(playerSelection == "paper" && computerSelection =="rock" ||
             playerSelection == "rock" && computerSelection == "scissors" ||
              playerSelection == "scissors" && computerSelection == "paper") {
                winnerMessage.textContent=( `You win the round! ${playerSelection} beats ${computerSelection}`)
        playerScore++;
        playerScoreL.textContent = playerScore;
        
    } else {
        computerScore++;
        computerScoreL.textContent = computerScore;
        winnerMessage.textContent=( `You lose the round! ${computerSelection} beats ${playerSelection}`)
        
    }
        if(playerScore >= 5 || computerScore >= 5) {
            gameEnd()
        }

}

function gameEnd() {
    var header = document.querySelector("h1");

    if(playerScore > computerScore) {
        winnerMessage.textContent = "You won the game!"
    } else {
        winnerMessage.textContent = "You lost the game!"
    }

    playerScore = 0;
    computerScore = 0;
    playerScoreL.textContent =0;
    computerScoreL.textContent=0;

}

//New game function that starts on a button push and will 
//run game rounds untill player or computer has won 5
//Each round the choice the player and computer each made should be displayed



//record wins / losses
/* function game() {

    
    while(playerScore < 5 && computerScore < 5) {
        
       if (playRound(window.prompt(`rock,paper or scissors?`).toLowerCase(), computerPlay())=="win"){
           playerScore++;

       } else {
           computerScore++;
           computerScoreL.textContent = computerScore;
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
    
    
} */
//loop game until player or computer has won/lost 5 times
const buttons = document.querySelectorAll("button");

// event for button click
buttons.forEach((button)=>{ 
    button.addEventListener("click", ()=>
    console.log(playRound(button.getAttribute("data-choice"),computerPlay())))
})

//animation for buttons
buttons.forEach((button)=>{
    button.addEventListener("mouseover", ()=>
    button.setAttribute("class", "hovering"))

    button.addEventListener("mouseleave", ()=>
    button.removeAttribute("class","hovering")
     )
})


