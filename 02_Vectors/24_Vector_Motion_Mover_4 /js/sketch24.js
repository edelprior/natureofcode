var movers = [];


function setup() {
  createCanvas(1500,1500);
  for (var i = 0; i < 20; i++) {
    movers[i] = new Mover();

  }
}
  function draw() {
    background(248,248,255);
    for (var i = 0; i < movers.length; i++) {
      movers[i].update();
      movers[i].display();

    }
  }
