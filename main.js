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
        document.getElementById("result").innerHTML = "<img  id='capturedIMG' src='" + dataURL + "'>";
    });
}

console.log(ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/JqfPjc_uQ/model.json', modelLoaded);
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



function check() {
    var img = document.getElementById("capturedIMG");
    classifier.classify(img, gotResult);
}
function gotResult(error, result) {
    if (error) {
        console.error(error);

    } else {
        console.log(result);
        document.getElementById("resultEmotion1").innerHTML = result[0].label;
        document.getElementById("resultEmotion2").innerHTML = result[1].label;

        prediction1 = result[0].label;
        prediction2 = result[1].label;
        speak();

        
        if (result[0].label == "Thumbs Up") {
            document.getElementById("updateEmoji1").innerHTML = "&#128077";
        }
        if (result[0].label == "Thumbs Down") {
            document.getElementById("updateEmoji1").innerHTML = "&#128078";
        }
        if (result[0].label == "Nice") {
            document.getElementById("updateEmoji1").innerHTML = "&#128076";
        }
        if (result[0].label == "Wolf Face") {
            document.getElementById("updateEmoji1").innerHTML = "&#129304";
        }
        if (result[0].label == "Peace") {
            document.getElementById("updateEmoji1").innerHTML = "&#9996";
        }
        if (result[0].label == "Point") {
            document.getElementById("updateEmoji1").innerHTML = "&#9757";
        }
        if (result[0].label == "Need to go No.1") {
            document.getElementById("updateEmoji1").innerHTML = "&#129305";
        }
        if (result[0].label == "Why") {
            document.getElementById("updateEmoji1").innerHTML = "&#128129";
        }
        if (result[0].label == "Lift") {
            document.getElementById("updateEmoji1").innerHTML = "&#128072";
        }
        if (result[0].label == "Alien") {
            document.getElementById("updateEmoji1").innerHTML = "&#128406";
        }
        if (result[0].label == "High Five") {
            document.getElementById("updateEmoji1").innerHTML = "&#128400";
        }
        if (result[0].label == "Fingers Crossed") {
            document.getElementById("updateEmoji1").innerHTML = "&#129310";
        }


        if (result[1].label == "Thumbs Up") {
            document.getElementById("updateEmoji2").innerHTML = "&#128077";
        }
        if (result[1].label == "Thumbs Down") {
            document.getElementById("updateEmoji2").innerHTML = "&#128078";
        }
        if (result[1].label == "Nice") {
            document.getElementById("updateEmoji2").innerHTML = "&#128076";
        }
        if (result[1].label == "Wolf Face") {
            document.getElementById("updateEmoji2").innerHTML = "&#129304";
        }
        if (result[1].label == "Peace") {
            document.getElementById("updateEmoji2").innerHTML = "&#9996";
        }
        if (result[1].label == "Point") {
            document.getElementById("updateEmoji2").innerHTML = "&#9757";
        }
        if (result[1].label == "Need to go No.1") {
            document.getElementById("updateEmoji2").innerHTML = "&#129305";
        }
        if (result[1].label == "Why") {
            document.getElementById("updateEmoji2").innerHTML = "&#128129";
        }
        if (result[1].label == "Lift") {
            document.getElementById("updateEmoji2").innerHTML = "&#128072";
        }
        if (result[1].label == "Alien") {
            document.getElementById("updateEmoji2").innerHTML = "&#128406";
        }
        if (result[1].label == "High Five") {
            document.getElementById("updateEmoji2").innerHTML = "&#128400";
        }
        if (result[1].label == "Fingers Crossed") {
            document.getElementById("updateEmoji2").innerHTML = "&#129310";
        }



        
       
    }
}