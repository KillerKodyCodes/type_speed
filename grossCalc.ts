export function grossSpeed(allWords: string, secondsPassed){

    const minutesPassed = secondsPassed / 60;

    //This is the official Gross WPM calculation https://www.speedtypingonline.com/typing-equations
    const wordNum = Math.floor(allWords.length / 5);
    const grossWPM = (wordNum) / minutesPassed;

    return grossWPM;
}