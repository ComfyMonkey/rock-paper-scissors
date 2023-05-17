



function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
        return "Rock";
    } else if (randomNumber === 1) {
        return "Paper";
    } else if (randomNumber === 2) {
        return "Scissors"
    }
}


function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return `DRAW! Player chose ${playerSelection} and Computer chose ${computerSelection}.`;
    } else if (
        (playerSelection === "Rock" && computerSelection === "Scissors") ||
        (playerSelection === "Paper" && computerSelection === "Rock") || 
        (playerSelection === "Scissors" && computerSelection === "Paper")
    ) {
        return `Player Wins! ${playerSelection} beats ${computerSelection}.`;
    } else {
        return `Computer Wins! ${playerSelection} loses against ${computerSelection}.`;
    }
}

function game() {
    let computerScore = 0;
    let playerScore = 0; 


    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Choose between Rock, Paper, Scissors");
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection)); 

        if (playRound(playerSelection, computerSelection) == `Player Wins! ${playerSelection} beats ${computerSelection}.`) {
            playerScore++
        }
        else if (playRound(playerSelection, computerSelection) == `Computer Wins! ${playerSelection} loses against ${computerSelection}.`) {
            computerScore++;
        }
    }
    console.log("Game Over")
    if(playerScore > computerScore) {
        console.log("Player was the winner!");
    }
    else if(playerScore < computerScore) {
        console.log("Computer was the winner!");
    }
    else {
        console.log("There is a tie!")
    }
}

game();
