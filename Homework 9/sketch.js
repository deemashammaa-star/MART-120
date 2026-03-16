function setup() {
  createCanvas(400, 450);
  background(230);

  // title
  fill(0);
  textSize(20);
  text("My Portrait", 140, 30);

  noStroke();

  // hair back
  fill(130, 75, 40);
  ellipse(200, 110, 160, 130);

  // face
  fill(255, 220, 190);
  ellipse(200, 120, 110, 140);

  // eyes
  fill(255);
  ellipse(180, 110, 28, 20);
  ellipse(220, 110, 28, 20);

  fill(90, 60, 30);
  ellipse(180, 110, 10, 10);
  ellipse(220, 110, 10, 10);

  // eyebrows
  stroke(90, 60, 30);
  strokeWeight(3);
  line(165, 95, 195, 95);
  line(205, 95, 235, 95);

  noStroke();

  // nose
  fill(240, 180, 150);
  triangle(200, 115, 190, 135, 210, 135);

  // freckles (light and random near nose)
  stroke(210, 170, 150);
  strokeWeight(4);
  point(190,130);
  point(186,136);
  point(194,138);
  point(210,132);
  point(214,138);

  noStroke();

  // mouth
  fill(240, 120, 140);
  ellipse(200, 150, 40, 18);

  // neck
  fill(255, 220, 190);
  rect(190, 180, 20, 30);

  // shirt
  fill(170, 160, 220);
  rect(160, 210, 80, 90);

  // arms
  fill(255, 220, 190);
  rect(150, 215, 15, 60);
  rect(235, 215, 15, 60);

  // legs
  fill(70, 70, 150);
  rect(175, 300, 18, 50);
  rect(205, 300, 18, 50);

  // braids
  fill(130, 75, 40);
  ellipse(145, 130, 35, 35);
  ellipse(145, 160, 35, 35);
  ellipse(145, 190, 35, 35);
  ellipse(145, 220, 35, 35);

  ellipse(255, 130, 35, 35);
  ellipse(255, 160, 35, 35);
  ellipse(255, 190, 35, 35);
  ellipse(255, 220, 35, 35);

  // name
  fill(120, 40, 20);
  textSize(14);
  text("Deema Shammaa", 145, 380);
}