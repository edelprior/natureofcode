function setup() {
createCanvas(640, 360);
pos = createVector(100,100);
vel = createVector(2,2);

}

function draw() {
  background(237,238,239);

var mouse = createVector(mouseX, mouseY);
var center = createVector(width/2, height/2);
var vectorLine = mouse.sub(center);

translate(width/2, height/2);
strokeWeight(.25);
stroke(255,0,0);
line(0,0, vectorLine.x, vectorLine.y);
}
