function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const galeryElements = document.querySelector('#boxes');
const amountInput = document.querySelector('input[type=number]');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');

let amount = 0;

createBtn.addEventListener('click', onCreateClick);

function onCreateClick() {
  createBoxes(amount);
  amount = amountInput.value;
}

const arrayOfBoxes = [];

function createBoxes(amount) {

  let newBox = document.createElement('div');
  newBox.style.width = '30px';
  newBox.style.height = '30px';
  newBox.style.background = getRandomHexColor();

  arrayOfBoxes.push(newBox);
}

galeryElements.append(...arrayOfBoxes);