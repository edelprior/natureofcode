## Notaí


Random Walker = Drunk Man in this instance as it's easier for me to visualise




### Pseudo Classes, Pseuodocreme?
'Pseudo' classes are the classes used in JS, this is because classes aren't built into Javascript. 
It is the cause of ```this.walker``` being everywhere in the code. It also means there are no constructors, because technically it's just a function being called, not a class.


### Setup()
This method only runs once, each time the page is loaded. Usually you'd only want to put in the creation of the canvas, 
declaring the  background and making a new object. However in some cases (think of an animation flipbook) you want there 
to be 'frames' so you load the object in the draw().

### Draw()
This is the method that is repeated every frame, so calling the function of the object to 'walk' or move, will be called 
in this method. Messing around with the numbers in this function will change things.
