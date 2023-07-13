# RandomImages
This code defines a click event listener on a button element with the class "btn". 
When the button is clicked, the function `addNewImages()` is executed, 
which generates and adds a specified number of new `<img>` elements with random URLs
to the image container element with the class "image-container". 
The number of new images to be generated is determined by the variable `imagenum`, 
which is set to 10 in this case. Each new image's source URL is obtained
from "https://picsum.photos/300?random=" with a random number appended to ensure 
different images are loaded each time. Finally, the new images are appended to the 
image container element using the `appendChild()` method.
