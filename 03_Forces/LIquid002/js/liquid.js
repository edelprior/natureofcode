var Liquid = function (_x, _y, _w, _h, _coef) {

  this.location = createVector(_x, _y);
  this.width = _w;
  this.height = _h;
  this.coef = _coef;

    this.show = function() {
      stroke(1);
      strokeWeight();
      fill(0, 0, 255);
      rect(this.location.x, this.location.y, this.width, this.height);

    }

  this.calculateDrag = function(mover) {

  var speed = mover.velocity.mag();
  var dragMagnitude = this.coef * speed * speed;
  var dragForce = mover.velocity.copy();
  dragForce.mult(-1);
  dragForce.normalize();
  dragForce.mult(dragMagnitude);
  return dragForce;
   }



  this.contains = function(mover) {
    return mover.location.x > this.location.x && mover.location.x < this.location.x + this.width &&
      mover.location.y > this.location.y && mover.location.y < this.location.y + this.height;

     }
   }
