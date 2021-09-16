const h2 = document.getElementById('round');
const h3 = document.querySelector('h3');
const pScr = document.getElementById('player');
const cScr = document.getElementById('computer');
const rock = document.getElementById('btn-rock');
const paper = document.getElementById('btn-paper');
const scissors = document.getElementById('btn-scissors');

let p = 0
let c = 0 

function computerPlay() {
    let num = Math.floor(Math.random() * 4)
    if (num === 1) {
        return 'rock'
    } else if (num === 2) {
        return 'paper'
    } else {
        return 'scissors'
    }
};

function flow(pSel, cSel) {
    if (p <= 4 && c <= 4) {
    switch (pSel) {
        case 'rock': 
            if (cSel === 'rock'){
                h3.textContent = 'Computer Picked Rock.';
                h2.textContent = 'Tie!';
            } else if (cSel === 'paper') {
                h3.textContent = 'Computer Picked Paper.';
                c += 1;
                pScr.textContent = `Player Score: ${p}`;
                cScr.textContent = `Computer Score: ${c}`;
                h2.textContent = 'Paper Beats Rock, You Lose!';
            } else {
                h3.textContent = 'Computer Picked Scissors.';
                p += 1;
                pScr.textContent = `Player Score: ${p}`;
                cScr.textContent = `Computer Score: ${c}`;
                h2.textContent = 'Rock Beats Scissors, You Win!';
            }
            break;
        case 'paper':
            if (cSel === 'rock'){
                h3.textContent = 'Computer Picked Rock';
                p += 1;
                pScr.textContent = `Player Score: ${p}`;
                cScr.textContent = `Computer Score: ${c}`;
                h2.textContent = 'Paper Beats Rock, You Win!';
            } else if (cSel === 'paper') {
                h3.textContent = 'Computer Picked Paper.';
                h2.textContent = 'Tie!';
            } else {
                h3.textContent = 'Computer Picked Scissors.';
                c += 1;
                pScr.textContent = `Player Score: ${p}`;
                cScr.textContent = `Computer Score: ${c}`;
                h2.textContent = 'Scissors Beats Paper, You Lose!';
            }            
            break;
        case 'scissors':
            if (cSel === 'rock'){
                h3.textContent = 'Computer Picked Rock';
                c += 1;
                pScr.textContent = `Player Score: ${p}`;
                cScr.textContent = `Computer Score: ${c}`;
                h2.textContent = 'Rock Beats Scissors, You Lose!';
            } else if (cSel === 'paper') {
                h3.textContent = 'Computer Picked Paper.';
                p += 1;
                pScr.textContent = `Player Score: ${p}`;
                cScr.textContent = `Computer Score: ${c}`;
                h2.textContent = 'Scissors Beats Paper, You Win!';
            } else {
                h3.textContent = 'Computer Picked Scissors.';
                h2.textContent = 'Tie!';
            }            
            break;
    }
}
};

function winner() {
    if(p === 5) {
        h2.textContent = 'Player Wins';
        h3.textContent = 'Computer Loses';
        pScr.classList.add('winner');
        cScr.classList.add('loser');
    } else if(c === 5) {
        h2.textContent = 'Computer Wins';
        h3.textContent = 'Player Loses';
        cScr.classList.add('winner');
        pScr.classList.add('loser');
    };
}

function game() {
    rock.addEventListener('click', (e) => {
        let pSel = 'rock';
        let cSel = computerPlay();
        flow(pSel,cSel);
        winner();
    });
    paper.addEventListener('click', (e) => {
        let pSel = 'paper';
        let cSel = computerPlay();
        flow(pSel,cSel);
        winner();
    });
    scissors.addEventListener('click', (e) => {
        let pSel = 'scissors';
        let cSel = computerPlay();
        flow(pSel,cSel);
        winner();
    });
};


game();