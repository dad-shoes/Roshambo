let getRandInt = (max) => Math.floor(Math.random() * max);
const rock = "Rock";
const paper = "Paper";
const scissors = "Scissors";

let getComputerChoice = () => {
    let rand = getRandInt(3);

    switch (rand) {
        case 0:
            return rock;
            break;
        case 1:
            return paper;
            break;
        case 2:
            return scissors;
            break;
    }
};

let getPlayerChoice = () => {
    let answer = prompt("Rock, Paper, or Scissors?").toLowerCase();

    switch (answer) {
        case "rock":
            return rock;
            break;
        case "paper":
            return paper;
            break;
        case "scissors":
            return scissors;
            break;
    }
};

let playRound = () => {
    let cpc = getComputerChoice();
    let plc = getPlayerChoice();
    let msg;

    switch (plc) {
        case "Rock":
            if (cpc == "Rock") {
                return "It's a tie. Rocks all.";
            } else if (cpc == "Paper") {
                return "You Lose. Paper beats Rock.";
            } else {
                return "You Win. Rock beats Scissors.";
            }
            break;
        case "Paper":
            if (cpc == "Paper") {
                return "It's a tie. Paper all.";
            } else if (cpc == "Scissors") {
                return "You Lose. Scissors beats Paper.";
            } else {
                return "You Win. Paper beats Rock.";
            }

            break;
        case "Scissors":
            if (cpc == "Scissors") {
                return "It's a tie. Rocks all.";
            } else if (cpc == "Rock") {
                return "You Lose. Rock beats Scissors.";
            } else {
                return "You Win. Scissors beats Paper.";
            }
            break;
    }
};

let game = () => {
    let playerScore = 0;
    let computerScore = 0;

    while (playerScore < 5 || computerScore < 5) {
        let outcome = playRound();

        if (playerScore == 5) {
            console.log("Player Wins Game!");
            return "Player Wins Game!";
        } else if (computerScore == 5) {
            console.log("Computer destroyed you!");
            return "Computer Destroyed You!";
        } else {
            if (
                outcome == "You Win. Scissors beats Paper." ||
                outcome == "You Win. Paper beats Rock." ||
                outcome == "You Win. Rock beats Scissors."
            ) {
                playerScore++;
                console.log("Winner", playerScore, computerScore);
            } else if (outcome == "It's a tie.") {
                console.log("Tie", playerScore, computerScore);
            } else {
                computerScore++;
                console.log("Loser", playerScore, computerScore);
            }
        }
    }
};
