## Notaí

###Sketch 23 PART 3 :: A Random Acceleration
####Vectors are what?
Its another way to store an (x, y) value. They're massively necessary and useful.
- Makes it easy to figure out the distance between two points (magnitude)
- Makes it more efficient in storing a location.


#### What is Acceleration (in this instance)
It is the **rate of change of velocity**
So to the code, we add a vector of acceleration, and add it to our velocity vector, to create a constant acceleration on screen ```this.acceleration = createVector(0.03, 0.04);
                                            this.velocity.add(this.acceleration);

```
To make this rate of change of velocity **Random** we have to add the following lines of code ```this.acceleration = p5.Vector.random2D();
        this.acceleration.mult(0.02);

```
