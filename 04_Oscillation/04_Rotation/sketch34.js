var r;
var theta;

function setup() {
    createCanvas(640, 640);
	r = height * 0.45;
    theta = 0;

        background(245);
}

function draw() {


    //translate the origin point to the center of the screen
	translate(width/2, height/2);

    //convert polar to cartesian
    var x = r * cos(theta);
    var y = r * sin(theta);

    //Draw the ellipse at the cartesian coordinates
    ellipseMode(CENTER);
    fill(200,0,0,10);
    noStroke();
    //line(0,0,x,y);
    ellipse(x,y,48,48);

    //increase the angle over time
    theta -= 0.02;
    r = r - 0.2;
	}
