
let options = ["Rock", "Paper", "Scissors"];

let playerScore = 0;
let computerScore = 0;
let isPlaying = true;


// Creating elements and adding them to DOM

const buttons = Array.from(document.querySelectorAll("button"));
const scoreboard = document.createElement("div");
const score = document.createElement("p");
const message = document.createElement("p");

scoreboard.id = "scoreboard";
score.textContent = "0:0"
message.textContent = "Click the buttons to start the game"

scoreboard.appendChild(score);
scoreboard.appendChild(message);
document.body.appendChild(scoreboard);




// Gamelogic

function random(input) {
    // generates random integer in range of 0 < input
    return Math.floor(Math.random() * input);
}

function computerPlay() {
    let option = random(3);
    return options[option];
}


function decideWinner(computerSelection, playerSelection) {
    let didWin;
    if (playerSelection.toLowerCase() == "rock") {
        if (computerSelection == "Paper") {
            didWin = false;
        } else if (computerSelection == "Scissors") {
            didWin = true;
        }
    }
    if (playerSelection.toLowerCase() == "paper") {
        if (computerSelection == "Scissors") {
            didWin = false;
        } else if (computerSelection == "Rock") {
            didWin = true;
        }
    }
    if (playerSelection.toLowerCase() == "scissors") {
        if (computerSelection == "Rock") {
            didWin = false;
        } else if (computerSelection == "Paper") {
            didWin = true;
        }
    }
    return didWin;
} // end of decideWinner()



function playRound(computerSelection, playerSelection) {

    // didWin = if player did win
    let didWin;
    let output = "";

    didWin = decideWinner(computerSelection, playerSelection);

    if (didWin) {
        output = `You Win! ${playerSelection} beats ${computerSelection}.`;
        playerScore++;
    } else if (didWin === false) {
        output = `You Lose! ${computerSelection} beats ${playerSelection}.`;
        computerScore++;
    } else {
        output = "It's a draw! Nobody wins!";
    }

    score.textContent = `${playerScore}:${computerScore}`;


    if (playerScore >= 5 || computerScore >= 5) {
        isPlaying = false;

        if (playerScore > computerScore) {
            output = output + "\n" + "You win the game!";
        } else {
            output = output + "\n" + "You lost the game!";
        }
    }


    message.textContent = output;

    return didWin;
} // end of playRound() 


buttons.forEach(button => button.addEventListener("click", (e) => {
    const selection = e.target.className;
    if (isPlaying) playRound(computerPlay(), selection);
}));




/**
 * function game(gamesCount = 1) {

    let roundsWon = 0,
        roundsLost = 0,
        output = "";

    for (let i = 0; i < gamesCount; i++) {
        let didWin = play();
        if (didWin)
            roundsWon++;
        if (didWin === false)
            roundsLost++;
        // if didWin = undefined, noone scores
    }

    if (roundsWon > roundsLost)
        output = "won"
    else if (roundsWon < roundsLost)
        output = "lost"
    else
        output = "tied";

    output = `You ${output} the game with an end-score of
                    ${roundsWon}:${roundsLost}!`;
    console.log(output);
} // end of game()
 */
