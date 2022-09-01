function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3) + 1;
  switch (choice) {
    case 1:
      return "rock";
      break;
    case 2:
      return "paper";
      break;
    case 3:
      return "scissor";
  }
}

function getScore(playerScore, computerScore) {
  playerCurrentScore.textContent = playerScore;
  computerCurrentScore.textContent = computerScore;
}

// These functions are responsible for managing the distribution of points in relation to who wins the round
function rockResults(computerSelection) {
  if (computerSelection === "scissor") {
    roundResult.textContent = "You Win! Rock beats Scissor"
    playerScore++;
    round++
    getScore(playerScore, computerScore);
  } else if (computerSelection === "paper") {
    roundResult.textContent = "You Lose! Paper beats Rock"
    computerScore++;
    round++
    getScore(playerScore, computerScore);
  } else {
    roundResult.textContent = "It's a tie, Rock doesn't beat Rock."
    round++
    getScore(playerScore, computerScore);
  }
}

function paperResult(computerSelection) {
  if (computerSelection === "scissor") {
    roundResult.textContent = "You Lose! Scissor beats Paper"
    computerScore++;
    round++
    getScore(playerScore, computerScore);
  } else if (computerSelection === "rock") {
    roundResult.textContent = "You Win! Paper beats Rock"
    playerScore++;
    round++
    getScore(playerScore, computerScore);
  } else {
    roundResult.textContent = "It's a tie, Paper doesn't beat Paper."
    round++
    getScore(playerScore, computerScore);
  }
}

function scissorResult(computerSelection) {
  if (computerSelection === "paper") {
    roundResult.textContent = "You Win! Scissor beats Paper"
    playerScore++;
    round++
    getScore(playerScore, computerScore);
  } else if (computerSelection === "rock") {
    roundResult.textContent = "You Lose! Rock beats Scissor"
    computerScore++;
    round++
    getScore(playerScore, computerScore);
  } else {
    roundResult.textContent = "It's a tie, Scissor doesn't beat Scissor."
    round++
    getScore(playerScore, computerScore);
  }
}

//gameResult() will take care of displaying a certain message on the screen through a tag element based on the final result the game.
function gameResult() { 
  if (playerScore > computerScore) {
    finalResult.style.color = "#1df21d"
    finalResult.textContent = `Congratulations! You Won! 😀`
  } else if (playerScore < computerScore) {
    finalResult.style.color = "#ff0000"
    finalResult.textContent = `Sorry! You Lose! 😔`
  } else {
    finalResult.style.color = "#5d8bff"
    finalResult.textContent = `Wow! It's a tie! Nobody wins 🙄`
  }
}

// playRound() will run until all 5 rounds are complete, comparing the player's and machine's choices and displaying messages of the result of each round.
function playRound(playerSelection) {
  if ( round <= 5 ) {
    let player = playerSelection.currentTarget.id;
    let computer = getComputerChoice();
    if (player === "rock") {
      rockResults(computer)
    }
    if (player === "paper") {
      paperResult(computer)
    }
    if (player === "scissor") {
      scissorResult(computer)
    }
  } else {
    gameResult();
  }
}

// buttons
const buttons = document.querySelectorAll(".buttons-container > button");
const restartButton = document.querySelector("#restart-button");

// container
const resultsContainer = document.querySelector(".results");

// scoress
const playerCurrentScore = document.querySelector("#player-score");
const computerCurrentScore = document.querySelector("#computer-score");


const roundResult = document.createElement("p");
roundResult.textContent = "Good Luck..."
roundResult.classList.add("round-result")
resultsContainer.appendChild(roundResult);

const finalResult = document.createElement("p");
finalResult.classList.add("final-result")
resultsContainer.appendChild(finalResult)

playerCurrentScore.textContent = 0;
computerCurrentScore.textContent = 0;

let playerScore = +playerCurrentScore.textContent;
let computerScore = +computerCurrentScore.textContent;

// counter for rounds
let round = 1;

buttons.forEach( button => {
  button.addEventListener("click", playRound)
})

restartButton.addEventListener("click", () => {
  round = 1;
  playerCurrentScore.textContent = 0;
  computerCurrentScore.textContent = 0;
  playerScore = +playerCurrentScore.textContent;
  computerScore = +computerCurrentScore.textContent;
  roundResult.textContent = "Good Luck...";
  finalResult.textContent = "";
})

