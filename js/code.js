const mainContainer = document.getElementById('image');
const addButton = document.getElementById('button');

addButton.addEventListener('click', addRandomImg, false);

function addRandomImg() {
    let randomIndex = Math.floor(Math.random() * 5);

    const newImage = document.createElement('png');
    newImage.src = './src/${1}.png';
    mainContainer.appendChild(newImage);
}