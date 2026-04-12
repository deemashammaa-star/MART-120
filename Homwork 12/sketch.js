let playerX,playerY;
let objX,objY,objSize;
let speed=5;

function setup(){
  createCanvas(400,400);
  createPlayer();
  createObstacles();
}

function draw(){
  background(220);
  generateBorder();
  generateExit();
  
  movePlayer();
  drawPlayer();
    
  moveObstacle1();
  moveObstacle2();
  drawObstacles();
  
  drawObjectByMouse();

  displayWinMessage();
  
}

function createPlayer(){
  playerX=50;
  playerY=50;
}

function drawPlayer(){
  fill(50,50,255);
  stroke(0);
  strokeWeight(5);
  rect(playerX,playerY,30,30);
}

function movePlayer(){
  if(keyIsPressed){
    if(key==='w'){playerY-=speed}
    if(key==='a'){playerX-=speed}
    if(key==='d'){playerX+=speed}
    if(key==='s'){playerY+=speed}
  }
}

function drawObjectByMouse(){
  if(mouseIsPressed){
    fill(255,0,0);
    noStroke();
    circle(mouseX,mouseY,30);
  }
}

function generateExit() {
  fill(200, 100, 255);   
  rect(width - 80, height - 80, 60, 60);
  
  fill(255);
  textSize(16);
  textAlign(CENTER, CENTER);
  text("EXIT", width - 50, height - 50);
}

function generateBorder() {
  noFill();
  stroke(0);
  strokeWeight(10);
  rect(5, 5, width - 10, height - 10);
  strokeWeight(1); 
  noStroke();
}

function createObstacles() {
  ob1X = 200; ob1Y = 200; ob1Size = 40;
  ob2X = 400; ob2Y = 300; ob2Size = 65;
}

function moveObstacle1() {
  ob1X += random(-4, 4);
  ob1Y += random(-4, 4);
  
  if (ob1X > width) ob1X = 0;
  if (ob1X < 0) ob1X = width;
  if (ob1Y > height) ob1Y = 0;
  if (ob1Y < 0) ob1Y = height;
}

function moveObstacle2() {
  ob2X += random(0, 5);
  ob2Y += random(0, 5);
  
  if (ob2X > width) ob2X = 0;
  if (ob2X < 0) ob2X = width;
  if (ob2Y > height) ob2Y = 0;
  if (ob2Y < 0) ob2Y = height;
}


function drawObstacles() {
  fill(255, 0, 0);
  square(ob1X, ob1Y, ob1Size);
  
  fill(0, 255, 0);  
  square(ob2X, ob2Y, ob2Size);
}

function displayWinMessage() {
  if (playerX > width - 100 && playerY > height - 100) {
    fill(0, 150, 0);
    textSize(40);
    textAlign(CENTER, CENTER);
    text("You Win!", width / 2, height / 2);
  }
}