
// An array to keep track of how often random numbers are picked

var randomCounts = [];
var total = 50;

function setup() {
  createCanvas(600,100);
  for (var i = 0; i < total; i++) {
    randomCounts[i] = 0;
  }
}

function draw() {
  background(290);
  var index = floor(random(total));
  randomCounts[index]++;

  // Draw a rectangle to graph results
  stroke(10);
  strokeWeight(.25);
  fill(220);

  var w = width/randomCounts.length;

  for (var x = 0; x < randomCounts.length; x++) {
    rect(x*w,height-randomCounts[x],w-1,randomCounts[x]);
  }
};
