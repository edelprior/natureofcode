var windchimes = [];
var movers = [];


function setup() {
    createCanvas(640, 640);
    windchimes[0] = new WindChime(60,60,3,0,90);
    windchimes[1] = new WindChime(500,500, 5,180,270);
    windchimes[2] = new WindChime(60,500, 5,270,90);
    windchimes[3] = new WindChime(500,60, 5,270,90);
 
    for ( var y = 0; y < 1000; y++){
        
    movers[y] = new Mover(random(0,640), random(0,640), 0, 0, 0, 0, random(5, 20));
    }
}

function draw() {
    background(255);
   
    for( var j = 0; j < movers.length; j++){
        
        for(var i = 0; i < windchimes.length; i++){
            movers[j].applyForce(windchimes[i].windVector);
        }
            movers[j].display();
            movers[j].update();
            movers[j].checkEdges();
        
    
    }

    
    
    for(var x = 0; x < windchimes.length; x++) {
        windchimes[x].update();
        windchimes[x].display();
    }
}



