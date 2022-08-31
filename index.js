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

function gameResult() {
  buttons.forEach(button => button.setAttribute("disabled", true))
  if (playerScore > computerScore) {
    const gameResult = document.createElement("p");
    gameResult.textContent = `Congratulations! You Won! 😀`
    resultsContainer.appendChild(gameResult)
  } else if (playerScore < computerScore) {
    const gameResult = document.createElement("p");
    gameResult.textContent = `Sorry! You Lose! 😔`
    resultsContainer.appendChild(gameResult)
  } else {
    const gameResult = document.createElement("p");
    gameResult.textContent = `Wow! It's a tie! Nobody wins 🙄`
    resultsContainer.appendChild(gameResult)
  }
}

function showResult(result) {
  roundResult.textContent = result;
  resultsContainer.appendChild(roundResult)
}

function playRound(playerSelection) {
  let player = playerSelection.target.id;
  let computer = getComputerChoice();
  if ( round <= 5 ) {
    if (player === "rock") {
      if (computer === "scissor") {
        showResult("You Win! Rock beats Scissor")
        playerScore++;
        round++
        getScore(playerScore, computerScore);
      } else if (computer === "paper") {
        showResult("You Lose! Paper beats Rock")
        computerScore++;
        round++
        getScore(playerScore, computerScore);
      } else {
        showResult("It's a tie, Rock doesn't beat Rock.")
        round++
        getScore(playerScore, computerScore);
      }
    }
    if (player === "paper") {
      if (computer === "scissor") {
        showResult("You Lose! Scissor beats Paper")
        computerScore++;
        round++
        getScore(playerScore, computerScore);
      } else if (computer === "rock") {
        showResult("You Win! Paper beats Rock")
        playerScore++;
        round++
        getScore(playerScore, computerScore);
      } else {
        showResult("It's a tie, Paper doesn't beat Paper.")
        round++
        getScore(playerScore, computerScore);
      }
    }
    if (player === "scissor") {
      if (computer === "paper") {
        showResult("You Win! Scissor beats Paper")
        playerScore++;
        round++
        getScore(playerScore, computerScore);
      } else if (computer === "rock") {
        showResult("You Lose! Rock beats Scissor")
        computerScore++;
        round++
        getScore(playerScore, computerScore);
      } else {
        showResult("It's a tie, Scissor doesn't beat Scissor.")
        round++
        getScore(playerScore, computerScore);
      }
    }
  } else {
    gameResult();
  }
}

const buttons = document.querySelectorAll("button");
const resultsContainer = document.querySelector(".results");
const playerCurrentScore = document.querySelector("#player-score");
const computerCurrentScore = document.querySelector("#computer-score");
const roundResult = document.createElement("p");

playerCurrentScore.textContent = 0;
computerCurrentScore.textContent = 0;

let playerScore = +playerCurrentScore.textContent;
let computerScore = +computerCurrentScore.textContent;
let round = 1;

buttons.forEach( button => {
  button.addEventListener("click", playRound)
})

