import * as readlineSync from 'readline-sync';
import { getSpeed } from './lib/getSpeed.js';
//DEPRECATED
function main() {
    console.log('Welcome to the Typing Speed Calculator!');
    const targetString = "Hello World! This is sample text for the speed calculator";
    console.log(`Type the following sentences: "${targetString}" `);
    const startTime = new Date().getTime();
    const userInput = readlineSync.question('-> '); //This prompts the user input
    const endTime = new Date().getTime();
    const elapsedTime = (endTime - startTime) / 1000; //milliseconds to seconds
    //right now there is no check to see if you typed correctly
    //it just parses your input via the spaces and considers all of those substrings as correct words
    //grossSpeed provides the wpm value
    const [gross, net] = getSpeed(targetString, userInput, elapsedTime);
    console.log(`You typed ${userInput.length} words in ${elapsedTime} seconds!`);
    console.log(`Your gross typing speed is: ${gross.toFixed(2)} words per minute.`);
    console.log(`Your net typing speed is: ${net.toFixed(2)} words per minute.`);
}
main();
//# sourceMappingURL=index.js.map