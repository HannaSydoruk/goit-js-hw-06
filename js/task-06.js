const input = document.querySelector('#validation-input');
const dataLength = parseInt(input.getAttribute('data-length'));

input.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
    if (event.currentTarget.value.length === dataLength) {
        input.classList.add('valid');
        input.classList.remove('invalid');
    }
    else {
        input.classList.add('invalid');
        input.classList.remove('valid');
    }
}