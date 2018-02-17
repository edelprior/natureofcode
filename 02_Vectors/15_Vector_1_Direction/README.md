## Notaí

### Sketch 15 :: Your typical Vector

Usually, a vector is visualised as an Arrow, something that has magnitude/direction.
In computing terms, a _Vector_ is always drawn from the (0,0) top left hand corner of the screen.
Simply put, its another way to store an (x, y) value. They're massively necessary and useful.
- Makes it easy to figure out the distance between two points (magnitude)
- Makes it more efficient in storing a location.


#### So how do we code this lark
Generally we don't use classes when we're messing about with vectors, it just makes thing less complicated (for the time being).
**Velocity** and **Acceleration** are two very important factors that need thinking about.
- **Velocity = Speed at which something is moving**
- **Acceleration = Force**

the velocity declared in the following piece of code means that the object/vector is moving at 2 frames per second. It is put in the draw() function, so each time the screen loads, it takes the current xLocation and adds xSpeed.
``` xSpeed=2 ```
