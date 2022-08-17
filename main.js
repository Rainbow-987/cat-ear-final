
var ear_x = 0;
var ear_y = 0;
function preload(){
    filter_img = loadImage("cat_ear.gif");
}

function setup()
{
    canvas = createCanvas(400,400);
    canvas.center();
    
    video = createCapture(VIDEO);
    video.hide();

    my_posenet = ml5.poseNet(video, model_loaded);
    
    my_posenet.on("pose", got_results);
    
}

function draw(){
    image(video, 0, 0, 400,400);
    image(filter_img, ear_x, ear_y,200,150);
}



function model_loaded(){
    console.log("poseNet is  model loaded ");
}


function takeSnap()
{
    save("cat_ears_filter.png");
}

function  got_results(results){
   if(results.length > 0){
    console.log(results);

    ear_x = results[0].pose.leftEar.x-310;
    ear_y = results[0].pose.leftEar.y-220;
   }

}
    

    


