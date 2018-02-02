function setup() {
    size(640, 360);
    generator = new Random();
}

function draw() {

    //Note that nextGaussian() returns a double.

    var float num = (float) generator.nextGaussian();
    var float sd = 60;
    var float mean = 320;

    //Multiply by the standard deviation and add the mean.
    var float x = sd * num + mean;

    noStroke();
    fill(255, 10);
    ellipse(x, 180, 16, 16);
}
