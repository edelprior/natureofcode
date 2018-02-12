## Notaí

### Sketch 23 PART 1 :: Bringing in Classes ohohoo with Velocity 
#### Vectors are what?
Its another way to store an (x, y) value. They're massively necessary and useful.
- Makes it easy to figure out the distance between two points (magnitude)
- Makes it more efficient in storing a location.


#### our new Mover()class
Putting them all in a class, will mean that we can program moving objects, with any number of an array, and it will be coded efficiently.
The mover will describe the objects that move around the screen. So what data do we put in here, and what functionality do we want each mover to have?
So we need to know the location and the velocity (both vectors)
And they need to be able to move per each frame 
```js
update()
```
And they need to be drawn onto the screen, otherwise we won't see them
```js 
draw()
```
