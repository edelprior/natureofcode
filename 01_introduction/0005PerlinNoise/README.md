###Notaí

##Perlin Noise
'Naturally ordered' randomness. It can be described as smooth.
```noiseDetail()
```
changes octaves and importance of each other. Time and degree of incrementation are very important here.

####Mapping Noise
```Map()
```
takes five parameters 1. Value 2. Current Min. 3. Current Max. 4. New Min. 5. New Max.

Similar to scale function in D3.

####2 Dimensional Noise Pixel Arrays
Is on a grid rather than a path, smooth values on a plane of pixels.
So colours saved are individual - R values are: index [0], index [4]

Main Formula ::
``` (x + (y * width) * 4)
```
Pixel Density just resets all screen resolutions the same, it resets. 
