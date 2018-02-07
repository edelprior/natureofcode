var movers = [];

function setup() {
  createCanvas(300,600);

  for (var i = 0; i <10; i++){
    movers[i] = new Mover();
  }

}
function draw() {
    background(255);
    for (var i = 0; i < movers.length; i++) {
         movers[i].update();
         movers[i].checkEdges();
         movers[i].draw();

 }
}
