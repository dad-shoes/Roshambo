let getRandInt = (max) => Math.floor(Math.random() * max);
const rock = "Rock";
const paper = "Paper";
const scissors = "Scissors";

let getComputerChoice = () => {
    let rand = getRandInt(3);

    switch (rand) {
        case 0:
            console.log(rock);
            return rock;
            break;
        case 1:
            console.log(paper);
            return paper;
            break;
        case 2:
            console.log(scissors);
            return scissors;
            break;
    }
};

let getPlayerChoice = () => {
    let answer = prompt("Rock, Paper, or Scissors?").toLowerCase();

    switch (answer) {
        case "rock":
            console.log(rock);
            break;
        case "paper":
            console.log(paper);
            break;
        case "scissors":
            console.log(scissors);
            break;
    }
};

// cpc = computer choice
let cpc = getComputerChoice();
// plc = player choice
let plc = getPlayerChoice();

let playRound = (plc, cpc) => {};
