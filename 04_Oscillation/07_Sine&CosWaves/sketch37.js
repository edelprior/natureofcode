// var startAngle=0;
// var angleVel = 0.2;
//
// function setup() {
//     createCanvas(1000, 440);
//     background(255);
// }
//
// function draw() {
//     background(255,4);
//     stroke(200,0,0,50);
//     fill(200,0,0,40);
//
//     startAngle += 0.015;
//     var angle = startAngle;
//
//     for(var x = 0; x <= width; x += 10) {
//
//         var  y = map(sin(angle),-1,1,0,height);
//
//         ellipse(x,y,8,8);
//
//         angle += angleVel;
//     }
// }
var r = 60;
var theta = 2;
var period = 40;
var amplitude = 40;

function setup() {
    createCanvas(640, 640);
    background(245);
}

function draw() {
    var x = r * cos(theta);
    var y = r * sin(theta);

    noStroke();
    fill(200,0,0,30);
    ellipse(x + width/2, y + height/2,8,8);

    //theta += period * amplitude;
    //theta += (TWO_PI / (period * amplitude));
    theta += 0.01;

    r = amplitude * sin(TWO_PI * frameCount / period) + 280;
}
