let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => {
  return Math.floor(Math.random() * 9);
};
const compareGuesses = (human, cpu, secret) => {
  let humanDist = Math.abs(human - secret);
  let cpuDist = Math.abs(cpu - secret);
  if (humanDist < cpuDist) {
    return true;
  } else {
    return false;
  }
};
const updateScore = winner => {
  if (compareGuesses() === true) {
    humanScore++;
  } else {
    computerScore++;
  }
};

const advanceRound = () => currentRoundNumber++;
