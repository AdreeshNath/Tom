var garden,gardenImg;
var jerry,jerryImg,jerryImg2;
var tom,tomImg,tomImg2;


function preload() {
    //load the images here
   gardenImg = loadImage("images/garden.png");
   jerryImg = loadAnimation("images/jerryTwo.png","images/jerryThree.png");
   tomImg =loadAnimation("images/tomTwo.png","images/tomThree.png");
   tomImg2 = loadImage("images/tomFour.png");
   jerryImg2 =loadImage("images/jerryFour.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
   garden = createSprite(500,400,1000,800);
   garden.addImage("gar",gardenImg);


   
   
    jerry = createSprite(250,600,50,50);
    jerry.addImage("jerr",jerryImg2);
    jerry.scale=0.2;
    jerry.debug=true;
    //jerry.setCollider(rectangle",0,0,jerry.width,trex.height)
    jerry.setCollider("rectangle",0,0,50,50);


    tom = createSprite(750,600,50,50);
    tom.addImage("tom",tomImg2);
    tom.scale=0.2;  
    
}

function draw() {

    background("black");
    //Write condition here to evalute if tom and jerry collide
    if(keyCode === LEFT_ARROW ){
    tom.velocityX=-2;
    tom.addAnimation("cat",tomImg);
    tom.changeAnimation("cat");
    }
    
    if(tom.isTouching(jerry)){
        tom.velocityX=0
        tom.addAnimation("tom",tomImg2);
        tom.changeAnimation("tom");

        jerry.addAnimation("jerry2",jerryImg);
        jerry.changeAnimation("jerry2");
    }
    

    drawSprites();
}


