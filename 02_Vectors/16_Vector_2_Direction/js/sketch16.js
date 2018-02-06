// introducing YSpeed

var x = 320;
var y = 180;
var xSpeed = 2;
var ySpeed = 2.5;

function setup() {
createCanvas(640, 360);
}

function draw() {
  background(237,238,239);

  x = x + xSpeed;
  y = y + ySpeed;

  if ((x > width) || ( x < 0)) {
    xSpeed = xSpeed * -1;
  }

  if ((y > height) || ( y < 0)) {
    ySpeed = ySpeed * -1;
  }

  noStroke();
  fill(83,89,100,255)
  ellipse(x, 180, 60, 60);

}
