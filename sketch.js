var r = 0;
var g = 0;
var b = 0;
var bR = 0;
var bG = 0;
var bB = 0;
var saveButton;
var clearButton;
var gameState = "intro";
var logo,logoImg;
var nameB, nameBImg;
var okB, okBImg;
var okBt, okBtImg;
var mBt, mBImg;
var input1, inputV;

var penSize = 1;

function preload(){
    logoImg = loadImage("logo.png");
    nameBImg = loadImage("inputBox.png");
    okBImg = loadImage("ok.png");
    guideImg = loadImage("guide.jpg");
}

function setup(){
    createCanvas(1200,650);

    logo = createSprite(600,200,1300,600);
    logo.addImage(logoImg);
    logo.visible = true;

    nameB = createSprite(700,400,1300,600);
    nameB.addImage(nameBImg);
    nameB.visible = true;

    okB = createSprite(1100,400,1300,600);
    okB.addImage(okBImg);
    okB.visible = true;

    okBt = createSprite(1100,560,1300,600);
    okBt.addImage(okBImg);
    okBt.visible = false;

    input1 = createInput("");
    input1.position(825,430);
    input1.style('width', '350px');
    input1.style('height', '40px');
    input1.style('font-size', '30px');

    guide = createSprite(600,300,1300,600);
    guide.addImage(guideImg);
    guide.visible = false;

    saveButton = createButton('Download Your Drawing');
    saveButton.position(1200, height - 20);
    saveButton.mousePressed(saveImg);
    saveButton.hide();

    clearButton = createButton('Clear Your Drawing');
    clearButton.position(1220, height + 10);
    clearButton.mousePressed(clearImg);
    clearButton.hide();

    background(bR,bG,bB);
    
}


