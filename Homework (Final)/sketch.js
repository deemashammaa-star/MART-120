let playerX, playerY, playerSize, playerSpeed;
let obsX = [], obsY = [], obsSize = [], obsColor = [], obsSpeedX = [], obsSpeedY = [];
let obsEmoji = [];
let numObstacles = 6; 

let staticObsX = -100, staticObsY = -100;
let exitX, exitY, exitSize;
let gameState = "playing";

function preload() {
  bgImg=loadImage('https://t4.ftcdn.net/jpg/03/22/13/09/240_F_322130927_iyRVujjkN8QnD3z39MXkBq44p2qRwmzU.jpg');
}

function setup() {
  createCanvas(800, 600);
  bgImg.resize(width, height);
  createPlayer();
  createObstacles();
  
  exitX = width - 80;
  exitY = height - 80;
  exitSize = 60;
}

function draw() {
 background(bgImg);

  if (gameState === "playing") {
    generateBorder();
    generateExit();
    
    drawMouseObject();
    moveObstacles();
    
    movePlayer();
    drawPlayer(); 
    
    checkCollisions(); 
    checkExit();
  } else if (gameState === "win") {
    displayWinMessage();
  } else if (gameState === "lose") {
    displayLoseMessage();
  }
}

function createPlayer() {
  playerX = 50;
  playerY = 50;
  playerSize = 25;
  playerSpeed = 5;
}

function movePlayer() {
  if (keyIsDown(LEFT_ARROW) || keyIsDown(65)) {
    playerX -= playerSpeed;
  }
  if (keyIsDown(RIGHT_ARROW) || keyIsDown(68)) {
    playerX += playerSpeed;
  }
  if (keyIsDown(UP_ARROW) || keyIsDown(87)) {
    playerY -= playerSpeed;
  }
  if (keyIsDown(DOWN_ARROW) || keyIsDown(83)) {
    playerY += playerSpeed;
  }

  playerX = constrain(playerX, 20 + playerSize/2, width - 20 - playerSize/2);
  playerY = constrain(playerY, 20 + playerSize/2, height - 20 - playerSize/2);
}

function drawPlayer() {
  fill(255);   
  textAlign(CENTER, CENTER);
  textSize(14);
  text("Spaceship", playerX, playerY - 30);        
  
  textSize(35); 
  text("🛸", playerX, playerY); 
}

function createObstacles() {
  let planets = [ '🪐', '🌕', '🌑', '🌞'];  

  for (let i = 0; i < numObstacles; i++) {
    obsX.push(random(100, width - 100));
    obsY.push(random(100, height - 100));
    obsSize.push(random(30, 70));
    obsColor.push(color(random(150, 255), random(50, 150), random(50, 150))); 
    obsSpeedX.push(random(-4, 4));
    obsSpeedY.push(random(-4, 4));
    
    obsEmoji.push(random(planets)); 
  }
}
function moveObstacles() {
  for (let i = 0; i < numObstacles; i++) {
    obsX[i] += obsSpeedX[i];
    obsY[i] += obsSpeedY[i];

    if (obsX[i] > width + obsSize[i]/2) {
      obsX[i] = -obsSize[i]/2;
    } else if (obsX[i] < -obsSize[i]/2) {
      obsX[i] = width + obsSize[i]/2;
    }

    if (obsY[i] > height + obsSize[i]/2) {
      obsY[i] = -obsSize[i]/2;
    } else if (obsY[i] < -obsSize[i]/2) {
      obsY[i] = height + obsSize[i]/2;
    }

    if (staticObsX !== -100) {
      let distToStatic = dist(obsX[i], obsY[i], staticObsX, staticObsY);
      if (distToStatic < (obsSize[i]/2) + 20) { 
        obsSpeedX[i] *= -1;    
        obsSpeedY[i] *= -1;    
        
        obsX[i] += obsSpeedX[i] * 2; 
        obsY[i] += obsSpeedY[i] * 2;
      }
    }

    textAlign(CENTER, CENTER);
    textSize(obsSize[i]);      
    text(obsEmoji[i], obsX[i], obsY[i]);
  }
}

function mousePressed() {
  if (gameState === "playing") {
    staticObsX = mouseX;
    staticObsY = mouseY;
  }
}

function drawMouseObject() {
  if (staticObsX !== -100) {
    fill(0, 255, 100);
    rectMode(CENTER);
    rect(staticObsX, staticObsY, 40, 40, 10);   
    rectMode(CORNER);
    
    noStroke();
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(14);
    text("shield", staticObsX, staticObsY - 35);
  }
}

function generateBorder() {
  stroke(255);
  strokeWeight(5);
  noFill();
  rect(10, 10, width - 20, height - 20);
  
  noStroke();
  fill(255);
  textAlign(RIGHT, TOP);
  textSize(16);
  text("Hint: use your mouse to create protection shield!!", width - 25, 25);
}

function generateExit() {
  fill(0, 255, 0, 150); 
  noStroke();
  ellipse(exitX, exitY, exitSize + sin(frameCount * 0.1) * 10); 
  fill(0);
  ellipse(exitX, exitY, exitSize - 20);

  fill(255);    
  textAlign(CENTER, CENTER);
  textSize(16);
  text("end", exitX, exitY - 45);  
}

function checkCollisions() {
  for (let i = 0; i < numObstacles; i++) {
    let d = dist(playerX, playerY, obsX[i], obsY[i]);
    if (d < playerSize/2 + obsSize[i]/2) {
      gameState = "lose"; 
    }
  }
}

function checkExit() {
  let d = dist(playerX, playerY, exitX, exitY);
  if (d < playerSize/2 + exitSize/2 - 10) {
    gameState = "win";
  }
}

function displayWinMessage() {
  background(0, 150, 0);
  fill(255);
  textAlign(CENTER, CENTER);
  textSize(40);
  text("You Won!", width/2, height/2);
}

function displayLoseMessage() {
  background(150, 0, 0);
  fill(255);
  textAlign(CENTER, CENTER);
  textSize(40);
  text("Game Over You Crashed!", width/2, height/2);
}