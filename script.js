{
    const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            onPlayClick(button.id);
        });
    });
}

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

function describeResult(playerChoice, computerChoice, verdict) {
    switch (verdict) {
        case 0:
            return 'Tie! Both players chose ' + playerChoice;
        case 1:
            return 'You win! ' + playerChoice + ' beats ' + computerChoice;
        case -1:
            return 'You lose! ' + playerChoice + ' loses to ' + computerChoice;
    }
}

function playRound(playerChoice, computerChoice) {
    const p = playerChoice.toLowerCase();
    const c = computerChoice.toLowerCase();
    return gameVerdict(p, c);
}

function onPlayClick(playerChoice) {
    const computerChoice = getComputerChoice();
    const verdict = playRound(playerChoice, computerChoice);
    console.log(describeResult(playerChoice, computerChoice, verdict));
}

function game() {
    const stats = {
        wins: 0,
        losses: 0,
        ties: 0,
    };
    for (let i = 0; i < 5; i++) {
        const playerChoice = prompt('Choose rock, paper, or scissors.');
        const computerChoice = getComputerChoice();
        const verdict = playRound(playerChoice, computerChoice);
        console.log(describeResult(playerChoice, computerChoice, verdict));
        switch (verdict) {
            case 0:
                stats.ties += 1;
                break;
            case 1:
                stats.wins += 1;
                break;
            case -1:
                stats.losses += 1;
                break;
        }
        console.table(stats);
    }
    if (stats.wins > stats.losses) {
        console.log('You won the game!');
    } else if (stats.wins < stats.losses) {
        console.log('You lost the game!');
    } else {
        console.log('You tied the game!');
    }
}