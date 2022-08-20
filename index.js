const announcer = document.querySelector(".announcer");
const pScore = document.querySelector(".pScore");
const cScore = document.querySelector(".cScore");
const startBtn = document.querySelector(".startBtn");
const btnDiv = document.querySelector(".buttons");
let playerScore = 0;
let computerScore = 0;
const resetBtn = document.createElement("button");
resetBtn.textContent = "Play Again";
resetBtn.addEventListener("click", (e) => {
    resetBtn.remove();
    btnDiv.append(rockBtn);
    btnDiv.append(paperBtn);
    btnDiv.append(scissorsBtn);
    playerScore = 0;
    computerScore = 0;
    pScore.textContent = `${playerScore}`;
    cScore.textContent = `${computerScore}`;
    announcer.textContent = "You know what to do ;)";
});

let getRandInt = (max) => Math.floor(Math.random() * max);

let getComputerChoice = () => {
    let rand = getRandInt(3);

    switch (rand) {
        case 0:
            return "Rock";
            break;
        case 1:
            return "Paper";
            break;
        case 2:
            return "Scissors";
            break;
    }
};

let playRound = (plc, cpc) => {
    switch (plc) {
        case "Rock":
            if (cpc == "Rock") {
                announcer.textContent = "It's a tie. Rocks all.";
            } else if (cpc == "Paper") {
                computerScore++;
                announcer.textContent = "You Lose. Paper beats Rock.";
            } else {
                playerScore++;
                announcer.textContent = "You Win. Rock beats Scissors.";
            }
            break;
        case "Paper":
            if (cpc == "Paper") {
                announcer.textContent = "It's a tie. Paper all.";
            } else if (cpc == "Scissors") {
                computerScore++;
                announcer.textContent = "You Lose. Scissors beats Paper.";
            } else {
                playerScore++;
                announcer.textContent = "You Win. Paper beats Rock.";
            }

            break;
        case "Scissors":
            if (cpc == "Scissors") {
                announcer.textContent = "It's a tie. Rocks all.";
            } else if (cpc == "Rock") {
                computerScore++;
                announcer.textContent = "You Lose. Rock beats Scissors.";
            } else {
                playerScore++;
                announcer.textContent = "You Win. Scissors beats Paper.";
            }
            break;
    }
};

let game = () => {
    // checks for winner
    pScore.textContent = `${playerScore}`;
    cScore.textContent = `${computerScore}`;

    if (playerScore == 5) {
        btnDiv.append(resetBtn);
        rockBtn.remove();
        paperBtn.remove();
        scissorsBtn.remove();
        announcer.textContent = "Player Wins Game!";
    } else if (computerScore == 5) {
        btnDiv.append(resetBtn);
        rockBtn.remove();
        paperBtn.remove();
        scissorsBtn.remove();
        announcer.textContent = "Computer destroyed you!";
    }
};

let createChoiceButton = (btnName, btnText) => {
    btnName = document.createElement("button");
    btnName.setAttribute("class", `${btnText.toLowerCase()}Btn`);
    btnName.textContent = `${btnText}`;
    btnName.addEventListener("click", (e) => {
        plc = `${btnText}`;
        cpc = getComputerChoice();
        playRound(plc, cpc);
        game();
    });
    return btnName;
};

const rockBtn = createChoiceButton("rockBtn", "Rock");
const paperBtn = createChoiceButton("paperBtn", "Paper");
const scissorsBtn = createChoiceButton("scissorsBtn", "Scissors");

startBtn.addEventListener("click", (e) => {
    startBtn.remove();
    btnDiv.append(rockBtn);
    btnDiv.append(paperBtn);
    btnDiv.append(scissorsBtn);
});
