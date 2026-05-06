let randomNumber = Math.floor(Math.random() * 100) + 1;
console.log(randomNumber);

const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHigh = document.querySelector(".lowORhigh");

let previousGuesses = [];
let numOfGuesses = 1;
let playGame = true;

if (playGame) {
    submit.addEventListener("click", function (e) {
        e.preventDefault();
        const userGuess = parseInt(userInput.value);
        validateGuess(userGuess);
    });
}

function validateGuess(guess) {
    if (isNaN(guess)) {
        alert("Please enter a valid number");
    } else if (guess < 1 || guess > 100) {
        alert("Please enter a number between 1 and 100");
    } else {
        previousGuesses.push(guess);

        displayGuess(guess);
        checkGuess(guess);
    }
}

function checkGuess(userGuess) {
    if (userGuess === randomNumber) {
        displayResult("🎉 Congratulations! You guessed it right!");
        endGame();
    } else if (userGuess < randomNumber) {
        displayResult("📉 Too low! Try again.");
    } else {
        displayResult("📈 Too high! Try again.");
    }

    if (numOfGuesses >= 10 && userGuess !== randomNumber) {
        displayResult(`❌ Game Over! The number was ${randomNumber}`);
        endGame();
    }
}

function displayGuess(userGuess) {
    userInput.value = "";
    guessSlot.innerHTML += `${userGuess} | `;
    numOfGuesses++;

    let remaining = 10 - numOfGuesses + 1;
    lastResult.innerHTML = `${remaining} guesses left`;
}

function displayResult(message) {
    lowOrHigh.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
    userInput.value = "";
    userInput.setAttribute("disabled", "");
    submit.setAttribute("disabled", "");

    playGame = false;

    // Add restart button
    const p = document.createElement("p");
    p.innerHTML = `<button id="newGame">Start New Game</button>`;
    document.body.appendChild(p);

    document.querySelector("#newGame").addEventListener("click", newGame);
}

function newGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    previousGuesses = [];
    numOfGuesses = 1;

    guessSlot.innerHTML = "";
    lastResult.innerHTML = "10 guesses left";
    lowOrHigh.innerHTML = "";

    userInput.removeAttribute("disabled");
    submit.removeAttribute("disabled");

    document.querySelector("#newGame").parentElement.remove();

    playGame = true;
}