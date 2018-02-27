## Notaí

### Sketch 23 PART 4 :: Acceleration towards the mouse
#### Vectors are what?
Its another way to store an (x, y) value. They're massively necessary and useful.
- Makes it easy to figure out the distance between two points (magnitude)
- Makes it more efficient in storing a location.


#### What is Acceleration (in this instance)
It is the **rate of change of velocity**
So to the code, we add a vector of acceleration, and add it to our velocity vector, to create a constant acceleration on screen 
```js 
this.acceleration = createVector(0.03, 0.04);
this.velocity.add(this.acceleration);
```

Then we add a vector for the mouse, so we can call it to subtract from the acceleration.

To make this rate of change of velocity **go towards the mouse** we have to add the following lines of code 
```js 
this.acceleration = p5.Vector.sub(mouse, this.location);
this.acceleration.setMag(0.02);
```
