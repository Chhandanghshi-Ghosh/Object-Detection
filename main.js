pict=""
status=""
function preload(){
    pict=loadImage("dog_cat.jpg");
}

function setup(){
    canvas= createCanvas(650,450);
    canvas.center();

    objectDetector=ml5.objectDetector('cocossd',modelLoaded)
    document.getElementById("status").innerHTML="Status: Detecting Objects"
}

function modelLoaded(){
    console.log('Model Loaded!!!');
    status=true;
    objectDetector.detect(pict,gotResults);
}

function gotResults(error,results){
    if(error){
        console.log(error)
    }
    console.log(results)
}

function draw(){
    //dog
    image(pict,0,0,650,450 );
    fill("#ff0000");
    stroke("green");
    text("Dog",100,90);
    noFill();
    rect(36,72,447,366)
    //cat
    fill("#ff0000");
    stroke("blue");
    text("Cat" ,350,90);
    noFill();
    rect(380,69,341,353);
}
