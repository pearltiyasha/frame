function preload(){

}
function setup(){
    canvas=createCanvas(640,640);
    canvas.position(110,250);
    video=createCapture(VIDEO);
    video.hide()
    

}
function draw(){
    image(video,100,100,400,400);
    fill(224, 45, 188);
    stroke(224, 45, 188);
    circle(50,50,80);
    circle(530,50,80);
    circle(50,530,80);
    circle(530,530,80);
    fill(235, 64, 52);
    stroke(235, 64, 52);
    rect(83,45,410,35);
    rect(83,500,410,35);
    rect(55,90,35,415);
    rect(510,90,35,415);

}
function take_snapshot(){
    save('name.png');
}