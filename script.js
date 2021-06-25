const computerSelection = computerPlay();
let playerWon = false;
let tie = false;

// computerPlay function will randomly select rock, paper, or scissor, then return the result as a string.

function computerPlay() {

// gameChoices is an array of choices: rock, paper, or scissor
const gameChoices = ["rock", "paper", "scissors"];

// randomRockPaperScissor will use math funtions to generate a random number between 0 and 1, then multiplied by the number of choices 3. It will then round down to the nearest integer, which will always result in 0,1,or 2.
const randomRockPaperScissor = Math.floor(Math.random() * 3);
console.log(randomRockPaperScissor);

// chooses the postion in the array bases on which value randomRockPaperScissor gives and returns the choice as a string
return (gameChoices[randomRockPaperScissor]);

}

// playRound will have 2 parameters. The first will be playerSelection, which brings up a prompt to enter rock, paper, or scissors. Case insensitive.
function playRound(playerSelection, computerSelection) {

  // playerSelection will bring up a prompt to tell the player to enter "rock paper or scissors"
  playerSelection = prompt('Enter rock paper or scissors', "");

  // this will assign computerSelection to run the funtion computerPlay() where it generates a random choice of rock, paper or scisssors.
  computerSelection = computerPlay();

  

  
// all the combinations of computerSelection and playerSelection and their return statements. 
    if (computerSelection === "paper" && playerSelection.toLowerCase() == "scissors") {
      console.log ("You win! scissors beats paper");
      return playerWon = true;

    } else if(computerSelection === "paper" && playerSelection.toLowerCase() == "rock") {
      console.log ("You Lose! Paper beats Rock");
      return playerWon = false;

    } else if(computerSelection === "rock" && playerSelection.toLowerCase() == "paper") {
      console.log ("You Win! Paper beats Rock");
      return playerWon = true;

    } else if(computerSelection === "rock" && playerSelection.toLowerCase() == "scissors") {
      console.log ("You Lose! Rock beats scissors");
      return playerWon = false;

    } else if(computerSelection === "scissors" && playerSelection.toLowerCase() == "rock") {
      console.log ("You Win! Rock beats scissors");
      return playerWon = true;

    } else if(computerSelection === "scissors" && playerSelection.toLowerCase() == "paper") {
      console.log ("You Lose! scissors beats paper");
      return playerWon = false;

    } else if(computerSelection === playerSelection.toLowerCase()) {
      console.log ("It's a tie!");
      return tie = true;
    }   
    // if the player's entry does not return a valid game result, then it will pop up an alert saying it was an invalid entry and to try again. Then it runs the playRound again.
    else { alert("Invalid entry! Try again");
          playRound();
  }

    
}


function game() {
  
  let playerWins = 0;
  let computerWins = 0;

// if player wins add 1 to playerWins

for (let i = 1; i <= 6; i++) {
playRound(); 

  if (tie === true) {
    console.log (playerWins + "-" + computerWins);
  } else if(playerWon === false) {computerWins = computerWins + 1;
    console.log (playerWins + "-" + computerWins);
  } else if(playerWon === true) {
    playerWins = playerWins + 1;
    console.log (playerWins + "-" + computerWins);
  }
}
  
if (playerWins > computerWins) {
    alert('You won! final score: ' + playerWins + "-" + computerWins);

  } else if (playerWins == computerWins) {
    alert('You tied! final score: ' + playerWins + "-" + computerWins);
  }  
  else alert('You lost! final score: ' + playerWins + "-" + computerWins);

}
