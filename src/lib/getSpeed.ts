export function getSpeed(targetString:string, allWords: string, secondsPassed){

    const minutesPassed = secondsPassed / 60;

    //This is the official Gross WPM calculation https://www.speedtypingonline.com/typing-equations
    const wordNum = Math.floor(allWords.length / 5);
    const grossWPM = (wordNum) / minutesPassed;


    // net stuff
    // logic for accuracy may need some work
    
    // removing spaces from target and input string
    targetString = targetString.replace(/\s+/g, '');
    allWords = allWords.replace(/\s+/g, '');

    const targetArray = targetString.split("");
    const inputArray = allWords.split("");
    

    let counter = 0;

    for(let index=0;index<targetArray.length;index++){
      if(targetArray[index] != inputArray[index])
        counter++;
    }
    
    const errorCount = counter ;

    const accuracy = (inputArray.length - errorCount)/inputArray.length;


    const netWPM = grossWPM - ((errorCount/5)/minutesPassed)
    

    return [grossWPM,netWPM];





}


//https://stackoverflow.com/questions/5963182/how-to-remove-spaces-from-a-string-using-javascript
//https://stackoverflow.com/questions/2917175/return-multiple-values-in-javascript