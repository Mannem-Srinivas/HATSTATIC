const userText = document.getElementById('inputText');

let isPlaying = false
let isFirstTime = true

const speechBtn = document.getElementById('speech');

const stopSpeechElem = document.getElementById("stopSpeech");
// const disableBtn = document.getElementById('stop');
speechBtn.addEventListener('click', () => {
    isFirstTime = false
    speechText = userText.value="A long time ago, in a far away land, a merchant was returning home after a long journey. As night fell, he entered a deep forest. His head was full of thoughts of his six daughters. He had left home in summer, and now he was returning in deep winter. The most bitter sleet and snow came down, and his horse stumbled on a patch of ice. He heard wolves howling, and soon he realised that he was lost. At last, he saw some sort of track. ";
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
