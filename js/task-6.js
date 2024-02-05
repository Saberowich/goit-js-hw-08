const dataCreate = document.querySelector('[data-create]');
const elementBoxes = document.querySelector('#boxes');
const dataDestroy = document.querySelector('[data-destroy]');
const inputEl = document.querySelector('input');

dataCreate.addEventListener('click', onCreateClick);

function onCreateClick() {  
const inputValue = parseInt(inputEl.value);
  const valueArray = [];
  let boxWidth = 30;
  let boxHeigth = 30;  
for (let i = 0; i < inputValue; i += 1) {
  const boxesEl = document.createElement("div");
  boxesEl.style.width = `${boxWidth}px`;
  boxesEl.style.height = `${boxHeigth}px`;
  boxesEl.style.backgroundColor = getRandomHexColor();
  valueArray.push(boxesEl);
  boxWidth += 10;
  boxHeigth += 10;
  elementBoxes.innerHTML = "";
  }  elementBoxes.append(...valueArray);
}

dataDestroy.addEventListener('click', destroyBoxes);

function destroyBoxes() {
    while (elementBoxes.firstChild) {
      elementBoxes.firstChild.remove();
      inputEl.value = "";
  }
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}

 