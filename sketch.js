let video;
let posNet;
let noseX=0;
let noseY=0;
let Leye_X=0;
let Leye_Y=0;
let Reye_X=0;
let Reye_Y=0;
let X_Cord=0;
let Y_Cord=0;
let Dist;
let flag=1;

function setup(){
createCanvas(648,480);
  video= createCapture(VIDEO);
  video.hide();
  posNet=ml5.poseNet(video);
  posNet.on('pose',gotPoses);
}

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;

}

function CheckHit()
{ if((dist(X_Cord,Y_Cord,noseX,noseY)<100)||(dist(X_Cord,Y_Cord,Leye_X,Leye_Y)<100))
{
  flag=1;
  //let CnTr+=50;
 // console.log(CnTr);
}
  
  //console.log(dist(X_Cord,Y_Cord,noseX,noseY));
  //console.log(dist(X_Cord,Y_Cord,Leye_X,Leye_Y));
}

function generateTargets()
{ X_Cord=getRndInteger(50,600);
  Y_Cord=getRndInteger(40,430);
 console.log('Targetgenrated'); 
 console.log(X_Cord);
 console.log(Y_Cord);
}


function gotPoses(poses){
  console.log(poses);
  console.log('making sense');
if(poses.length>0)
{
  let nX=poses[0].pose.keypoints[9].position.x;
  let nY=poses[0].pose.keypoints[9].position.y;
  let eXL=poses[0].pose.keypoints[10].position.x;
  let eYL=poses[0].pose.keypoints[10].position.y;
  let eXR=poses[0].pose.keypoints[2].position.x;
  let eYR=poses[0].pose.keypoints[2].position.y;
  Reye_X=eXR;
  Reye_Y=eYR;
 if(poses[0].pose.keypoints[9].score>0.2)
 {
  noseX=nX
  noseY=nY 
 }
   if(poses[0].pose.keypoints[10].score>0.2)
 {  Leye_X=eXL;
  Leye_Y=eYL;

   }
  //console.log(noseX);
  //console.log(noseY);
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
  //ellipse(noseX,noseY,40);
  //ellipse(Leye_X,Leye_Y,40);
  fill(0,255,0);
  CheckHit();
  if(flag)
  {
   generateTargets();
    flag=0;
  }
  ellipse(X_Cord,Y_Cord,40);
  
 
  //ellipse(Reye_X,Reye_Y,Dist);
  
}

function modelReady()
{
  console.log('ready!');  
}
