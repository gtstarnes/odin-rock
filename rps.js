const gameItems = ['ROCK', 'PAPER', 'SCISSORS'];

const getPlayerChoice = () => {
    const playerChoice = prompt("ROCK, PAPER, or SCISSORS. What do you choose").toUpperCase();
    if (gameItems.includes(playerChoice)) {
        return playerChoice;
    } else {
        alert("Invalid Selection");
    };
}


const getComputerChoice = () => {
    let gameIndex = Math.floor(Math.random()*gameItems.length);
    return gameItems[gameIndex];
}

const playRound = (playerSelection, computerSelection) => {
    if (playerSelection === computerSelection) {
        return "Tie Game";
    } else if (playerSelection === "ROCK" && computerSelection === "SCISSORS") {
        return "The Player Wins";
    } else if (playerSelection === "SCISSORS" && computerSelection === "PAPER") {
        return "The Player Wins";
    } else if (playerSelection === "PAPER" && computerSelection === "ROCK") {
        return "The Player Wins";
    } else {
        return "The Computer Wins";
    }
}