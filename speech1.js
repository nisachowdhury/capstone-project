var button = document.getElementById('speak');
var result = 0;
str1 = "Soft kitty, warm kitty, little ball of fur! Happy kitty, sleepy kitty, purr purr purr!"
button.addEventListener('click', function(e) {
    let instruct = new SpeechSynthesisUtterance("The typing game will now begin. Ready. Go! .......");
    let utterance = new SpeechSynthesisUtterance(str1);
    speechSynthesis.speak(instruct);
    speechSynthesis.speak(utterance);
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




