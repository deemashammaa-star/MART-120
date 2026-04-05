let playerX = 50;
let playerY = 200;
let playerSpeed = 5;

let obs1X = 300, obs1Y = 100;
let obs1SpeedX, obs1SpeedY;

let obs2X = 400, obs2Y = 300;
let obs2SpeedX, obs2SpeedY;

let staticObsActive = false;
let staticObsX = 0;
let staticObsY = 0;

let exitX = 500, exitY = 150, exitW = 80, exitH = 100;
let hasWon = false;

function setup() {
  createCanvas(600, 400);
  
  obs1SpeedX = random(-4, 4);
  obs1SpeedY = random(-4, 4);
  
  obs2SpeedX = random(-5, 5);
  obs2SpeedY = random(-5, 5);
}

function draw() {
  background(220);

  if (hasWon) {
    fill(0, 150, 0);
    textSize(50);
    textAlign(CENTER, CENTER);
    text("You Won!", width / 2, height / 2);
  } 

  else {
    
    fill(0, 255, 0);  
    rect(exitX, exitY, exitW, exitH);
    fill(0);
    textSize(16);
    text("EXIT", exitX + 20, exitY + 50);

    if (playerX > exitX && playerX < exitX + exitW && playerY > exitY && playerY < exitY + exitH) {
      hasWon = true;
    }

    if (keyIsDown(UP_ARROW)) {
      playerY -= playerSpeed;
    } else if (keyIsDown(DOWN_ARROW)) {
      playerY += playerSpeed;
    }

    if (keyIsDown(LEFT_ARROW)) {
      playerX -= playerSpeed;
    } else if (keyIsDown(RIGHT_ARROW)) {
      playerX += playerSpeed;
    }

    obs1X += obs1SpeedX;
    obs1Y += obs1SpeedY;
    
    obs2X += obs2SpeedX;
    obs2Y += obs2SpeedY;

    if (obs1X > width) {
      obs1X = 0;
    } else if (obs1X < 0) {
      obs1X = width;
    }
    
    if (obs1Y > height) {
      obs1Y = 0;
    } else if (obs1Y < 0) {
      obs1Y = height;
    }

    if (obs2X > width) {
      obs2X = 0;
    } else if (obs2X < 0) {
      obs2X = width;
    }
    
    if (obs2Y > height) {
      obs2Y = 0;
    } else if (obs2Y < 0) {
      obs2Y = height;
    }

    fill(255, 0, 0); 
    circle(obs1X, obs1Y, 40);

    fill(0, 0, 255); 
    rect(obs2X, obs2Y, 60, 60);

    if (staticObsActive) {
      fill(100);
      rect(staticObsX, staticObsY, 50, 50);
    }

    fill(255, 255, 0);
    circle(playerX, playerY, 30);
    
  }
}

function mousePressed() {
  if (!staticObsActive) {
    staticObsActive = true;
    staticObsX = mouseX;
    staticObsY = mouseY;
  }
}