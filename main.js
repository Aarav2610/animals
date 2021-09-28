function statClassification()
{
    navigator.meidiaDevices.getUserMedia({audio: true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/pzxY2X7G9/model.json', modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

// https://teachablemachine.withgoogle.com/models/[...]