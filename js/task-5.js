const bodyEl = document.querySelector('body');
const buttonEl = document.querySelector('.change-color');
const colorSpanEl = document.querySelector('.color');

buttonEl.addEventListener('click', changeColor);

function changeColor() {
  const randomColor = getRandomHexColor();

  bodyEl.style.backgroundColor = randomColor;

  colorSpanEl.textContent = randomColor;
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}