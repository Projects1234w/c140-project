function setup() 
{
    canvas = createCanvas(700, 600);
    canvas.parent('canvas');

    video = createCapture(VIDEO);
    video.size(700, 600);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
}

function modelLoaded() 
{
    console.log("Model Loaded");
}

function draw() 
{
    image(video, 0, 0, 700, 600); 
}
//funtion paddleInCanvas call

//left paddle

//pc computer paddle

//function midline call
    
//funtion drawScore call 
   
//function models call  
   
//function move call which in very important

//function reset when ball does notcame in the contact of padde

//function midline draw a line in center

//function drawScore show scores

//very important function of this game

//width height of canvas speed of ball

//this function help to not go te paddle out of 