function WindChime(_xpos, _ypos, _windMag, _startAngle, _endAngle) {
    this.xpos = _xpos;
    this.ypos = _ypos;
    this.windMag = _windMag;
    this.endAngle = _endAngle;
    this.startAngle = _startAngle;
    this.windVector =createVector();
    this.time = 1000;
    
    this.update = function(){
        this.windDir = map(noise(this.time),0,1,this.startAngle, this.endAngle);
        
        this.windVector= p5.Vector.fromAngle(radians(this.windDir));
        this.windVector.mult(this.windMag);
        this.time +=0.1;
    }
    this.display = function(){
        
    push();
        translate(this.xpos,this.ypos);
        fill(0);
        scale(0.75,0.75);
        //smooth();
        noStroke();
        textSize(18);
        textAlign(CENTER);
        text("Magnitude = " + this.windMag, 0,120);
        this.string = str(this.windVector.heading() * 180/PI);
        
        text("Wind Direction = " + this.string.substr(0,6),0,150);
    
        stroke(0);
        strokeWeight(1);
        fill(255);
        ellipse(0,0,140,140);
        rotate(this.windVector.heading());
        line(-60,0,60,0);
        fill(0);
        noStroke();
        triangle(40, -15, 60, 0, 40, 15);
    pop();
    }
}