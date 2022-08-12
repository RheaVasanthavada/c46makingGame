var PLAY = 1;
var END = 0;
var gameState = PLAY;

var jungleImg, jungle
var man, manImg
var invisibleGround


function preload(){

  jungleImg = loadImage("./images/bg.png")
  manImg = loadImage("./images/runningMan.png")
 
}

function setup() {
  createCanvas(1500, 800);
  
  jungle = createSprite(800,400, 400, 20)
  jungle.addImage("jungle",jungleImg);
  jungle.scale = 0.5
  jungle.velocityX = -3

  man = createSprite(150, 650, 50, 50)
  man.addImage("man",manImg);
  man.scale = 0.7
  man.setCollider("rectangle", 0,0, 350,400)
  man.debug= true

  invisibleGround = createSprite(750, 800, 1600, 10)
  invisibleGround.debug=true
  invisibleGround.setCollider("rectangle", 0,0, 1600,20)
  //invisibleGround.visible = false;

 
}

function draw() {

  background("white");
  
  //infinite moving affect
  if(jungle.x<300){
     jungle.x=width/2
  }
     
  //jumping of man
  if(keyDown("UP_ARROW")){
     man.velocityY = -8
  }
  
  //gravity is always there
  man.velocityY = man.velocityY+0.6

  //to make man stay on the ground
  man.collide(invisibleGround);

  drawSprites();
}

function spawnClouds() {
  //write code here to spawn the clouds
  
}

function reset(){
 
}

function spawnObstacles() {
 
}


