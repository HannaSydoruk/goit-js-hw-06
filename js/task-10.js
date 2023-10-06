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
  destroyBoxes();
  amount = amountInput.value;
  createBoxes(amount);
}

function createBoxes(amount) {
  const arrayOfBoxes = [];

  let divSize = 30;
  for (let i = 1; i <= amount; i += 1) {

    let newBox = document.createElement('div');

    newBox.style.width = `${divSize}px`;
    newBox.style.height = `${divSize}px`;
    divSize += 10;
    newBox.style.background = getRandomHexColor();

    arrayOfBoxes.push(newBox);
  }
  galeryElements.append(...arrayOfBoxes);
}



destroyBtn.addEventListener('click', destroyBoxes)

function destroyBoxes() {
  galeryElements.innerHTML = '';
}