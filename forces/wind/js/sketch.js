var wind;

function setup() {
createCanvas(640, 360);


}


function draw() {

wind = p5.Vector.fromAngle(radians(angle));

var angle = map(noise(time), 0, 1, 0, 90);

wind.mult(100);
time = time + 0.001;
line(0,0, wind.x, wind.y);


}
