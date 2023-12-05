let container = document.querySelector(".container");
let img = document.createElement("img");
let h1 = document.querySelector("h1");
let body = document.querySelector("body");
body.append(h1);
container.append(img);

setInterval(() => {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((res) => res.json())
    .then((data) => (img.src = data.message));
}, 2000);
