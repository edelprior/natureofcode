var Mover = function() {

  this.location = createVector(random(width), random(height));
  this.velocity = createVector(6,5);

  this.update = function () {
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
