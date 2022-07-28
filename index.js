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

    console.log(plc);
    console.log(cpc);

    switch (plc) {
        case "Rock":
            if (cpc == "Rock") {
                console.log("It's a tie. Rocks all.");
            } else if (cpc == "Paper") {
                console.log("You Lose. Paper beats Rock.");
            } else {
                console.log("You Win. Rock beats Scissors.");
            }
            break;
        case "Paper":
            if (cpc == "Paper") {
                console.log("It's a tie. Paper all.");
            } else if (cpc == "Scissors") {
                console.log("You Lose. Scissors beats Paper.");
            } else {
                console.log("You Win. Paper beats Rock.");
            }

            break;
        case "Scissors":
            if (cpc == "Scissors") {
                console.log("It's a tie. Rocks all.");
            } else if (cpc == "Rock") {
                console.log("You Lose. Rock beats Scissors.");
            } else {
                console.log("You Win. Scissors beats Paper.");
            }
            break;
    }
};
