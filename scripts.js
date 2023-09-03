function getComputerChoice() {
    const rndInt = Math.floor(Math.random() * 3) + 1
    let result;
    switch (rndInt) {
        case 1:
            result = "Rock";
            break;
        case 2:
            result = "Paper";
            break;
        case 3:
            result = "Scissors";
            break;
    }
    return result;
}

function upperChar(string) {
    string = string.toLowerCase();
    string = string.charAt(0).toUpperCase() + string.slice(1);
    return string;
}

function playerSelection() {
    let playerChoice = prompt("Enter your choice");
    playerChoice = upperChar(playerChoice);
    return playerChoice;
}

function addScore(player, computer) {
    playerScore += player;
    computerScore += computer;

    let pScore = document.querySelector('#playerScore');
    let cScore = document.querySelector('#computerScore');

    pScore.textContent = playerScore;
    cScore.textContent = computerScore;
}
function canContinue() {
    if (playerScore >= 5 || computerScore >= 5) {
        return false;
    }
}

function playRound(playerChoice, computerChoice) {
    let result;

    if (playerChoice === computerChoice) {
        addScore(0, 0);
        result = `It's Draw! ${playerChoice} is equal to ${computerChoice}`;

    } else if (playerChoice === "Rock" && computerChoice === "Paper") {
        addScore(0, 1);
        result = `You Lose ! ${computerChoice} beats ${playerChoice}`;

    } else if (playerChoice === "Paper" && computerChoice === "Scissors") {
        addScore(0, 1);
        result = `You Lose ! ${computerChoice} beats ${playerChoice}`;
    }
    else if (playerChoice === "Scissors" && computerChoice === "Rock") {
        addScore(0, 1);
        result = `You Lose ! ${computerChoice} beats ${playerChoice}`;

    } else if (playerChoice === "Paper" && computerChoice === "Rock") {
        addScore(1, 0);
        result = `You Win ! ${playerChoice} beats ${computerChoice}`;

    } else if (playerChoice === "Scissors" && computerChoice === "Paper") {
        addScore(1, 0);
        result = `You Win ! ${playerChoice} beats ${computerChoice}`;
    }
    else if (playerChoice === "Rock" && computerChoice === "Scissors") {
        addScore(1, 0);
        result = `You Win ! ${playerChoice} beats ${computerChoice}`;
    }

    return result;

}

function game() {
    for (let i = 0; i < 5; i++) {

        let playerChoice = playerSelection();
        let computerChoice = getComputerChoice();
        console.log(playRound(playerChoice, computerChoice));
    }
}

var playerScore = 0;
var computerScore = 0;

let pScore = document.querySelector('#playerScore');
let cScore = document.querySelector('#computerScore');

pScore.textContent = playerScore;
cScore.textContent = computerScore;

let buttons = document.querySelectorAll('.choice');

buttons.forEach((button) => {
    button.addEventListener('click', () => {

        let result = document.querySelector('.result');

        result.innerHTML = playRound(button.textContent, getComputerChoice());
    })
})

let reset = document.querySelector("#reset");
reset.addEventListener('click', () => {
    playerScore = 0;
    computerScore = 0;

    pScore.innerHTML = playerScore;
    cScore.innerHTML = computerScore;

    let result = document.querySelector('.result');

    result.innerHTML = '';
})

