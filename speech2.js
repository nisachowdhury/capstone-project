var button = document.getElementById('speak');
var result = 0;
str1 = "Soft kitty, warm kitty, little ball of fur! Happy kitty, sleepy kitty, purr purr purr!"
button.addEventListener('click', function(e) {
    let instruct = new SpeechSynthesisUtterance("The typing game will now begin. Ready. Go! .......");
    let utterance = new SpeechSynthesisUtterance(str1);
    //speechSynthesis.speak(instruct);
    //speechSynthesis.speak(utterance);
    speak("The typing game will now begin. Ready. Go! .......");
    speak(str1);
    console.log("button is clicked");
});

var speechMsgInput = document.getElementById('speech-msg');

var submit = document.getElementById('submit');
submit.addEventListener('click', function(e) {
    if (speechMsgInput.value.length > 0) {
        console.log(speechMsgInput.value);
        str2 = speechMsgInput.value.toString();
    }
    let diff = findDiff(str1,str2);
    console.log(str2);
    console.log(diff);
    result = ((str1.length - diff.length) / str1.length )* 100;
    console.log(((str1.length - diff.length) / str1.length )* 100 );
    document.getElementsByName('output')[0].value= result;
});

function findDiff(str1, str2){
    let diff= "";
    str2.split('').forEach(function(val, i){
        if (val != str1.charAt(i))
            diff += val ;
    });
    return diff;
};






// Get the 'speak' button
var button = document.getElementById('speak');

// Get the text input element.
var speechMsgInput = document.getElementById('speech-msg');

// Get the voice select element.
var voiceSelect = document.getElementById('voice');

// Get the attribute controls.
var volumeInput = document.getElementById('volume');
var rateInput = document.getElementById('rate');
var pitchInput = document.getElementById('pitch');


// Fetch the list of voices and populate the voice options.
function loadVoices() {
    // Fetch the available voices.
    var voices = speechSynthesis.getVoices();

    // Loop through each of the voices.
    voices.forEach(function(voice, i) {
        // Create a new option element.
        var option = document.createElement('option');

        option.textContent = `${voice.name} (${voice.lang})`;

        if (voice.default) {
            option.textContent += " — DEFAULT";
        }


        option.setAttribute("lang", voice.lang);
        option.setAttribute("value", voice.name);

        // Add the option to the voice selector.
        voiceSelect.appendChild(option);
    });
}

// Execute loadVoices.
loadVoices();

// Chrome loads voices asynchronously.
window.speechSynthesis.onvoiceschanged = function(e) {
    loadVoices();
};


// Create a new utterance for the specified text and add it to
// the queue.
function speak(text) {
    // Create a new instance of SpeechSynthesisUtterance.
    var msg = new SpeechSynthesisUtterance();

    // Set the text.
    msg.text = text;

    // Set the attributes.
    msg.volume = parseFloat(volumeInput.value);
    msg.rate = parseFloat(rateInput.value);
    msg.pitch = parseFloat(pitchInput.value);

    // If a voice has been selected, find the voice and set the
    // utterance instance's voice attribute.
    if (voiceSelect.value) {
        msg.voice = speechSynthesis.getVoices().filter(function(voice) { return voice.name == voiceSelect.value; })[0];
    }

    // Queue this utterance.
    window.speechSynthesis.speak(msg);
}


// Set up an event listener for when the 'speak' button is clicked.
button.addEventListener('click', function(e) {
    if (speechMsgInput.value.length > 0) {
        speak(speechMsgInput.value);
    }
});