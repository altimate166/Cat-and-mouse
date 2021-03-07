var gardenI;
var garden;
var cat;
var cat1;
var cat2;
var cat3;
var m;
var m1;
var m2;
var m3;

function preload() {
    //load the images here
    gardenI = loadImage("garden.png");
    cat1 = loadImage("cat1.png");
    cat2 = loadAnimation("cat2.png","cat3.png");
    cat3 = loadImage("cat4.png");
    m1 = loadImage("cat1.png");
    
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
garden = createSprite(500,400);
garden.addImage(gardenI);
cat = createSprite(200,400);
cat.addImage(cat1);
m = createSprite(700,400);
m.addImage(mouse1);
}

function draw() {
    background(255);
    text(m.x+','+m.y,10,45);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x - m.x<(cat.width-m.width)/2){
        cat.addAnimation("catLastImage",cat3);
        cat.changeAnimation("catLastimage",cat3);
    }
    drawSprites();
}


function keyPressed(){

    //For moving and changing animation write code here
    if(keyCode === LEFT_ARROW){
        cat.velocityX = -5;
        cat.addAnimation("catRunning",cat2);
        cat.changeAnimation("catRunning",cat2);
    }
  
  }
