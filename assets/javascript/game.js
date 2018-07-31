var winningNumber;  // number for user to hit
var crystalOne; 
var crystalTwo;
var crystalThree;
var crystalFour;
var currentScore;
var wins = 0;
var losses = 0;

function crystalValueGenerator() {
  crystalOne = Math.floor(Math.random() *(12 - 1 + 1)) + 1;
  crystalTwo = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
  crystalThree = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
  crystalFour = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
  console.log(crystalOne);
  console.log(crystalTwo);
  console.log(crystalThree);
  console.log(crystalFour);
}

function newGame() {
  winningNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
  console.log(winningNumber);
  currentScore = 0;
  crystalValueGenerator();
}

newGame();

