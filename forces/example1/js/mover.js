var Mover = function(_x, _y, _vx, _vy, _ax, _ay, _mass) {

  this.location = createVector(_x, _y);
  this.velocity = createVector(_vx, _vy);
  this.acceleration = createVector(_ax, _ay);

  this.update = function () {

    this.velocity.add(this.acceleration);
    this.velocity.limit(100);
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