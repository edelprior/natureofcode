var Mover = function() {
    this.location = createVector(random(width), random(height));
    this.velocity = createVector(random(5), random(3));
    this.acceleration = p5.Vector.random2D();
    this.acceleration.mult(.05);



    this.update = function() {
         this.location.add(this.velocity);
         this.velocity.add(this.acceleration);
         this.velocity.limit(5);
         this.mouse = createVector(mouseX, mouseY);
         this.acceleration =p5.Vector.sub(this.mouse, location);
         this.acceleration.normalize();
    }

    this.draw = function(){
         noStroke();
         fill(100);
         ellipse(this.location.x, this.location.y, 5,5);
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
