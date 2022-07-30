// this is the computer play function
function getComputerChoice() {
    const random = Math.random();
    if (random < 0.34) {
      return 'rock';
    }  else if (random <= 0.67) {
      return 'paper';
    } else {
      return 'scissors';
    }
  }
  
  
  
  
  //this is the round play function
  
  
  
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
  
  //these are the game and winner functions
  
  playerScore = parseInt(0);
  computerScore = parseInt(0);
  
  function game() {
      for (let i = 0; i < 5; i++) {
          let playerSelection = prompt('choose rock paper or scissors');
          const computerSelection = getComputerChoice();
          console.log(playRound(playerSelection.toLowerCase(), computerSelection));
          console.log('Player score = ' + playerScore);
          console.log('Computer score = ' +  computerScore);
  
      }
      
  }
  game();
  
  function checkWinner() {
      if (playerScore > computerScore) {
          return 'You won the game';
      } else if (computerScore > playerScore) {
          return 'Computer won the game';
      } else {
          return 'Its a tie';
      }
  }
  console.log(checkWinner());




    

