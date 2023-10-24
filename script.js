console.log("script.js loaded");

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const choice = getRandomInt(choices.length);
    return choices[choice];
}

function gameVerdict(a, b) {
    switch (a) {
        case 'rock':
            switch (b) {
                case 'rock':
                    return 0;
                case 'paper':
                    return -1;
                case 'scissors':
                    return 1;
            }
            break;
        case 'paper':
            switch (b) {
                case 'rock':
                    return 1;
                case 'paper':
                    return 0;
                case 'scissors':
                    return -1;
            }
            break;
        case 'scissors':
            switch (b) {
                case 'rock':
                    return 1;
                case 'paper':
                    return 0;
                case 'scissors':
                    return -1;
            }
            break;
    }
    console.error(`gameVerdict: Invalid input ${a} ${b}`);
}

function playRound(playerChoice, computerChoice) {
    const p = playerChoice.toLowerCase();
    const c = computerChoice.toLowerCase();
    switch (gameVerdict(p, c)) {
        case 0:
            return 'Tie! Both players chose ' + p;
        case 1:
            return 'You win! ' + p + ' beats ' + c;
        case -1:
            return 'You lose! ' + p + ' loses to ' + c;
    }
}