var x = 320;
var y = 180;
var xSpeed = 10;

function setup() {
createCanvas(640, 360);
}

function draw() {
  background(237,238,239);

  x = x + xSpeed;

  if ((x > width) || ( x < 0)) {
    xSpeed = xSpeed * -1;
  }

  noStroke();
  fill(83,89,100,255)
  ellipse(x, 180, 60, 60);

}
