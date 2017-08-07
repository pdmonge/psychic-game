// Psychic game

// GLOBAL VARIABLES

function psychicGame(lowerLimit, upperLimit, maxGuesses) {  // A game object
	this.lowerLimit = Math.floor(lowerLimit);
	this.upperLimit = Math.floor(upperLimit);
	this.maxGuesses = Math.floor(maxGuesses);
	this.numberRange = "( " + this.lowerLimit + " to " + this.upperLimit + " )";
	this.wins = 0;
	this.losses = 0;

	this.reset = function() {
		this.guessesRemaining = Math.floor(this.maxGuesses);
		this.guessesSoFar = [];
		this.myNumber = Math.floor(Math.random() * this.upperLimit) + this.lowerLimit; 
		this.playerGuess = "";
		this.winLoseStatus = "playing"; // valid values "won", "lost", "playing"
	}
	this.reset();
}

function updateDisplay(currentGame) {
	// Grab the html Elements
	var numberRangeDisplay = document.getElementById("number-range");
	var winsDisplay = document.getElementById("wins");
	var lossesDisplay = document.getElementById("losses");
	var guessesRemainingDisplay = document.getElementById("guesses-remaining");
	var guessesSoFarDisplay = document.getElementById("guesses-so-far");
	var nextGuessDisplay = document.getElementById("next-guess");

	numberRangeDisplay.innerHTML = currentGame.numberRange;
	winsDisplay.innerHTML = currentGame.wins;
	lossesDisplay.innerHTML = currentGame.losses;
	guessesRemainingDisplay.innerHTML = currentGame.guessesRemaining;
	guessesSoFarDisplay.innerHTML = currentGame.guessesSoFar.join();
	nextGuessDisplay.innerHTML = currentGame.playerGuess;
}

// Initialize the game
var currentGame = new psychicGame(1,10,10);
updateDisplay(currentGame);

console.log(this);
console.log(document);

// Main game function based on keyboard input
document.onkeyup = function(event) {

	var keyPressed = event.key;

	console.log("event.keyCode: " + event.keyCode);
	// Check if a numeral key was pressed and concatenate to previous entries
	if ( event.keyCode > 0 && event.keyCode <= 9) {
		currentGame.playerGuess += keyPressed;
	}
	else if (false) {

	}

	// If Enter is pressed check if we have a guess
	// Then check if number in range
	// if guess not in range show number not in range, add to guesses, clear the guess


	// // Start a new game
	// if (false) {
	// 	currentGame.reset();
	// }
	updateDisplay(currentGame);
}

