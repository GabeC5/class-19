var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"

function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
}

function setup() {
  createCanvas(600, 600);
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;
  ghost = createSprite(300,300,20,30);
  ghost.scale = 0.3
  ghost.addImage(ghostImg)

  doorsGroup = new Group()
    climbersGroup = new Group()
  
}

function draw() {
  background(200);
  
  if(tower.y > 400){
      tower.y = 300
    }
    if(keyDown("left_arrow")){
      ghost.x = ghost.x -3
    }

    if(keyDown("right_arrow")){
      ghost.x = ghost.x +3
    }

    if(keyDown("space")){
      ghost.velocityY = -3
    }
    ghost.velocityY = ghost.velocityY+0.2
    spawnObjects()
drawSprites()

  }

  function spawnObjects(){
    if(frameCount % 220 ===0)
    {

    
    door = createSprite(200,5,20,20)
door.addImage(doorImg)
door.velocityY = 1
door.x = Math.round(random(50,500))
doorsGroup.add(door)

climber = createSprite(200,70,20,20)
climber.addImage(climberImg)
climber.velocityY = 1
climber.x = door.x
climbersGroup.add(climber)

door.lifetime = 550
climber.lifetime =550
invisibleBlock = createSprite (200,90,20)
invisibleBlock.width= climber.width
invisibleBlock.height = 2
invisibleBlock.debug = true
invisibleBlock.velocityY= 1
invisibleBlock.x = door.x 
    }
    
  }
