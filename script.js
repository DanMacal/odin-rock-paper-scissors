// Computer
const compChoices = ['rock', 'paper', 'scissors'];

function randomlyChosenOption(compChoices) {
    const randomIndex = Math.floor(Math.random() * compChoices.length);
    const randomCompChoice = compChoices[randomIndex];
    return randomCompChoice;
}

const getComputerChoice = randomlyChosenOption(compChoices);

// User
function askUser() {
    const userChoicePrompt = prompt(
        'Enter your choice (rock, paper, or scissors): '
    ).toLowerCase();
    const validChoices = ['rock', 'paper', 'scissors'];

    if (!validChoices.includes(userChoicePrompt)) {
        console.log(
            'Invalid choice. Please choose from: rock, paper, or scissors.'
        );
        return askUser();
    }

    return userChoicePrompt;
}

const getUserChoice = askUser();

// Game Logic
function playRound(playerSelection, computerSelection) {
    if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
        return 'You won the round!';
    } else if (playerSelection === computerSelection) {
        return "It's a tie round!";
    } else {
        return 'You lost the round!';
    }
}

const roundResult = playRound(getUserChoice, getComputerChoice);
console.log(roundResult);

//Game Function
function game() {
    let userWins = 0;
    let compWins = 0;

    for (let round = 1; round <= 5; round++) {
        const userChoice = askUser();
        const computerChoice = randomlyChosenOption(compChoices);

        const roundResult = playRound(userChoice, computerChoice);
        console.log(`Round ${round}: ${roundResult}`);

        if (roundResult.includes('won')) {
            userWins++;
        } else if (roundResult.includes('lost')) {
            compWins++;
        }

        console.log(`Current Score - User: ${userWins}, Computer: ${compWins}`);
    }

    if (userWins > compWins) {
        return 'Congratulations! You won the game!';
    } else if (userWins < compWins) {
        return 'Sorry, you lost the game.';
    } else {
        return "It's a tie! The game ended without a clear winner.";
    }
}

// Example
const gameResult = game();
console.log(gameResult);
