let getRandInt = (max) => Math.floor(Math.random() * max);

let getComputerChoice = () => {
    let rock = "rock";
    let paper = "Paper";
    let scissors = "Scissors";
    let rand = getRandInt(3);
    if (rand === 0) {
        console.log(rock);
        return rock;
    } else if (rand === 1) {
        console.log(paper);
        return paper;
    } else if (rand === 2) {
        console.log(scissors);
        return scissors;
    }
};
