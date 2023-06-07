const userText = document.getElementById('inputText');

let isPlaying = false
let isFirstTime = true

const speechBtn = document.getElementById('speech');

const stopSpeechElem = document.getElementById("stopSpeech");
// const disableBtn = document.getElementById('stop');
speechBtn.addEventListener('click', () => {
    isFirstTime = false
    speechText = userText.value="One day, the deer did not turn up at the usual time. The mole, tortoise and crow were worried. The mole turned to the crow, “I think you better fly around and see where the deer is.” The crow nodded her head and flew away.";
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
