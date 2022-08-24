function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3) + 1
  switch(choice) {
    case 1:
      return "rock";
      break;
    case 2:
      return "paper";
      break;
    case 3:
      return "scissors"
  }
}

function playRound(playerSelection, computerSelection) {

  if (playerSelection === "rock") {
    if (computerSelection === "paper") {
      console.log("You Lose! Paper beats Rock");
      return "defeat"
    } else if (computerSelection === "scissors") {
      console.log("You Win! Rock beats Scissors");
      return "victory"
    } else {
      console.log("it's a tie, the rock doesn't beat the rock");
    }


  } else if (playerSelection === "paper") {
    if (computerSelection === "scissors") {
      console.log("You Lose! Scissors beats Paper");
      return "defeat"
    } else if (computerSelection === "rock") {
      console.log("You Win! Paper beats Rock");
      return "victory"
    } else {
      console.log("it's a tie, the paper doesn't beat the paper");
    }


  } else if (playerSelection === "scissors") {
    if (computerSelection === "rock") {
      console.log("You Lose! Rock beats Scissors");
      return "defeat"
    } else if (computerSelection === "paper") {
      console.log("You Win! Scissors beats Paper");
      return "victory"
    } else {
      console.log("it's a tie, the scissors doesn't beat the scissors");
    }

  }
}

function game() {
  
  let playerScore = 0;
  let computerScore = 0;

  for (let i = 1; i <= 5; i++) {

    let playerSelection = prompt("Rock, paper or Scissors?").toLowerCase();
    let computerSelection = getComputerChoice();
    
    if (playRound(playerSelection, computerSelection) === "victory") {
      playerScore++
    } else {
      computerScore++
    }
  }
  
  if (playerScore > computerScore) {
    console.log(`${playerScore} - ${computerScore}, Human Player Win!`);
  } else if ( playerScore === computerScore ) {
    console.log("It's a tie!!");
  } else {
    console.log(`${playerScore} - ${computerScore}, The Computer Win!`);
  }

}

game()
 