"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.grossSpeed = void 0;
function grossSpeed(allWords, secondsPassed) {
    var minutesPassed = secondsPassed / 60;
    //This is the official Gross WPM calculation https://www.speedtypingonline.com/typing-equations
    var wordNum = Math.floor(allWords.length / 5);
    var grossWPM = (wordNum) / minutesPassed;
    return grossWPM;
}
exports.grossSpeed = grossSpeed;
