const input = document.querySelector('#validation-input');
const dataLength = parseInt(input.getAttribute('data-length'));

input.addEventListener('blur', onInputBlur);

function updateInputClass(classToAdd, classToRemove) {
    input.classList.add(classToAdd);
    input.classList.remove(classToRemove);
}

function onInputBlur(event) {
    if (event.currentTarget.value.length === dataLength) {
        updateInputClass('valid', 'invalid');
    }
    else {
        updateInputClass('invalid', 'valid');
    }
}