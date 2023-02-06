
//Creates game selections
const gameItems = ['ROCK', 'PAPER', 'SCISSORS'];

//Prompts user for choice, converts it to uppercase, checks if input is within game parameters, RETURNS player choice
function getPlayerChoice() {
    let playerChoice = prompt("ROCK, PAPER, or SCISSORS: What do you choose??");
    playerChoice = playerChoice.toUpperCase();
    if (gameItems.includes(playerChoice)) {
        return playerChoice;
    } else {
        alert("Invalid Selection. Round goes to the Comupter");
    }
};

//Computes a random choice for the Computer
const getComputerChoice = () => {
    let gameIndex = Math.floor(Math.random()*gameItems.length);
    return gameItems[gameIndex];
}

//Compares player choice and comupter choice and determines winner of round 
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


//The Game itself. Outputs winner of each round and the final winner of the game
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