var gesture = ""; 

Webcam.set({
    width:350,
    height:300,
    image_formating:'png',
    png_quality:90
});

 camera = document.getElementById("camera");

Webcam.attach('camera');

function take_snapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="capture_image" src="' + data_uri +'"/>';
    });
}

console.log('ml5 version:',ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/osrJJAeDC/model.json',modelLoaded);

 function modelLoaded() 
{
    console.log('Model Loaded!');
}

function check()
{
    img = document.getElementById('capture_image');
    classifier.classify(img, gotResult);
}

function gotResult(error,results) 
{
    if (error)
    {
        console.log(error);
    }
    else
    {
        console.log(results)
        document.getElementById("result_gesture_name").innerHTML = results[0].label;
        gesture = results[0].label;
        if(results[0].label == "Rock" )
        {
            document.getElementById("update_gesture").innerHTML = "&#129304;";
        }
        if(results[0].label == "Thumbs up" )
        {
            document.getElementById("update_gesture").innerHTML = "&#128532;";
        }
        if(results[0].label == "Victory" )
        {
            document.getElementById("update_Gesture").innerHTML = "&#128548;";
        }
        if(results[0].label == "Super" )
        {
            document.getElementById("update_gesture").innerHTML = "&#128546;";
        }
        if(results[0].label == "Fist" )
        {
            document.getElementById("update_gesture").innerHTML = "&#9994;";
        }
        if(results[0].label == "Clap" )
        {
            document.getElementById("update_gesture").innerHTML = "&#128079;";
        }
}
}