var Mover = function () {
    this.position = createVector(random(width), random(height));
    this.velocity = createVector(0, 0);
    this.acceleration;
    this.topspeed = 4;

    this.update = function () {
        var mouse = createVector(mouseX, mouseY);
        var dir = p5.Vector.sub(mouse, this.position);
        dir.normalize();
        dir.mult(0.09);
        this.acceleration = dir;

        this.velocity.add(this.acceleration);
        this.velocity.limit(this.topspeed);
        this.position.add(this.velocity);
    };

    this.display = function () {
				var angle = this.acceleration.heading();
        noStroke();

				push();
				translate(this.position.x, this.position.y)
				rotate(angle);
				rectMode(CENTER);
				fill(200,0,0, 50);
        rect(0, 0, 25, 5);
				triangle(2, -9, 2, 9, 22, 0);
				pop();
    };

    this.checkEdges = function () {
        if (this.position.x > width) {
            this.position.x = 0;
        } else if (this.position.x < 0) {
            this.position.x = width;
        }

        if (this.position.y > height) {
            this.position.y = 0;
        } else if (this.position.y < 0) {
            this.position.y = height;
        }
    };
};
