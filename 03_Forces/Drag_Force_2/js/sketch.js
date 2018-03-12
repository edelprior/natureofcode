var mover;
var liquid;

function setup() {
createCanvas(640, 360);
mover = new Mover(200, 200, 2, 2, 0, 0, 0);
liquid = new Liquid(0, 200, width, 160);

}

function draw() {
  background(248,248,255);
  liquid.show();
  mover.update();
  mover.checkEdges();
  mover.display();


   if (liquid.contains(mover)) {
   console.log("Ball is in the liquid");
   var dragForce = liquid.calculateDrag(mover);
    mover.applyForce(dragForce);
 }

}
