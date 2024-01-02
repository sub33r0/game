let winCount = 0;
let loseCount = 0;

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
        winCount++;
        return 'win';
    } else {
        loseCount++;
        return 'lose';
    }
}

function updateResult(result) {
    const resultContainer = document.getElementById('result-container');
    resultContainer.textContent = `You ${result}. Wins: ${winCount} | Losses: ${loseCount}`;
}

function checkForWinner() {
    if (winCount === 5) {
        
        alert('Congratulations! You won the game!');
        resetGame();
    } else if (loseCount === 5) {
        
        alert('Game Over! You lost the game.');
        resetGame();
    }
}

function resetGame() {
    winCount = 0;
    loseCount = 0;
}

function playerSelection(choice) {
    const computerSelection = getComputerChoice();
    const result = playRound(choice, computerSelection);
    updateResult(result);

    checkForWinner();
}
