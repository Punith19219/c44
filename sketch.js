var enemy,soldier;
var enemyImage,soldierImage,backgroundImage;
var invisibleGround;

function preload(){
    
    backgroundImage = loadImage("./assets/bg.jpg");
    enemyImage = loadAnimation("./assets/enemy (1).png","./assets/enemy (2).png","./assets/enemy (3).png","./assets/enemy (4).png","./assets/enemy (5).png","./assets/enemy (6).png");
    soldierImage = loadAnimation("./assets/soldier (1).png","./assets/soldier (2).png","./assets/soldier (4).png","./assets/soldier (5).png","./assets/soldier (6).png");

}

function setup() {

createCanvas(6000,600)

  soldier = createSprite(90,400);
  soldier.addAnimation("running", soldierImage);
  soldier.scale = 0.5;

  invisibleGround = createSprite(10,510,6000,10);
  invisibleGround.visible = false;
}

function draw() {

background(backgroundImage);



  handlePlayerControls();
  
drawSprites()


}

function handlePlayerControls() {
    
  if(keyDown("space")) {
    soldier.y -=60;
    }
    
    soldier.velocityY = soldier.velocityY + 7
    soldier.collide(invisibleGround);
  
    
  
    if (keyDown("d")) {
      soldier.x+= 5;
      
    }
      soldier.x=camera.position.x-2900;
    
}



