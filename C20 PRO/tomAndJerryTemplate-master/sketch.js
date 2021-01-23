var bgImg;
var mouse, mouseImg, mouseImg2;
var cat, catImg, catImg2;

function preload() {
    //load the images here
    bgImg = loadImage("images/garden.png");
    mouseImg = loadImage("images/jerryOne.png");
    catImg = loadImage("images/tomOne.png");
    catImg2 = loadAnimation("images/tomTwo.png","images/tomThree.png");
    mouseImg2 = loadAnimation("images/jerryTwo.png","images/jerryThree.png");
    mouseImg3 = loadImage("images/jerryFour.png");
    catImg3 = loadImage("images/tomFour.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here

    cat = createSprite(800,620,50,100);
    cat.addImage(catImg);
    cat.scale = 0.1;
    mouse = createSprite(200,620,50,100);
    mouse.addImage(mouseImg);
    mouse.scale = 0.1;

}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide

    if(cat.x - mouse.x <(cat.width - mouse.width)/2){
        cat.velocityX = 0;
        cat.x = 270;
        cat.addAnimation("catLastImg",catImg3);
        cat.changeAnimation("catLastImg");
        mouse.addAnimation("mouseLastImg",mouseImg3);
        mouse.changeAnimation("mouseLastImg");
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode === LEFT_ARROW){
    cat.velocityX = -5;
    cat.addAnimation("catRunning",catImg2);
    cat.changeAnimation("catRunning");
    mouse.addAnimation("mouseRunning",mouseImg2);
    mouse.changeAnimation("mouseRunning");
  }

}
