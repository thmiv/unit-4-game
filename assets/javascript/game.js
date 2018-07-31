var winningNumber;  // number for user to hit
var crystalOne; 
var crystalTwo;
var crystalThree;
var crystalFour;
var currentScore;
var wins = 0;
var losses = 0;
var clickAudio = ["assets/sounds/rupee1.wav", "assets/sounds/rupee2.wav", "assets/sounds/rupee3.wav", "assets/sounds/rupee4.wav"];

function updateDisplay() {
  $("#winning-number").text(winningNumber);
  $("#current-score").text(currentScore);
  $("#num-wins").text(wins);
  $("#num-loss").text(losses);
}

function crystalValueGenerator() {
  crystalOne = Math.floor(Math.random() *(12 - 1 + 1)) + 1;
  crystalTwo = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
  crystalThree = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
  crystalFour = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
  console.log("Blue crystal value: " +crystalOne);
  console.log("Red crystal value: " +crystalTwo);
  console.log("Green crystal value: " +crystalThree);
  console.log("Purple crystal value: " +crystalFour);
}

function newGame() {
  winningNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
  console.log("Target number: " +winningNumber);
  currentScore = 0;
  crystalValueGenerator();
  updateDisplay();
}
function checkForWin() {
  updateDisplay();
  if (currentScore === winningNumber){
    alert("YOU'RE A WINNER!");
    wins++;
    newGame();
  } else if (currentScore > winningNumber) {
    alert("You're a loser!");
    losses++;
    newGame();
  }
}

window.onload = function() {
  newGame();

  $("#blue").on("click", function() {
    currentScore += crystalOne;
    var audio = new Audio(clickAudio[0]);
    audio.play();
    checkForWin();
  });
  $("#red").on("click", function() {
    currentScore += crystalTwo;
    var audio = new Audio(clickAudio[1]);
    audio.play();
    checkForWin();
  });
  $("#green").on("click", function() {
    currentScore += crystalThree;
    var audio = new Audio(clickAudio[2]);
    audio.play();
    checkForWin();
  });
  $("#purple").on("click", function() {
    currentScore += crystalFour;
    var audio = new Audio(clickAudio[3]);
    audio.play();
    checkForWin();
  });
}
