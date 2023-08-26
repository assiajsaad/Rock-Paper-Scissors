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

function playRound(playerChoice, computerChoice) {
    let result;
    if (playerChoice === computerChoice) {

        result = `It's Draw! ${playerChoice} is equal to ${computerChoice}`;

    } else if (playerChoice === "Rock" && computerChoice === "Paper") {

        result = `You Lose ! ${computerChoice} beats ${playerChoice}`;

    } else if (playerChoice === "Paper" && computerChoice === "Scissors") {

        result = `You Lose ! ${computerChoice} beats ${playerChoice}`;
    }
    else if (playerChoice === "Scissors" && computerChoice === "Rock") {

        result = `You Lose ! ${computerChoice} beats ${playerChoice}`;

    } else if (playerChoice === "Paper" && computerChoice === "Rock") {

        result = `You Win ! ${playerChoice} beats ${computerChoice}`;

    } else if (playerChoice === "Scissors" && computerChoice === "Paper") {

        result = `You Win ! ${playerChoice} beats ${computerChoice}`;
    }
    else if (playerChoice === "Rock" && computerChoice === "Scissors") {

        result = `You Win ! ${playerChoice} beats ${computerChoice}`;
    }
    // console.log("Player:"+ playerChoice);
    // console.log("CPU: "+ computerChoice);
    // console.log(result);
    return result;

}

function game() {
    for (let i = 0; i < 5; i++) {

        let playerChoice = playerSelection();
        let computerChoice = getComputerChoice();
        console.log(playRound(playerChoice, computerChoice));
    }
}

game();