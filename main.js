prediction1 = "";
prediction2 = "";

Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90

});
camera = document.getElementById("camera");
Webcam.attach('#camera');


function takeSnap() {
    Webcam.snap(function (dataURL) {
        document.getElementById("result").innerHTML = "<img  id='captuedIMG' src='" + dataURL + "'>";
    });
}

console.log(ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/YA-9likcm/model.json', modelLoaded);
function modelLoaded() {
    console.log("Model Is Loaded");
}

function speak() {
    var synth = window.speechSynthesis;
    speak1 = "The First Prediction is " + prediction1;
    speak2 = "And The Second Prediction is " + prediction2;
    utterThis = new SpeechSynthesisUtterance(speak1 + speak2);
    synth.speak(utterThis);
}

// speak();

function check() {
    // work on it on class 112
}