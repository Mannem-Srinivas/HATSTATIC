const userText = document.getElementById('inputText');

let isPlaying = false
let isFirstTime = true

const speechBtn = document.getElementById('speech');

const stopSpeechElem = document.getElementById("stopSpeech");
// const disableBtn = document.getElementById('stop');
speechBtn.addEventListener('click', () => {
    isFirstTime = false
    speechText = userText.value="Once upon a time, in a cozy little burrow, there lived a mischievous and adventurous rabbit named Peter. Peter Rabbit was always full of energy and curiosity,";
    let speechData= new SpeechSynthesisUtterance();
    speechData.text = speechText;
    speechSynthesis.speak(speechData);
    // if(isFirstTime){
    //     isPlaying = true;
    //     speechSynthesis.speak(speechData);
    // }
    // if(isPlaying){
    //     speechSynthesis.pause();
    //     isPlaying = true
    // }
    // else{
    //     isPlaying = false;
    // }
    }
)
stopSpeechElem.addEventListener("click", () => {speechSynthesis.cancel();})


// let stopdata= new stopdata();
// stopData.text = stopText;


// speechSynthesis.stop(stopData);
// document.getElementById("myBtn").disabled = true;
