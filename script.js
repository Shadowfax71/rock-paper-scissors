/*  1 - Make the computer choose randomly between rock, paper or scissors.
        - If the result is between 0 and 1, then it's rock.
        - If it's between 1 and 2, then it's paper.
        - If it's between 2 and 3, then it's scissors
*/
function getComputerChoice() {
    let computerChoice = Math.random() * 3;
    if (computerChoice <= 1) {
        computerChoice = "Rock";
    } else if (computerChoice <= 2) {
        computerChoice = "Paper";
    } else {
        computerChoice = "Scissors";
    }
    return computerChoice;
}


//  2 - Make the user choose between rock, paper or scissors.
function getHumanChoice() {
        let humanChoice = prompt("Please choose Rock, Paper or Scissors");
        if (humanChoice === "Rock") {
                console.log("Rock");
        } else if (humanChoice === "Paper") {
                console.log("Paper");
        } else if (humanChoice === "Scissors") {
                console.log("Scissors")
        } else {
                console.log("Invalid choice");
        }
        return humanChoice;
}


//  3 - Keep track of the player score and computer score, both starting at 0.
let humanScore = 0;
let computerScore = 0;
/*  4 - Play a round:
        - Compare user and computer choice;
        - If there is a winner, announce the winner of the round then increment winner score by 1;
        - If there is no winner, no one gets his score incremented.

*/
function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();
        computerChoice = computerChoice.toLowerCase();

        if ((humanChoice === computerChoice)) {
                return "It's a draw!";
                
        } else if ((humanChoice === "rock") && (computerChoice === "paper")) {
                computerScore++;
                return "You lose!";

        } else if ((humanChoice === "rock") && (computerChoice === "scissors")) {
                humanScore++;
                return "You win!";

        } else if ((humanChoice === "paper") && (computerChoice === "rock")) {
                humanScore++;
                return "You win!";

        } else if ((humanChoice === "paper") && (computerChoice ==="scissors")) {
                computerScore++;
                return "You lose!";

        } else if ((humanChoice === "scissors") && (computerChoice === "rock")) {
                computerScore++;
                return "You lose!";

        } else if ((humanChoice === "scissors") && (computerChoice === "paper")) {
                humanScore++;
                return "You win!";
        }

}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

//  5 - Play 5 rounds.

