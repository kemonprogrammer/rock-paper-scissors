
let options = ["Rock", "Paper", "Scissors"];


// game();


function random(input) {
    // generates random integer from 0 to input
    return Math.floor(Math.random() * input);
}


function computerPlay() {
    let option = random(3);
    return options[option];
}


function playerPlay() {
    return prompt(`Choose "Rock", "Paper" or "Scissors"`);
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

    // Boolean didWin if player won / not / draw
    let didWin;
    let output = "";

    didWin = decideWinner(computerSelection, playerSelection);

    if (didWin)
        output = `You Win! ${playerSelection} beats ${computerSelection}`;

    if (didWin === false)
        output = `You Lose! ${computerSelection} beats ${playerSelection}`;

    // if didWin = undefined then it's a 
    // draw or an invalid player-choice
    if (didWin === undefined) {
        if (playerSelection.toLowerCase() == computerSelection.toLowerCase()) {
            // if draw
            output = "It's a draw! Nobody wins!";
        } else {
            output = "Invalid choice!";
        }
    }

    console.log(output);
    return didWin;
} // end of playRound() 



function play() {
    return playRound(computerPlay(), playerPlay());
}


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
