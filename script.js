console.log("script.js loaded");

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const choice = getRandomInt(choices.length);
    return choices[choice];
}