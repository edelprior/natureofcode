function Pendulum(origin, r) {

    this.origin = origin.copy();
    this.position = createVector();
    this.r = r;
    this.angle = PI / 2.5;

    this.aVelocity = 0.0;
    this.aAcceleration = 0.0;
    this.damping = 0.99;
    this.ballr = 45.0;

    this.go = function() {
        this.update();
        this.display();
    };

    this.update = function() {
        var gravity = 0.25;
        this.aAcceleration = (-1 * gravity / this.r) * sin(this.angle);
        this.aVelocity += this.aAcceleration;
        this.aVelocity *= this.damping;
        this.angle += this.aVelocity;
    }

    this.display = function() {
        this.position.set(this.r * sin(this.angle), this.r * cos(this.angle), 50);
        this.position.add(this.origin);

        stroke(100);
        strokeWeight(.1);

        line(this.origin.x, this.origin.y, this.position.x, this.position.y);
        ellipseMode(CENTER);
        fill(200,0,0,90);

        ellipse(this.position.x, this.position.y, this.ballr, this.ballr);
    }
}
