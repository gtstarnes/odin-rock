
const gameItems = ['ROCK', 'PAPER', 'SCISSORS'];

function getPlayerChoice() {
    let playerChoice = prompt("ROCK, PAPER, or SCISSORS: What do you choose??");
    playerChoice = playerChoice.toUpperCase();
    if (gameItems.includes(playerChoice)) {
        return playerChoice;
    } else {
        alert("Invalid Selection");
    }
};


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

function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        let game = playRound(getPlayerChoice(), getComputerChoice());
        console.log(game);
        if (game === "The Player Wins") {
            playerScore++
        } else if (game === "The Computer Wins") {
            computerScore++;
        } 
    }
    if (playerScore > computerScore) {
        console.log('The Player Wins the Game');
    } else if (computerScore > playerScore) {
        console.log('The Computer wins the game')
    } else {
        console.log("It's a Draw");
    };
}

game();