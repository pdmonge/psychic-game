// Psychic game

// GLOBAL VARIABLES

const numeralList = ["0","1","2","3","4","5","6","7","8","9"];
var playAgain = false;

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
// Grab the html Elements
var numberRangeDisplay = document.getElementById("number-range");
var winsDisplay = document.getElementById("wins");
var lossesDisplay = document.getElementById("losses");
var guessesRemainingDisplay = document.getElementById("guesses-remaining");
var guessesSoFarDisplay = document.getElementById("guesses-so-far");
var nextGuessDisplay = document.getElementById("next-guess");

function updateDisplay(currentGame) {
	numberRangeDisplay.innerHTML = currentGame.numberRange;
	winsDisplay.innerHTML = currentGame.wins;
	lossesDisplay.innerHTML = currentGame.losses;
	guessesRemainingDisplay.innerHTML = currentGame.guessesRemaining;
	guessesSoFarDisplay.innerHTML = currentGame.guessesSoFar.join();
	nextGuessDisplay.innerHTML = currentGame.playerGuess;

	return true;
}

// Initialize the game
var currentGame = new psychicGame(1,10,10);
updateDisplay(currentGame);

console.log(currentGame);
// console.log(document);

// Main game function based on keyboard input
document.onkeyup = function(event) {

	console.log("In the onkeyup function");
	var keyPressed = event.key;

	console.log("keyPressed: " + keyPressed);
	console.log("Key in numeralList: " + numeralList.includes(keyPressed));

	// Check if a numeral key was pressed and concatenate to previous entries
	if (numeralList.includes(keyPressed) === true) {
		console.log("Passed numeralList Check!");

		// Account for leading zeros
		console.log("playerGuess: " + currentGame.playerGuess);
		console.log("playerGuess is 0? " + (currentGame.playerGuess === "0"));
		console.log("Display Updated? " + updateDisplay(currentGame));
		// alert("Paused");
		if (currentGame.playerGuess === "0") {
			currentGame.playerGuess = keyPressed;
		}
		else {
			currentGame.playerGuess += keyPressed;
		}
		console.log("Display Updated? " + updateDisplay(currentGame));
		// alert("Paused");
	}
	// If Enter is pressed check if we have a guess
	else if (keyPressed === "Enter" && currentGame.playerGuess != "") {
		currentGame.guessesSoFar.push(currentGame.playerGuess);

		if (parseInt(currentGame.playerGuess) === currentGame.myNumber) {
			currentGame.winLoseStatus = "won";
			currentGame.wins++;
		}
		else if (currentGame.guessesRemaining === 0) {
			currentGame.winLoseStatus = "lost";
			currentGame.losses++;
		}
		else {
			currentGame.playerGuess = "";
			currentGame.guessesRemaining--;
		}
	}
	
	console.log("Display Updated? " + updateDisplay(currentGame));
	setTimeout(function() {
		// alert("Paused");
		// If player won or lost prompt to start a new game
		if (currentGame.winLoseStatus === "won") {
			alert("Congratulations!!! You guessed it!");
			playAgain = confirm("Would you like to play again?");
		}
		else if (currentGame.winLoseStatus === "lost") {
			alert("Sorry. You lost.");
			playAgain = confirm("Would you like to play again?");
		}

		if (playAgain === true) {
			currentGame.reset();
			updateDisplay(currentGame);
		}
	}, 1000);
}



