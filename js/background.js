const images = ["1.jpg", "2.jpg", "3.jpg"];
const body = document.querySelector("body");
const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

body.style.background = `no-repeat url('img/${chosenImage}')`;
body.style.backgroundSize = "cover";

// bgImage.src = `img/${chosenImage}`;

// document.body.appendChild(bgImage);
