var mover;


function setup() {
createCanvas(640, 360);
mover = new Mover(200, 200, 30, 30, 0, 0, 0);

}

function draw() {
  background(248,248,255);

  mover.update();
  mover.checkEdges();
  mover.display();

}
