var tree = [];

function setup() {
  createCanvas(400,400);
  var a = createVector(width/2, height);
  var b = createVector(width/2, height - 100);
  var root = new Branch(a, b);

  tree[0] = root;

  var newBranch = root.branch();
  tree[1] = newBranch;
}

function draw() {
  background(65);
  for (var i = 0; i < tree.length; i ++) {
  tree[i].show();

  }
}
