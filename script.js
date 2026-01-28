/*  1 - Make the computer choose randomly between rock, paper or scissors.
        - If the result is between 0 and 0.33, then it's rock.
        - If it's between 0.33 and 0.66, then it's paper.
        - If it's between 0.66 and 1, then it's scissors
*/
function getComputerChoice() {
    let choice = Math.random() * 3;
    if (choice <= 1) {
        choice = "Rock";
    } else if (choice <= 2) {
        choice = "Paper";
    } else {
        choice = "Scissors";
    }
    return choice;
}


//  2 - Make the user choose between rock, paper or scissors.
function getHumanChoice() {
        let userChoice = prompt("Please choose Rock, Paper or Scissors");
        if (userChoice === "Rock") {
                console.log("Rock");
        } else if (userChoice === "Paper") {
                console.log("Paper");
        } else {
                console.log("Scissors")
        }
}


//  3 - Keep track of the player score and computer score, both starting at 0.
/*  4 - Play a round:
        - Compare user and computer choice;
        - If there is a winner, announce the winner of the round then increment winner score by 1;
        - If there is no winner, no one gets his score incremented.

*/
//  5 - Play 5 rounds.

