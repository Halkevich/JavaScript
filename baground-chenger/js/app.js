console.log('подключено')
const color = document.querySelector('.color')
// const colors = ['FF5733', '#F9FF33', '#3371FF', 'blue', 'gray', 'red', 'green']
const button = document.getElementById('btn');
const hex = [
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']
button.addEventListener('click', () => {
    let nexColor = genereHex();
    document.body.style.backgroundColor = nexColor;
    color.textContent = nexColor;
});

function getRandomNumber() {

    return Math.floor(Math.random() * hex.length)
}


function genereHex() {
    let hexColor = '#'
    for (let i = 0; i < 6; i++) {
        hexColor += hex[getRandomNumber()]

    }

    return hexColor;
}