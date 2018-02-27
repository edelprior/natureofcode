## Notaí

### Sketch 18 :: Vector Addition, making life a lot easier
#### Vectors are what?
Its another way to store an (x, y) value. They're massively necessary and useful.
- Makes it easy to figure out the distance between two points (magnitude)
- Makes it more efficient in storing a location.


#### So how do we add two locations together?

Think of it as two snooker balls hitting the same location, the **Resultant** vector, is where they both end up, and the product of the two locations added together.
Take the vector position and add velocity to it, the result is the movement in each frame.
So instead of  ```position.x = position.x + velocity; ```
We have ```position.add(velocity);```
