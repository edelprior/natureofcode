var movers = [];

function setup() {
    createCanvas(640, 640);
		for(var i = 0; i < 50; i++){
			movers[i] = new Mover();
		}
}

function draw() {
    background(245);

		for(var i = 0; i < 20; i++){
			movers[i].checkEdges();
	    movers[i].update();
	    movers[i].display();
		}
	}
