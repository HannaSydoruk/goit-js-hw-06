function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const colorChangeBtn = document.querySelector('.change-color');
const colorName = document.querySelector('.color');

colorChangeBtn.addEventListener('click', changeColor);

function changeColor() {
  document.body.style.background = colorName.textContent = getRandomHexColor();
}
