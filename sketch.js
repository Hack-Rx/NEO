let video;
let posNet;
let noseX;
let noseY;
let Leye_X=0;
let Leye_Y=0;
let Reye_X=0;
let Reye_Y=0;
let Dist;
function setup(){
createCanvas(648,480);
  video= createCapture(VIDEO);
  video.hide();
  posNet=ml5.poseNet(video);
  posNet.on('pose',gotPoses);
}

function gotPoses(poses){
  console.log(poses);
  console.log('making sense');
if(poses.length>0)
{
  let nX=poses[0].pose.keypoints[0].position.x;
  let nY=poses[0].pose.keypoints[0].position.y;
  let eXL=poses[0].pose.keypoints[1].position.x;
  let eYL=poses[0].pose.keypoints[1].position.y;
  let eXR=poses[0].pose.keypoints[2].position.x;
  let eYR=poses[0].pose.keypoints[2].position.y;
  Leye_X=eXL;
  Leye_Y=eYL;
  Reye_X=eXR;
  Reye_Y=eYR;
  noseX=nX;
  noseY=nY;
  
  console.log(noseX);
  console.log(noseY);
  /*ellipse(Leye_X,Leye_Y,50);
  ellipse(Reye_X,Reye_Y,50);
  */
}
}

function draw(){
  background(220);
  image(video,0,0);
  fill(255,0,0);
  Dist=dist(Leye_X,Leye_Y,Reye_X,Reye_Y);
  Dist=0.75*Dist;
  ellipse(noseX,noseY,Dist);
  //ellipse(Leye_X,Leye_Y,Dist);
  //ellipse(Reye_X,Reye_Y,Dist);
  
}
function modelReady()
{
  console.log('ready!');
  
  
}
