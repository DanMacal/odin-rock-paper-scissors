const compChoices = ['Rock', 'Paper', 'Scissors'];
const randomlyChosenOption = getComputerChoice(compChoices);

function getComputerChoice(compChoices) {
    const randomIndex = Math.floor(Math.random() * compChoices.length);
    const randomCompChoice = compChoices[randomIndex];
    return randomCompChoice;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection > computerSelection) {
        console.log('You win!');
    } else if ((playerSelection = computerSelection)) {
        console.log('A tie! Go again.');
    } else {
        console.log('You lose!');
    }
}

playRound(0, getComputerChoice);
