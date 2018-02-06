var pos;
var vel;


function setup() {
createCanvas(640, 360);
pos = createVector(100,100);
vel = createVector(2,2);

}

function draw() {
  background(237,238,239);

pos.x = pos.x + vel.x;
pos.y = pos.y + vel.y;

  if ((pos.x > width) || ( pos.x < 0)) {
  vel.x = vel.x * -1;
  }

  if ((pos.y > height) || ( pos.y < 0)) {
  vel.y = vel.y * -1;
  }
  noStroke();
  fill(178, 0, 0, 255)
  ellipse(pos.x, 180, 60, 60);

}
