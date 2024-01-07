// app.ts
document.addEventListener("DOMContentLoaded", function () {
    const sentenceElement = document.getElementById("sentence") as HTMLParagraphElement;
    const userInputElement = document.getElementById("userInput") as HTMLInputElement;
    const feedbackElement = document.getElementById("feedback") as HTMLParagraphElement;
  
    const sentence = sentenceElement.innerText;
    let currentIndex = 0;
    let startTime: number;
  
    userInputElement.addEventListener("input", function (event) {
      const userInput = userInputElement.value;
      
      if (!startTime) {
        startTime = Date.now();
      }
  
      if (userInput[currentIndex] === sentence[currentIndex]) {
        currentIndex++;
        feedbackElement.innerText = "";
      } else {
        feedbackElement.innerText = "Incorrect character. Please type the correct character.";
        userInputElement.value = userInput.slice(0, currentIndex);
      }
  
      if (currentIndex === sentence.length) {
        const endTime = Date.now();
        const elapsedTime = (endTime - startTime) / 1000; // in seconds
        const wordsPerMinute = (sentence.split(" ").length / elapsedTime) * 60;
  
        console.log(wordsPerMinute);
        feedbackElement.innerText = `Typing speed: ${wordsPerMinute.toFixed(2)} words per minute`;
      }
    });
  });
  