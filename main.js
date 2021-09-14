

Webcam.set({width:350,height:300,image_format:'png',png_quality:90});
 var camera=document.getElementById("camera");
 Webcam.attach("camera");

 function textsnapshot(){
     Webcam.snap(function(data_uri){
         document.getElementById("result").innerHTML = '<img id="capture_image" src="'+data_uri+'"/>';
     });
 }
 console.log('ml5 version', ml5.version);
 classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/eUGbU9Abu/model.json",modelLoaded);

 function modelLoaded(){
     console.log("modelLoaded");
 }