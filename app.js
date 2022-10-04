let str = ['paper', 'rock', 'scissors']

//selects random computer choice from the str array
function getComputerChoice() {
    const result = str[ Math.floor(Math.random() * str.length)];
        return result;
};

//it is the whole game played through this function
function game() {
    let playScore = 0;
    let compScore = 0;
    let gameWinner = "";

    //event listener that selects all the buttons 
    const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => {
            button.addEventListener('click', () => {
                playerSelection = button.value;
                const computerSelection = getComputerChoice();
                battleWinText.textContent = playRound(playerSelection, computerSelection);
                playScoreText.textContent = 'Player Win totals: ' + playScore;
                compScoreText.textContent = 'Computer Win totals: ' + compScore;
                endGame();

            })
    });

    //function that display text of who won the round
    function playRound(playerSelection, computerSelection) {
        console.log('player:', playerSelection, '/computer:', computerSelection);
        if(playerSelection === 'rock' && computerSelection === 'rock') {
            return 'It\' a tie'
        }else if(playerSelection === 'paper' && computerSelection === 'paper') {
            return 'It\' a tie'
        }else if(playerSelection === 'scissors' && computerSelection === 'scissors') {
            return 'It\' a tie'
        }else if(playerSelection === 'scissors' && computerSelection === 'rock') {
            compScore++
            return 'You lost! Rock crushes Scissors'
        }else if(playerSelection === 'scissors' && computerSelection === 'paper') {
            playScore++
            return 'You won! Scissors cuts Paper'
        }else if(playerSelection === 'rock' && computerSelection === 'paper') {
            compScore++
            return 'You lost! Paper covers Rock'
        }else if(playerSelection === 'rock' && computerSelection === 'scissors') {
            playScore++
            return 'You won! Rock crushes Scissors'
        }else if(playerSelection === 'paper' && computerSelection === 'scissors') {
            compScore++
            return 'You lost! Scissors cuts Paper'
        }else if(playerSelection === 'paper' && computerSelection === 'rock') {
            playScore++
            return 'You Won! Paper cover Pock'
        }
    };

    //div created and added into DOM to display all results
    const container = document.querySelector("#container");
    const resultDiv = document.createElement('div');
    resultDiv.style.marginTop = '20px';
    resultDiv.style.backgroundColor = 'red';
    container.appendChild(resultDiv);

    //P element added to track player score
    const playScoreText = document.createElement('p');
    playScoreText.style.color = 'blue';
    playScoreText.textContent = 'Player Win totals:' + playScore;
    resultDiv.appendChild(playScoreText);

    //P element added to track computer score
    const compScoreText = document.createElement('p');
    compScoreText.style.color = 'blue';
    compScoreText.textContent = 'Computer Win totals: ' + compScore;
    resultDiv.appendChild(compScoreText);

    //create battleWinText DOM
    const battleWinText = document.createElement('p');
    battleWinText.style.color = 'black';
    resultDiv.appendChild(battleWinText);

    //create gameWinText DOM
    const gameWinText = document.createElement('p');
    gameWinText.style.color = 'orange';
    gameWinText.textContent = gameWinner;
    resultDiv.appendChild(gameWinText);

    //function that finds a winner from whoever reaches five first 
    function endGame() {
        if ( playScore == 5) {
            gameWinner = 'You Win!';
            gameWinText.textContent = gameWinner;

            //  disable game buttons
            document.getElementById('1').disabled = true;
            document.getElementById('2').disabled = true;
            document.getElementById('3').disabled = true;

            //  create new DOM button to replay
            const playAgainButton = document.createElement('button');
            playAgainButton.textContent = 'Play Again';
            resultDiv.appendChild(playAgainButton);

            //  if clicked, reload page
            playAgainButton.addEventListener('click', () => {
                location.reload();
            });

        }else if (compScore == 5) {
            gameWinner = 'Computer Wins!';
            gameWinText.textContent = gameWinner;

            //  disable game buttons
            document.getElementById('1').disabled = true;
            document.getElementById('2').disabled = true;
            document.getElementById('3').disabled = true;

            //  create new DOM button to replay
            const playAgainButton = document.createElement('button');
            playAgainButton.textContent = 'Play again!';
            resultDiv.appendChild(playAgainButton);

            //  if clicked, reload page
            playAgainButton.addEventListener('click', () => {
                location.reload();
            });
        }
    }


};

game();



    

