function getComputerChoice(){
    const random = Math.random();
    if(random < 0.34) {
        return 'rock';
    } else if (random <= 0.67){
        return 'paper';
    } else {
        return 'scissors';
    }
}

function playRound(playerSelection, computerSelection) {
 if (playerSelection === 'rock'){
  if (computerSelection === 'rock'){
        return 'Tie';
        } else if (computerSelection === 'paper'){
            computerScore++;
            return 'Computer Wins';
            } else {
            playerScore++;
            return 'Player Wins';
            }
        }
        if (playerSelection === 'paper') {
            if (computerSelection === 'rock') {
            playerScore++;
            return 'Player Wins';
            } else if (computerSelection === 'scissors') {
            computerScore++;
            return 'Computer Wins';
            } else {
            return 'Tie';
            }
        }

        if (playerSelection === 'scissors') {
            if (computerSelection === 'rock') {
            computerScore++;
            return 'Computer Wins';
            } else if (computerSelection === 'paper') {
            playerScore++;
            return 'Player Wins';
            } else {
            return 'Tie';
            }
            }



    }
    

        


const game = () => {
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt('Make your move, rock, paper or scissors').toLowerCase();
        const computerSelection = getComputerChoice()
        playRound(playerSelection, computerSelection)
    
    }

    if (playerScore > computerScore) {
        return 'Player Wins the Game'
    } else if (playerScore < computerScore) {
        return 'Computer Wins The Game'
    } else {
        return 'You tied with computer'
    }

}


console.log(game())
    





    

