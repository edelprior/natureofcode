var mover;

function setup() {
    createCanvas(640, 640);
      mover = new Mover(Math.floor(random(5,20)))
    }



function draw() {

    background(255);

      var m = mover.mass;

      var wind = createVector(0.1, 0.01);
      var gravity = createVector(0, 0.06 * m);

      var c = 0.5;
      var nomral = 1;
      var frictionMag = c * normal;
      var friction = p5.Vector.mult(mover.velocity, -1);
          friction.normalize();
          friction.mult(frictionMag);





      mover.applyForce(wind);
      mover.applyForce(gravity);
      mover.applyForce(friction);

      mover.checkEdges();
      mover.update();
      mover.display();
  }
