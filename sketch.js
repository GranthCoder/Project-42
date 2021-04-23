var play,close,bgImg,bgMusic,storyPanel,storyImg,story,MissionMusic,playButton,Soldier,soldierImg,bgImg,buttonImg,gun,mobile,SoldierINV;

var gameState = 0;

function preload(){
    storyImg = loadImage("images/mission.PNG");
    soldierImg = loadImage("images/soldier 2.png");
    bgImg = loadImage("images/soldier bg img.PNG");
    buttonImg = loadImage("images/playImg.png");
    MissionMusic = loadSound("Mission Sound.mp3")
}

function setup(){
  createCanvas(displayWidth-20,displayHeight-20);
  storyPanel = createSprite(displayWidth/2,displayHeight-20,displayWidth/2+200,displayHeight/2-20);
  storyPanel.shapeColor = "white";
  storyPanel.velocityY = -5;

  playButton = createSprite(displayWidth/2,displayHeight/2-20,50,30);
  playButton.addImage(buttonImg);
  playButton.scale = 0.1;
  playButton.visible = false;

  Soldier = createSprite(50,height/2,50,75);
  Soldier.addImage(soldierImg);
  Soldier.scale = 0.25;
  Soldier.visible = false;

  gun = createSprite(Soldier.x+5,Soldier.y);
  gun.shapeColor = "red";
  gun.visible = false;


  mobile = createSprite(Soldier.x+5,Soldier.y);
  mobile.shapeColor = "green";
  mobile.visible = false;
}

function draw(){

  if (gameState===0){
    //MissionMusic.play();
    //MissionMusic.amp(0.2);
    background(bgImg);
    storyPanel.addImage(storyImg);
    if(storyPanel.y<0){
      playButton.visible = true;
      if(mousePressedOver(playButton)){
        gameState=1;
      }
    }
  }

  if(gameState===1){
    background(0);
    playButton.visible = false;
    Soldier.visible = true;
    
    gun.x = Soldier.x+5;
    gun.y = Soldier.y;
    gun.visible = true;

    mobile.x = Soldier.x+5;
    mobile.y = Soldier.y;gun.x = Soldier.x+5;

    camera.position.x = Soldier.x;
    camera.position.y = Soldier.y;

    KEYDOWN();
    keyUP(); 
  }

drawSprites();
}

function KEYDOWN(){
  if(keyDown(RIGHT_ARROW)){
    Soldier.setVelocity(5,0);
  }
  if(keyDown(LEFT_ARROW)){
    Soldier.setVelocity(-5,0);
  }
  if(keyDown(UP_ARROW)){
    Soldier.setVelocity(0,-5);
  }
  if(keyDown(DOWN_ARROW)){
    Soldier.setVelocity(0,5);
  }

  if(keyDown("1")){
    gun.visible = true;
    mobile.visible = false;
  }
  if(keyDown("2")){
    gun.visible = false;
    mobile.visible = true;
  }
}

function keyUP(){
  if(keyWentUp(RIGHT_ARROW)){
    Soldier.setVelocity(0,0);
  }
  if(keyWentUp(LEFT_ARROW)){
    Soldier.setVelocity(0,0);
  }
  if(keyWentUp(UP_ARROW)){
    Soldier.setVelocity(0,0);
  }
  if(keyWentUp(DOWN_ARROW)){
    Soldier.setVelocity(0,0);
  }
}