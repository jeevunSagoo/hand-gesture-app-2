Webcam.set({
    width: 350,
    height: 300,
    image_format: "png",
    png_quality: 90
});

Webcam.attach("#camera");

function take_snapshot() {
    Webcam.snap(function (pic) {
        document.getElementById("result").innerHTML = '<img id="img_pic" src="' + pic + '">'
    });
}

emojimodel = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/RGT8VLDU8/model.json", modelloaded)

function modelloaded() {
    console.log("model loaded succesfully");
}

prediction1 = "";
prediction2 = "";

function texttospeech() {
    speak_text = "prediction 1 is " + prediction1 + " and prediction 2 is " + prediction2;
    speak_audio = new SpeechSynthesisUtterance(speak_text);
    window.speechSynthesis.speak(speak_audio);
}

function check() {
    img = document.getElementById("img_pic");
    emojimodel.classify(img, got_result);
}