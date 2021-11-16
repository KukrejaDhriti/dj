

function setup()
{
    canvas = createCanvas(600, 500);
    canvas.center();
    video= createCapture(VIDEO);
    video.hide();
    poseNet= ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log('PoseNet Is Initialized')
}

function gotPoses(results)
{
  if(results.length > 0)
  {
      console.log(results);
      scoreLeftWrist = results[0].pose.keypoints[9].score;
      console.log("scoreLeftWrist = " + scoreLeftWrist);

      scoreRightWrist = results[0].pose.keypoints[10].score;
      console.log("scoreRightWrist = " + scoreRightWrist);

      leftWristX = results[0] .pose.leftWrist.x;
      leftWristY = results[0] .pose.leftWrist.y;
      console.log("leftWristX = " + leftWristX +"leftWristY = " + leftWristY);
     
      rightWristX = results[0] .pose.rightWrist.x;
      rightWristY = results[0] .pose.rightWrist.y;
      console.log("rightWristX = " + rightWristX +"rightWristY = " + rightWristY);
  }
}

function draw()
{
   image(video, 0, 0, 600, 500);
  fill("#631738");
  stroke("#176342");
  //if(scoreLeftWrist > 0.2)
 // {
circle(rightWristX, rightwristY, 20);

if(rightwristY >0 && rightwristY <= 100)
{
    document.getElementById("speed").innerHTML = "Speed = 0.5x";
    song.rate(0.5);
}
else if(rightwristY >100 && rightwristY <= 200)
{
    document.getElementById("speed").innerHTML = "Speed = 1x";
    song.rate(1);
}
else if(rightwristY >200 && rightwristY <= 300)
{
    document.getElementById("speed").innerHTML = "Speed = 1.5x";
    song.rate(1.5);
}
else if(rightwristY >300 && rightwristY <= 400)
{
    document.getElementById("speed").innerHTML = "Speed = 2x";
    song.rate(2);
}
else if(rightwristY >400 && rightwristY <= 500)
{
    document.getElementById("speed").innerHTML = "Speed = 2.5x";
    song.rate(2.5);
}
 // }
 //if(scoreLeftWrist > 0.2)
 // {
  circle(leftWristX, leftWristY, 20);
  InNumberleftWristY = Number(leftWristY);
  remove_decimals = floor(InNumberleftWristY);
volume = remove_decimals/500;
document.getElementById("volume").innerHTML = "Volume = "+ volume;
song.setVolume(volume);
// }
}

scoreLeftWrist = 0;
scoreRightWrist = 0;
song = "";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;


function preload()
{
    song= loadSound("Shake It Off.mp3");
}

function play()
{
    song.play();
    song.setVolume(1);
    song.rate(1);
}