var angle = 0;

var slider;
function setup() {
  createCanvas(400,400);
  slider = createSlider(0, TWO_PI, PI / 4, 0.02);
}

function draw() {
  background(65);
  angle = slider.value();
  stroke(255);
  translate(200, height);
  branch(100);
}

// argument passed through is how long the branch
function branch(length) {
line(0, 0, 0,  - length);
translate(0, -length);
if (length > 4) {
  push();
      rotate(angle);
      branch(length* 0.67);
  pop();

  push();
      rotate(-angle);
      branch(length * 0.67);
  pop();
}
}
