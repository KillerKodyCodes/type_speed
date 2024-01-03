"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var grossCalc_1 = require("./grossCalc");
function main() {
    console.log('Welcome to the Typing Speed Calculator!');
    var targetString = "Hello World! This is sample text for the speed calculator";
    console.log("Type the following sentences: \"".concat(targetString, "\" "));
    var startTime = new Date().getTime();
    var userInput = readlineSync.question('-> '); //This prompts the user input
    var endTime = new Date().getTime();
    var elapsedTime = (endTime - startTime) / 1000; //milliseconds to seconds
    //right now there is no check to see if you typed correctly
    //it just parses your input via the spaces and considers all of those substrings as correct words
    //grossSpeed provides the wpm value
    var speed = (0, grossCalc_1.grossSpeed)(userInput, elapsedTime);
    console.log("You typed ".concat(userInput.length, " words in ").concat(elapsedTime, " seconds!"));
    console.log("Your typing speed is: ".concat(speed.toFixed(2), " words per minute."));
}
main();
