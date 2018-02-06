//ACCELERATION TOWARDS THE MOUSE

var Mover = function() {

  this.location = createVector(random(width), random(height));
  this.velocity = createVector(6,5);
  this.acceleration = createVector();

  this.update = function () {
    var mouse = createVector(mouseX, mouseY);

    this.acceleration = p5.Vector.sub(mouse,this.location);
    this.acceleration.setMag(0.2);

    this.velocity.add(this.acceleration);
    this.velocity.limit(10);
    this.location.add(this.velocity);

  }

  this.display = function() {
    stroke(1);
    strokeWeight();
    fill(79,30,16);
    ellipse(this.location.x, this.location.y, 80,80);

  }

  this.checkEdges = function() {
    if (this.location.x > width || this.location.x < 0 ) {
      this.velocity.x = this.velocity.x * -1;
      }
    if (this.location.y > height || this.location.y < 0 ) {
        this.velocity.y = this.velocity.y * -1;
        }

  }
}
