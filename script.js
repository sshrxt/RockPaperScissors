let playerScore = 0;
let compScore = 0;


function getComputerChoice() {
  let randomChoice = Math.floor(Math.random() * 3);

  switch (randomChoice) {
    case 0:
      return "rock";
    case 1:
      return "scissors";
    case 2:
      return "paper";
  }
}

function playRound(playersSelection, computerSelection, scoreBoardDiv) {
    playersSelection = playersSelection.toLowerCase();
  
    const scoreBoard = scoreBoardDiv.querySelector("h1");
    const moves = scoreBoardDiv.querySelector("h5");

    moves.textContent = playersSelection + " vs " + computerSelection; 

    const res = playOnce(playersSelection, computerSelection);
    if(res == 1) {
        playerScore++; // Increment playerScore
    }
    else if(res == 0) {
        compScore++; // Increment compScore
    }

    scoreBoard.textContent = playerScore + " : " + compScore;

    if(playerScore == 5) {
        alert("THE PLAYER FUCKING WINS");
        reset();
    }
    else if (compScore == 5){
        alert("The computer won bruh");
        reset();
    }
}

function reset() {
    playerScore = 0;
    compScore = 0;

    location.reload();
}

function playOnce(playersSelection, computerSelection) {
    if(playersSelection === computerSelection) {
        return 2; // It's a tie
    }
    else if ((playersSelection === "rock" && computerSelection === "scissors") ||
             (playersSelection === "paper" && computerSelection === "rock") ||
             (playersSelection === "scissors" && computerSelection === "paper")) {
        return 1; // Player wins
    } else {
        return 0; // Computer wins
    }
}


document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".result");

  const startButton = document.createElement("button");
  startButton.textContent = "Start Game";
  startButton.classList.add("start-button");

  container.appendChild(startButton);

  startButton.addEventListener("click", () => {
    container.removeChild(startButton);

    const playerIcon = document.createElement("img");
    playerIcon.src = "player.png";
    playerIcon.setAttribute("style", "width: 150px; height: auto;");
    container.appendChild(playerIcon);

    const scoreBoardDiv = document.createElement("div");
    scoreBoardDiv.classList.add("score-board");

    const scoreBoard = document.createElement("h1");
    scoreBoard.textContent = 0 + " : " + 0;
    scoreBoardDiv.appendChild(scoreBoard);

    const move = document.createElement("h5");
    move.textContent = "no moves selected";
    scoreBoardDiv.appendChild(move);

    container.appendChild(scoreBoardDiv);

    const robotIcon = document.createElement("img");
    robotIcon.src = "robot.png";
    robotIcon.setAttribute("style", "width: 150px; height: auto;");
    container.appendChild(robotIcon);
    addEventListeners(scoreBoardDiv);
  });
});

function addEventListeners(scoreBoardDiv) {
    const rock = document.querySelector(".rock");
    const paper = document.querySelector(".paper");
    const scissors = document.querySelector(".scissors");

    rock.addEventListener('click', () => {  
        playRound("rock", getComputerChoice(), scoreBoardDiv);
    });

    paper.addEventListener('click', () => {
        playRound("paper", getComputerChoice(), scoreBoardDiv);
    });

    scissors.addEventListener('click', () => {
        playRound("scissors", getComputerChoice(), scoreBoardDiv);
    });
}




