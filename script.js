// Computer
const compChoices = ['rock', 'paper', 'scissors'];
const randomlyChosenOption = getComputerChoice(compChoices);

function getComputerChoice(compChoices) {
    const randomIndex = Math.floor(Math.random() * compChoices.length);

    const randomCompChoice = compChoices[randomIndex];

    return randomCompChoice;
}

// User
function getUserChoice() {
    const userChoice = prompt('Enter your choice (rock, paper, or scissors): ');

    userChoice = userChoice.toLowerCase();

    if (
        userChoice === 'rock' ||
        userChoice === 'paper' ||
        userChoice === 'scissors'
    ) {
        return userChoice;
    } else {
        alert('Invalid choice. Please enter rock, paper, or scissors.');
        return getUserChoice();
    }
}

// Game Logic
function playRound(playerSelection, computerSelection) {}

playRound('paper', getComputerChoice);
