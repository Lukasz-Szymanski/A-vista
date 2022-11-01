const imageArray = ["<img src=./src/1.png>", "<img src=./src/2.png>", "<img src=./src/3.png>", "<img src=./src/4.png>", "<img src=./src/5.png>"];

const image = document.querySelector("img");
const button = document.querySelector("button");

window.onload = () => generateRandomPicture(imageArray);

button.addEventListener("click", () => generateRandomPicture(imageArray));

function generateRandomPicture(array){
    let randomNum = Math.floor(Math.random() * array.length);
    image.setAttribute("src", array[randomNum]);
}

