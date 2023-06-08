function getComputerChoice () {
    // Get random number from 0 to 3
    let ranint = Math.floor(Math.random() * 3);

    if (ranint === 0) {
        return "rock";
    } else if (ranint === 1) {
        return "paper";
    } else if (ranint === 2) {
        return "scissors";
    }
}

function playRound (playerSelection, computerSelection) {
    const player = playerSelection.toLowerCase();
    const computer = computerSelection.toLowerCase();

    switch (player) {
        case "rock":
            switch (computer) {
                case "rock":
                    return "draw";
                case "paper":
                    return "loss";
                case "scissors":
                    return "win"
            }
        case "paper":
            switch (computer) {
                case "rock":
                    return "win";
                case "paper":
                    return "draw";
                case "scissors":
                    return "loss";
            }
            break;
        case "scissors":
            switch (computer) {
                case "rock":
                    return "loss";
                case "paper":
                    return "win";
                case "scissors":
                    return "draw";
            }
    }
}

function announceOutcome (outcome, playerSelection, computerSelection) {
    let p1 = playerSelection.charAt(0);
    const player = p1.toUpperCase() + playerSelection.slice(1).toLowerCase();
    let c1 = computerSelection.charAt(0);
    const computer = c1.toUpperCase() + computerSelection.slice(1);

    switch (outcome) {
        case "win":
            return "You won! " + player + " beats " + computer + "!";
        case "loss":
            return "You lost! " + player + " loses to " + computer + "!";
        case "draw":
            return "Draw! " + player + " draws with " + computer + "!";
        default:
            return "Incorrect input...";
    }
}


const buttons = document.querySelectorAll("#buttons button");
buttons.forEach((button) => {
    button.addEventListener('click', round)
})

function round(e) {
    const button = e.target;
    // button now holds node of what button was pressed
    const choice = button.textContent.toLowerCase();
    const computer = getComputerChoice();
    const outcome = playRound(choice, computer);

    const playerScore = document.querySelector('#player .score');
    const enemyScore = document.querySelector('#enemy .score');
    const outcomeDiv = document.querySelector('#score #outcome');

    // Update Score Board
    if (outcome === "win") {
        playerScore.textContent = Number(playerScore.textContent) + 1;

    } else if (outcome === "loss") {
        enemyScore.textContent = Number(enemyScore.textContent) + 1;
    }

    // Update outcome
    outcomeDiv.textContent = announceOutcome(outcome, choice, computer);

    // Check for if there is a win or loss
    // If there is a winner, we need to add a popup!
    if (playerScore.textContent == 5) {
        outcomeDiv.textContent = "Let's go!!! You won!!!";
    } else if (enemyScore.textContent == 5) {
        outcomeDiv.textContent = "I can't believe you lost...";
    }


}

/* 
function game () {
    let playerWins = 0;
    let computerWins = 0;

    for (let i = 0; i < 5; i++) {
        let player = prompt("What is your move?");

        const computer = getComputerChoice();
        const outcome = playRound(player, computer);
        if (outcome === "win") {
            playerWins++;
        } else if (outcome === "loss") {
            computerWins++;
        }
        console.log(announceOutcome(outcome, player, computer));
        console.log("Current score: " + playerWins + " - " + computerWins);
    }

    if (playerWins > computerWins) {
        console.log("Let's go!!! You won!!!");
    } else if (playerWins === computerWins) {
        console.log("Hmmm... You drew...");
    } else {
        console.log("I can't believe you lost...");
    }

}
*/
