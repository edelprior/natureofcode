## Notaí

### Sketch 20 :: Vector Multiplication and Division
#### Vectors are what?
Its another way to store an (x, y) value. They're massively necessary and useful.
- Makes it easy to figure out the distance between two points (magnitude)
- Makes it more efficient in storing a location.


#### Multiplication

This is very similar to the D3 function of Scaling. Pretty useful if we want to move something but keep the dimensions etc correct.
Also used a lot because every vector is drawn from a (0, 0) point (Top left of the screen) and you don't usually want your object there.
``` vectorLine.mult(0.5); ```


#### Division
Usually the same thing as translating an object, or in this case a vector.
You achieve this by multiplying your value by a fraction.

``` translate(width/2, height/2); ```
