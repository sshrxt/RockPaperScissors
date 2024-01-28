function getComputerChoice(){
    let randomChoice = Math.floor(Math.random() * 3);

    switch(randomChoice){
        case 0:
            return "rock";
        case 1:
            return "scissors";
        case 2:
            return "paper";
    }
}

function playRound(playersSelection, computerSelection){
    playersSelection.toLowerCase();
    if(playersSelection == "rock"){
        switch(computerSelection){
            case "rock":
                return "tie";
            case "paper":
                return "You Lose! Paper beats Rock";
            case "scissors":
                return "You Win! Rock beats Scissors";
        }
    } else if(playersSelection == "paper"){
        switch(computerSelection){
            case "rock":
                return "You Win! Paper beats Rock";
            case "paper":
                return "You Tie!";
            case "scissors":
                return "You Lose! Scissors beats Paper";
        }
    } else{
        switch(computerSelection){
            case "rock":
                return "You Lose! Rock beats Scissors";
            case "paper":
                return "You Win! Scissors beats Paper";
            case "scissors":
                return "You Tie!";
        }
    }
}

function game(){
    let computerChoice;
    let userChoice;
    for(let i = 0; i < 5; i++){
        computerChoice = getComputerChoice();
        userChoice = prompt();
        console.log(playRound(userChoice, computerChoice));
    }
}

game();