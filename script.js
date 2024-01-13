// Computer
const compChoices = ['rock', 'paper', 'scissors'];

function randomlyChosenOption(compChoices) {
    const randomIndex = Math.floor(Math.random() * compChoices.length);

    const randomCompChoice = compChoices[randomIndex];

    return randomCompChoice;
}

const getComputerChoice = randomlyChosenOption(compChoices);

// User

const userChoicePrompt = prompt(
    'Enter your choice (rock, paper, or scissors): '
);
const validChoices = ['rock', 'paper', 'scissors'];

const userChoices = userChoicePrompt;

function lowerCaseUserChoice(userChoices) {
    userChoices = userChoices.toLowerCase();

    return userChoices;
}

const getUserChoice = lowerCaseUserChoice(userChoices);

// Game Logic
function playRound(playerSelection, computerSelection) {
    if (
        (getUserChoice === 'rock' && getComputerChoice === 'scissors') ||
        (getUserChoice === 'paper' && getComputerChoice === 'rock') ||
        (getUserChoice === 'scissors' && getComputerChoice === 'paper')
    ) {
        return 'You win!';
    } else if (getUserChoice === getComputerChoice) {
        return "It's a tie!";
    } else if (!validChoices.includes(getUserChoice)) {
        return 'Invalid choice. Please choose from: rock, paper, or scissors.';
    } else {
        return 'You lose!';
    }
}

playRound(getUserChoice, getComputerChoice);
