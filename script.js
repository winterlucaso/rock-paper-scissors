// Game
let playerWins = 0;
let computerWins = 0;

// Get computer selection
function getComputerChoice() {
    let numChoice = Math.floor(Math.random() * 3);
    switch (numChoice){
      case 0:
        return "rock";
      case 1:
        return "paper";
      case 2:
        return "scissors";
    }
}

// Plays one round of Rock, Paper, Scissors
function playRound(playerChoice){
    let computerChoice = getComputerChoice();
    console.log('The computer chose: ' + computerChoice);
    updateImgs(playerChoice, computerChoice);

    console.log(checkRoundWin(playerChoice, computerChoice));
    return;
}

// Checks to see whether the player or computer wins the round
function checkRoundWin(playerChoice, computerChoice) {
    // Tie
    if (playerChoice == computerChoice) {
        messageConsole.textContent = "It's a tie! Try Again!";
        return "You both selected " + playerChoice + ", it's a tie!";
    }

    // Player Wins
    else if (((playerChoice == "rock") && (computerChoice == "scissors")) || 
        ((playerChoice == "paper") && (computerChoice == "rock")) ||
        ((playerChoice == "scissors") && (computerChoice == "paper"))) {
            playerWins++;
            updateScore();
            if (!isGameOver()) {
                messageConsole.textContent = "Player wins the round!";
                return "Player wins the round!";
            }
            else {
                messageConsole.textContent = "Player wins the series!";
                endGameProtocol();
                return "Player wins the series!";
            }
        }

    // Computer Wins
    else if (((playerChoice == "rock") && (computerChoice == "paper")) || 
        ((playerChoice == "paper") && (computerChoice == "scissors")) ||
        ((playerChoice == "scissors") && (computerChoice == "rock"))) {
            computerWins++;
            updateScore();
            if (!isGameOver()) {
                messageConsole.textContent = "Computer wins the round!";
                return "Computer wins the round!";
            }
            else {
                messageConsole.textContent = "Computer wins the series!";
                endGameProtocol();
                return "Computer wins the series!";
            }
    }
}

// Checks to see if the game is over
function isGameOver() {
    console.log("isGameOver(): " + ((playerWins >= 5) || (computerWins >= 5)));
    return ((playerWins >= 5) || (computerWins >= 5));
}

// Adds restart button
function endGameProtocol() {
    restartBtn.style.visibility = "visible";
    return;
}

// Restarts the series back to 0 wins for player and computer
function restartSeries() {
    playerWins = 0;
    computerWins = 0;
    updateScore();
    restartBtn.style.visibility = "hidden";
    messageConsole.textContent = "Choose an option. First to 5 wins!!";
}

// Updates the players and computers score
function updateScore() {
    playerScore.textContent = `${playerWins}`;
    computerScore.textContent = `${computerWins}`;
}

// Updates the imgs for player and computer choices
function updateImgs(playerChoice, computerChoice) {
    playerChoiceImg.src = "./img/" + playerChoice + ".png";
    computerChoiceImg.src = "./img/" + computerChoice + ".png";
}


// UI
const playerScore = document.getElementById('playerScore');
const computerScore = document.getElementById('computerScore');
const playerChoiceImg = document.getElementById('player-choice-img');
const computerChoiceImg = document.getElementById('computer-choice-img');
const messageConsole = document.getElementById('messageConsole');
const rockBtn = document.querySelector('#rockBtn');
const paperBtn = document.querySelector('#paperBtn');
const scissorsBtn = document.querySelector('#scissorsBtn');
const restartBtn = document.querySelector('#restartBtn');

rockBtn.addEventListener('click', () => {
    if (!isGameOver()){
        playRound("rock");
    }
});
paperBtn.addEventListener('click', () => {
    if (!isGameOver()){
        playRound("paper");
    }
});
scissorsBtn.addEventListener('click', () => {
    if (!isGameOver()){
        playRound("scissors");
    }
});
restartBtn.addEventListener('click', () => {
    restartSeries();
});






// Script
