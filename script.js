
// function to randomly choose 1 2 or 3 
function computerPlay() {
    let numberChoice = Math.floor((Math.random()*3)+1);
//convert 1 2 3 to rock paper and scissors
    switch (numberChoice) {
        case  1 : return "rock";
        case 2 : return "paper";
        case 3 : return "scissors"; 
    }

}


// implement user input of rock paper and scissors, convert to lowercase
// compare rock paper scissors to see who has one

//record wins / losses
//loop game until player or computer has won/lost 5 times