function draw(){

    if(gameState === "intro"){
        if(mousePressedOver(okB)){
            startState();  
          }
    }

    if(gameState === "guide"){
        if(mousePressedOver(okBt)){
            drawState();  
          }
    }

    if(gameState === "draw"){

    stroke(r,g,b);

    strokeWeight(penSize);

    if(mouseIsPressed && mouseY < height - 50){
        line(pmouseX, pmouseY, mouseX, mouseY);
    }
    

    // Menu Border
    stroke(0);
    strokeWeight(3);

    fill(255);
    rect(0,550,1500,100);

    line(0,height-100,width,height-100);
    line(310, 660, 310, 550); 
    line(510, 660, 510, 550); 
    line(830, 660, 830, 550); 
    line(940, 660, 940, 550); 

    // Brush Color Buttons

    stroke(0);
    strokeWeight(1);
    fill(255,182,193);
    rect(0,height-50,50,50);
    fill(255,128,0);
    rect(50,height-50,50,50);
    fill(255,255,0);
    rect(100,height-50,50,50);
    fill(255);
    rect(150,height-50,50,50);
    fill(0,0,255);
    rect(200,height-50,50,50);
    fill(0);
    rect(250,height-50,50,50);

    fill(0);
    textSize(30);
    text("Brush Color",80,590);



    if(mouseIsPressed && mouseX < 50 && mouseY > height-50){
        r = 255;
        g = 182;
        b = 193;
    }

    if(mouseIsPressed && mouseX > 50 && mouseX < 100 && mouseY > height-50){
        r = 255;
        g = 128;
        b = 0;
    }

    if(mouseIsPressed && mouseX > 100 && mouseX < 150 && mouseY > height-50){
        r = 255;
        g = 255;
        b = 0;
    }

    if(mouseIsPressed && mouseX > 150 && mouseX < 200 && mouseY > height-50){
        r = 255;
        g = 255;
        b = 255;
    }

    if(mouseIsPressed && mouseX > 200 && mouseX < 250 && mouseY > height-50){
        r = 0;
        g = 0;
        b = 255;
    }

    if(mouseIsPressed && mouseX > 250 && mouseX < 300 && mouseY > height-50){
        r = 0;
        g = 0;
        b = 0;
    }
    
    // Background Color Buttons

    stroke(0);
    strokeWeight(1);
    fill(255,0,0);
    rect(520,height-50,50,50);
    fill(0,255,0);
    rect(570,height-50,50,50);
    fill(0,0,255);
    rect(620,height-50,50,50);
    fill(255);
    rect(670,height-50,50,50);
    fill(0);
    rect(720,height-50,50,50);
    fill(0,255,128);
    rect(770,height-50,50,50);

    fill(0);
    textSize(30);
    text("Background Color",550,590);

    if(mouseIsPressed && mouseX > 520 && mouseX < 570 && mouseY > height-50){
        bR = 255;
        bG = 0;
        bB = 0;
        background(bR,bG,bB);
    }

    if(mouseIsPressed && mouseX > 570 && mouseX < 620 && mouseY > height-50){
        bR = 0;
        bG = 255;
        bB = 0;
        background(bR,bG,bB);
    }

    if(mouseIsPressed && mouseX > 620 && mouseX < 670 && mouseY > height-50){
        bR = 0;
        bG = 0;
        bB = 255;
        background(bR,bG,bB);
    }

    if(mouseIsPressed && mouseX > 670 && mouseX < 720 && mouseY > height-50){
        bR = 255;
        bG = 255;
        bB = 255;
        background(bR,bG,bB);
    }

    if(mouseIsPressed && mouseX > 720 && mouseX < 770 && mouseY > height-50){
        bR = 0;
        bG = 0;
        bB = 0;
        background(bR,bG,bB);
    }
    if(mouseIsPressed && mouseX > 770 && mouseX < 820 && mouseY > height-50){
        bR = 0;
        bG = 255;
        bB = 128;
        background(bR,bG,bB);
    }

    // Eraser
    fill(255);
    stroke(0);
    strokeWeight(2);
    ellipse(880,height-30,50,50);

    fill(0);
    textSize(30);
    text("Eraser",840,580);

    if(mouseIsPressed && mouseX > 880 - 25 && mouseX < 880 + 25 && mouseY > height-50){
        r = 255;
        g = 255;
        b = 255;
        penSize = 50;
     }

    // Pen Size Buttons

    fill(r,g,b);
    stroke(0);
    ellipse(350,height-25,50,50);
    ellipse(400,height-25,30,30);
    ellipse(440,height-25,15,15);
    ellipse(470,height-25,10,10);
    ellipse(490,height-25,5,5);

    fill(0);
    textSize(30);
    text("Brush Size",330,590);

    if(mouseIsPressed && mouseX > 350 - 25 && mouseX < 350 + 25 && mouseY > height-50){
       penSize = 50;
    }
    if(mouseIsPressed && mouseX > 400 - 25 && mouseX < 400 + 25 && mouseY > height-50){
        penSize = 30;
     }
     if(mouseIsPressed && mouseX > 440 - 25 && mouseX < 440 + 25 && mouseY > height-50){
        penSize = 15;
     }

     if(mouseIsPressed && mouseX > 470 - 5 && mouseX < 470 + 5 && mouseY > height-50){
        penSize = 8;
     }

     if(mouseIsPressed && mouseX > 490 - 5 && mouseX < 490 + 5 && mouseY > height-50){
        penSize = 1;
     }

    }


     drawSprites();

}

function saveImg(){
    fill(0);
    textSize(30);
    text("Developed By",960,580);
    text("Subhojit Ghosh",960,620);

    fill(254,0,0);
    rect(820,10,380,50);
     fill(255);
     textSize(30);
     text("Drawing Made By: " + inputV,830,40);

    save('My Drawing');
}

function clearImg(){

    clear();

    bR = 255;
    bG = 255;
    bB = 255;

    background(bR,bG,bB);
    
}

function startState(){

    logo.visible = false;
    nameB.visible = false;
    okB.visible = false;
    input1.hide();

    inputV = input1.value();

    bR = 0;
    bG = 0;
    bB = 0;

    background(bR,bG,bB);

    guide.visible = true;
    okBt.visible = true;

    gameState = "guide";
}
function drawState(){

    guide.visible = false;
    okBt.visible = false;

    saveButton.show();
    clearButton.show();

    bR = 255;
    bG = 255;
    bB = 255;

    background(bR,bG,bB);

    gameState = "draw";
    
}

