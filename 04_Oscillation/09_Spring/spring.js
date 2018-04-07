function Spring(x, y, l) {

    this.anchor = createVector(x, y);
    this.restLength = l;
    this.k = .4;

    this.connect = function(b) {
        var force = p5.Vector.sub(b.position, this.anchor);
        var d = force.mag();
        var stretch = d - this.restLength;

        force.normalize();
        force.mult(-2 * this.k * stretch);
        b.applyForce(force);
    }

    this.constrainLength = function(b, minLength, maxLength) {
        var dir = p5.Vector.sub(b.position, this.anchor);
        var d = dir.mag();

        if (d < minLength) {
            dir.normalize();
            dir.mult(minLength);
            b.position = p5.Vector.add(this.anchor, dir);
            b.velocity.mult(0);
        } else if (d > maxLength) {
            dir.normalize();
            dir.mult(maxLength);
            b.position = p5.Vector.add(this.anchor, dir);
            b.velocity.mult(0);
        }
    }

    this.constrainLength = function(bob, minlen, maxlen) {
        var dir = p5.Vector.sub(bob.position, this.anchor);
        var d = dir.mag();

        if (d < minlen) {
            dir.normalize();
            dir.mult(minlen);
            bob.position = p5.Vector.add(this.anchor, dir);
            bob.velocity.mult(0);
        } else if (d > maxlen) {
            dir.normalize();
            dir.mult(maxlen);
            bob.position = p5.Vector.add(this.anchor, dir);
            bob.velocity.mult(0);
        }
    }

    this.display = function() {

        fill(200,0,0,40);
        noStroke();
        ellipseMode(CENTER);
        ellipse(this.anchor.x, this.anchor.y, 20, 20);
        // translate(0,30);
    }

    this.displayLine = function(b) {
        strokeWeight(.3);
        stroke(200);
        line(b.position.x , b.position.y, this.anchor.x, this.anchor.y +30);
    }
}
