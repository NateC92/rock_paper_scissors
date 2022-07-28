function getComputerChoice() {
    let rock = "rock";
    let paper = "paper";
    let scissors = "scissors";
    let getRandomValue = Math.random();
    if (getRandomValue <= 0.33) {
        return rock;
    } else if (getRandomValue <= 0.66) {
        return paper;
    } else {
        return scissors;
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock"){
        if (computerSelection === "rock"){
            return "Tie";
        } else if (computerSelection === "paper"){
            computerScore++;
            return "Computer Wins";
        } else {
            playerScore++;
            return "Player Wins";
        }  
    }
    if (playerSelection === "paper") {
        if (computerSelection === "rock")  {
            playerScore++;
            return "Player Wins";
        } else if (computerSelection === "scissors") {
            computerScore++;
            return "Computer Wins";
        } else {
        return "Tie";
    }  
}
if (playerSelection === "scissors") {
    if (computerSelection === "rock") {
        computerScore++;
        return "Computer Wins";
    } else if (computerSelection === "paper") {
        playerScore++;
        return "Player Wins";
    } else {
        return "Tie";
    }
  }
}

playerScore = parseInt(0);
computerScore = parseInt(0);

function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection= prompt("Make your move rock paper or scissors".toLowerCase());
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        console.log("Player score = " + playerScore);
        console.log("Computer score = " + computerScore);
    }
}
    
game();
    





    

