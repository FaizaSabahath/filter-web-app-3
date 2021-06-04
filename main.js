leftShoulderY = 0;
leftShoulderX = 0;
rightShoulderX = 0;
rightShoulderY = 0;
function preload(){
   pommy = loadImage("https://i.postimg.cc/15zdWVk2/pommy-removebg-preview.png");
   pink = loadImage("https://i.postimg.cc/050qrKgB/btrfky-removebg-preview.png")
}
function setup(){
    canvas = createCanvas(300,300);
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
    canvas.position(550,200)
}
function modelLoaded(){
    console.log("PoseNet is Initialized")
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results)
        leftShoulderY = results[0].pose.leftShoulder.y-65;  
        leftShoulderX = results[0].pose.leftShoulder.x-15;
        console.log("ls x = "+ leftShoulderX);
        console.log("ls y = "+ leftShoulderY);
        rightShoulderY = results[0].pose.rightShoulder.y-35;  
        rightShoulderX = results[0].pose.rightShoulder.x-25;
        console.log("rs x = "+ rightShoulderX);
        console.log("rs y = "+ rightShoulderY);
    }
}
function draw(){
 image(video, 0, 0, 300, 300)
 image(pommy, leftShoulderX, leftShoulderY, 100, 100)
 image(pink, rightShoulderX, rightShoulderY, 100, 100)
}