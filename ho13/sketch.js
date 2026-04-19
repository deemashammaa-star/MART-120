let px, py;
let speed = 5;

let ox = [];
let oy = [];
let oSize = [];
let oColors = [];

let staticX = [];
let staticY = [];

function setup() {
  createCanvas(600, 400);
  px = 50;
  py = 50;

  for (let i = 0; i < 5; i++) {
    ox.push(random(width));
    oy.push(random(height));
    oSize.push(random(20, 50));
    oColors.push(color(random(255), random(255), random(255)));
  }
}

function draw() {
  background(220);

  drawBorder();
  drawExit();
  
  handlePlayer();
  handleObstacles();
  handleStaticOnes();
  
  checkWin();
}

function handlePlayer() {
  if (keyIsDown(UP_ARROW) || key === 'w') py -= speed;
  if (keyIsDown(DOWN_ARROW) || key === 's') py += speed;
  if (keyIsDown(LEFT_ARROW) || key === 'a') px -= speed;
  if (keyIsDown(RIGHT_ARROW) || key === 'd') px += speed;

  fill(50, 50, 255);
  rect(px, py, 30, 30);
}

function handleObstacles() {
  for (let i = 0; i < ox.length; i++) {
    ox[i] += random(-2, 2);
    oy[i] += random(-2, 2);

    if (ox[i] > width) ox[i] = 0;
    if (ox[i] < 0) ox[i] = width;
    if (oy[i] > height) oy[i] = 0;
    if (oy[i] < 0) oy[i] = height;

    fill(oColors[i]);
    ellipse(ox[i], oy[i], oSize[i]);
  }
}

function mousePressed() {
  staticX.push(mouseX);
  staticY.push(mouseY);
}

function handleStaticOnes() {
  fill(100);
  for (let i = 0; i < staticX.length; i++) {
    rect(staticX[i], staticY[i], 20, 20);
  }
}

function drawExit() {
  fill(30, 255, 30);
  rect(width - 60, height - 60, 40, 40);
}

function drawBorder() {
  noFill();
  stroke(0);
  strokeWeight(10);
  rect(0, 0, width, height);
  strokeWeight(1);
  noStroke();
}

function checkWin() {
  if (px > width - 70 && py > height - 70) {
    fill(0);
    textSize(50);
    textAlign(CENTER, CENTER);
    text("You Win!", width / 2, height / 2);
  }
}