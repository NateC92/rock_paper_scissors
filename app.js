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

function playRound 
(playerelection, 
    computerSelection) {
    if (playerSelection.
         toLowerCase() === 'rock'){
        if (computerSelection === 'rock'){
            return 'Tie';
        } else if(computerSelection === 
                'paper'){
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

        
    





    

