var Mover = function (m) {

    this.location = createVector(30,30);
    this.velocity = createVector(3, 0);
    this.acceleration = createVector(0,0);
    this.mass= m;

    this.update = function () {
        this.velocity.add(this.acceleration);
        this.velocity.limit(10);
        this.location.add(this.velocity);
        this.acceleration.mult(0);
      }

    this.display = function () {
        //pick a brush
        noStroke();
        strokeWeight(2);
        fill(255, 0, 0, 50);

        //And draw an ellipse at the new location vector points
        ellipse(this.location.x, this.location.y, this.mass * 10, this.mass * 10);

}

    this.checkEdges = function () {
        if (this.location.x > width) {
            this.location.x = 0;
        }
        if (this.location.x < 0) {
            this.location.x = width;
        }
        if (this.location.y > height) {
            this.location.y = 0;
        }
        if (this.location.y < 0) {
            this.location.y = height;
        }

    }

    this.applyForce = function (force) {
          var f = p5.Vector.div(force, this.mass)
          this.acceleration.add(f);
    }
}
