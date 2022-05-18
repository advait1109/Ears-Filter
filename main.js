earX=0;
earY=0;
function preload(){
    clownNose=loadImage('https://i.postimg.cc/dVfwMnm2/49b8f4513ed077a51b1080fbff0175dc-removebg-preview.png');
}
function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet=ml5.poseNet(video,model_loaded);
    poseNet.on('pose',gotPoses)
}
function draw(){
    image(video,0,0,300,300);
    //fill('red');
    //stroke('red');
    //circle(noseX,noseY,20);
    image(clownNose,earX-30,earY-200,140,140)
}
function take_snapshot(){
    save('my_clown_picture.png');
}
function model_loaded(){
    console.log("Model Initialized")
}
function gotPoses(results){
    if (results.length>0){
        console.log(results);
        console.log(results[0].pose.rightEar.x);
        console.log(results[0].pose.rightEar.y);
        earX=results[0].pose.rightEar.x;
        earY=results[0].pose.rightEar.y;
    }
}