## Notaí

### Sketch 24 :: An array of Movers
#### Vectors are what?
Its another way to store an (x, y) value. They're massively necessary and useful.
- Makes it easy to figure out the distance between two points (magnitude)
- Makes it more efficient in storing a location.


#### What is Non static?
It is the **called from the object instance - velocity.add(location)**

In the Mover class, we make movers an array, and we declare the size of the [] in the ``` js steup()```

And then in ```js draw() ``` we call the functions in the ```js movers[]```
```js 
for (var i = 0; i < movers.length; i++){
  movers[i].update();
  movers[i].display();
}
```
