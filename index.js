alert('Please click the button, to change the background color of the page');
alert('The RGB value of the same color can be seen on the top of the page');
const button = document.querySelector('button');
const h1 = document.querySelector('h1');
const footer = document.querySelector('#footer');

button.addEventListener('click', () => {
    makeRandColor();
})

const makeRandColor = (color) => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    const newColor = `rgb(${r}, ${g}, ${b})`;
    document.body.style.backgroundColor = newColor;
    h1.innerText = newColor;
    const sumAll = r + g + b;
    const sumRG = r + g;
    if (sumAll < 120 || sumRG < 110) {
        h1.style.color = 'white';
        footer.style.color = 'white';
    } else {
        h1.style.color = 'black';
        footer.style.color = 'black';
    }

}

