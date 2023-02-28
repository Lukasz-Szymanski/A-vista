const imageArray = ["src/1.png", "src/2.png", "src/3.png", "src/4.png", "src/5.png", "src/6.png", "src/7.png", "src/8.png", "src/9.png"];


const image = document.querySelector("img");
const button = document.querySelector("button");

window.onload = () => generateRandomPicture(imageArray);

button.addEventListener("click", () => generateRandomPicture(imageArray));
/**
 * 
 * @param {*} array 
 */
function generateRandomPicture(array){
    let randomNum = Math.floor(Math.random() * array.length);
    image.setAttribute("src", array[randomNum]);
}
