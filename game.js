let winCount = 0;
let loseCount = 0;

let winSound;
let loseSound;

document.addEventListener('DOMContentLoaded', function () {
    winSound = document.getElementById('winSound');
    loseSound = document.getElementById('loseSound');

    
    checkForWinner();
});

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    const computerSelection = choices[randomIndex];


    const computerSelectionImg = document.getElementById('computer-selection-img');
    computerSelectionImg.src = `./img/${computerSelection}.png`;

    return computerSelection;
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
        resetGame();
        Swal.fire({
            title: 'Congratulations!',
            text: 'You won the game!',
            icon: 'success',
        });
        playSound(winSound);
    } else if (loseCount === 5) {
        resetGame();
        Swal.fire({
            title: 'Game Over!',
            text: 'You lost the game.',
            icon: 'error',
        })
        playSound(loseSound);
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

function playSound(sound) {
    if (sound && sound.readyState === 4) {
        sound.currentTime = 0;
        sound.play().then(() => {
        }).catch((error) => {
            console.error('Autoplay was prevented:', error);
        });
    }
}