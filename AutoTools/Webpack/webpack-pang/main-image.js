var image1 = document.createElement('img');
image1.src = require('./wallPic1.jpg');
image1.style.width = '200px';
// image1.style.height = '150px';
document.body.appendChild(image1);

var image2 = document.createElement('img');
image2.style.width = '200px';
image2.src = require('./wallPic2.jpg');
document.body.appendChild(image2);

document.write("</br>");