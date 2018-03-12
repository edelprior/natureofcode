var mover;

function setup() {
    createCanvas(640, 640);
    mover = new Mover(10);
  }

function draw() {

    var wind = createVector(0.1, 0.01);
    var gravity = createVector(0, 0.06);

    background(255);

    mover.applyForce(wind);
    mover.applyForce(gravity);

    mover.checkEdges();
    mover.update();
    mover.display();
  }