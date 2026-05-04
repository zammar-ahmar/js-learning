// const { createElement } = require("react");

const guess =Math.round(Math.random()*100 +1);
console.log(guess);
const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHigh = document.querySelector(".lowORhigh");
const result = document.querySelector(".result");

let p = createElement("p");
let previousGuesses = [];
let numOfGuesses = 1;
let playGame = true;


function validateGuess(userGuess){

}
function checkGuess(userGuess){

}
function displayGuess(userGuess){

}
 
function displayResult(message){
}

function newGame(){ 
}

function endGame(){
}