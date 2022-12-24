
var trex ,trex_running;
var ground,groundimage;
function preload(){
  groundimage=loadImage('ground2.png');
  trex_running=loadAnimation('trex1.png','trex3.png','trex4.png');

  

}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
  trex=createSprite(50,170,10,30);
  trex.addAnimation('run',trex_running);
  trex.scale=0.5;
  ground=createSprite(300,180,600,20);
  ground.addImage(groundimage);
 
}

function draw(){
  background("white")
  if (keyDown('space')){
    trex.velocityY=-10;

  }
  trex.velocityY=trex.velocityY+1;
  trex.collide(ground);
 drawSprites(); 

}
