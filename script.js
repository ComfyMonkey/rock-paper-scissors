



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

  const playerSelection = "Rock";
  const computerSelection = getComputerChoice();

  console.log(playRound(playerSelection, computerSelection));



