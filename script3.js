const userText = document.getElementById('inputText');

let isPlaying = false
let isFirstTime = true

const speechBtn = document.getElementById('speech');

const stopSpeechElem = document.getElementById("stopSpeech");
// const disableBtn = document.getElementById('stop');
speechBtn.addEventListener('click', () => {
    isFirstTime = false
    speechText = userText.value="An imaginative and mischievous boy named Tom Sawyer lives with his Aunt Polly and his half-brother, Sid, in the Mississippi River town of St. Petersburg, Missouri. After playing hooky from school on Friday and dirtying his clothes in a fight, Tom is made to whitewash the fence as punishment on Saturday. At first, Tom is disappointed by having to forfeit his day off. However, he soon cleverly persuades his friends to trade him small treasures for the privilege of doing his work. He trades these treasures for tickets given out in Sunday school for memorizing Bible verses and uses the tickets to claim a Bible as a prize. He loses much of his glory, however, when, in response to a question to show off his knowledge, he incorrectly answers that the first two disciples were David and Goliath";
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
