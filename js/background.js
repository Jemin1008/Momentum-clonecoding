const images = ["bkimg_1.jpg", "bkimg_2.jpg", "bkimg_3.jpg"];
const randomBgimage = images[Math.floor(Math.random() * images.length)];
const bgImage = document.createElement("img")

bgImage.src = `img/${randomBgimage}`;

document.body.appendChild(bgImage);