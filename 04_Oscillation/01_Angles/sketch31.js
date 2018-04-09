var angle = 0;
var aVelocity = 0;
var aAcceleration = .0002;

function setup() {
	createCanvas(640, 480);
}

function draw() {
	background(245);

	stroke(.5);
	fill(200,0,0,40);

	push();
	translate(width/2, height/2);
	rotate(angle);
	line(-60,0,60,0);
	ellipse(60,0,36,36);
	ellipse(-60,0,36,36);
	pop();

	//Maths
	// aVelocity = aVelocity + aAcceleration;
	// aVelocity = constrain(aVelocity, 5, 0.1);


	aVelocity = aVelocity + aAcceleration;
  // aVelocity = constrain(aVelocity, 0, 0.1);
  angle = angle + aVelocity;



}