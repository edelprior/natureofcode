var drunkMan;


// function Setup only carried out once - makes sense when drawing a canvas once etc

function setup() {
         createCanvas(600,300);
         background(270);
         drunkMan = new DrunkMan();
}

<!--///////////////////////////////////////////-->

// loops through each frame
function draw() {
    drunkMan.dot();
    drunkMan.step();
}

<!--///////////////////////////////////////////-->

// pops the drunk man in the middle of the canvas
function DrunkMan() {
    this.x = width/2;
    this.y = height/2;

// gets the drunkman in his color (150) and then draws him (point)

  this.dot = function() {
        stroke(150);
        point(this.x,this.y);
    }

// there's nine outcomes now
//Why the minus 1??
    this.step = function() {
    var stepx = floor(random(-1, 2));
    var stepy = floor(random(-1, 2));


    this.x = this.x + stepx;
    this.y = this.y + stepy;

// So the drunk man can't fall through a fence (Puts up barriers at the edge of the canvas)

        this.x = constrain(this.x,0,width);
        this.y = constrain(this.y,0,height);
    }

}
