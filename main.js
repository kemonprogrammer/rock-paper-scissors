let options = ["Rock", "Paper", "Scissors"];

play();

function play() {
    playRound(computerPlay(), playerPlay());
}

function random(input) {
    return Math.floor(Math.random() * input);
}

function computerPlay() {
    let option = random(3);
    return options[option];
}

function playerPlay() {
    return prompt(`Choose "Rock", "Paper" or "Scissors"`);
}

function playRound(computerSelection, playerSelection) {


    let output = "";

    // Boolean didWin if player won / not / draw
    let didWin;


    if (playerSelection.toLowerCase() == computerSelection.toLowerCase()) {


        // if draw
        output = "It's a draw! Nobody wins!";


    } else if (playerSelection.toLowerCase() == "rock") {


        if (computerSelection == "Paper") {
            didWin = false;
            output = `${computerSelection} beats ${playerSelection}!`;


        } else if (computerSelection == "Scissors") {
            didWin = true;
            output = `${playerSelection} beats ${computerSelection}!`;
        }



    } else if (playerSelection.toLowerCase() == "paper") {


        if (computerSelection == "Scissors") {
            didWin = false;
            output = `${computerSelection} beats ${playerSelection}!`;


        } else if (computerSelection == "Rock") {
            didWin = true;
            output = `${playerSelection} beats ${computerSelection}!`;
        }



    } else if (playerSelection.toLowerCase() == "scissors") {


        if (computerSelection == "Rock") {
            didWin = false;
            output = `${computerSelection} beats ${playerSelection}!`;


        } else if (computerSelection == "Paper") {
            didWin = true;
            output = `${playerSelection} beats ${computerSelection}!`;
        }



    } else {

        // if none of the options match
        output = "Invalid choice!";

    } // end of if-else


    if (didWin) {
        output = `You Win! ${output}`;
    }
    if (didWin === false) {
        output = `You Lose! ${output}`;
    }


    console.log(output);
}