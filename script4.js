const userText = document.getElementById('inputText');

let isPlaying = false
let isFirstTime = true

const speechBtn = document.getElementById('speech');

const stopSpeechElem = document.getElementById("stopSpeech");
// const disableBtn = document.getElementById('stop');
speechBtn.addEventListener('click', () => {
    isFirstTime = false
    speechText = userText.value="Aesop's Fables is a collection of tales by the Greek storyteller Aesop. Most of the tales included here were translated and edited by Reverend George Fyler Townsend (1814-1900) in England and published under the title, Aesop's Fables. Townsend's translations were influential on many subsequent collections of fables. Some of the tales included here were taken from the book How to Tell Stories to Children and Some Stories To Tell, by Sara Cone Bryant and published in London in 1918. In some cases, we have included both Townsend's version and Bryant's version of the same tale. Source: This book was compiled by the Florida Center for Instructional Technology and includes passages from multiple sources. Please refer to the passage pages for further source information.,";
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
