const rangeInput = document.querySelector('#font-size-control');
const rangeOutput = document.querySelector('#text');

rangeOutput.style.fontSize;

rangeInput.addEventListener('input', fontSizeChange);

function fontSizeChange(event) {
    const value = event.target.value;
    rangeOutput.style.fontSize = value + 'px';
}