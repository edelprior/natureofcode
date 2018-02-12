## Notaí

###Sketch 16 :: Adding a ySpeed to a vector
####Vectors are what?
Its another way to store an (x, y) value. They're massively necessary and useful.
- Makes it easy to figure out the distance between two points (magnitude)
- Makes it more efficient in storing a location.


#### xSpeeds and ySpeeds
**Velocity** and **Acceleration** are two very important factors that need thinking about.
**Velocity = Speed at which something is moving**
**Acceleration = Force ***

The velocity declared in the following piece of code means that the object/vector is moving at 2 frames per second. It is put in the draw() function, so each time the screen loads, it takes the current xLocation and adds xSpeed.

Adding a ySpeed, allows us to store 4 values in memory, with two vectors.
This means our Vector now has two velocity values.
