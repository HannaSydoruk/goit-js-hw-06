let counterValue = 0;

const refs = {
    decrementBtn: document.querySelector('[data-action="decrement"]'),
    incrementBtn: document.querySelector('[data-action="increment"]'),
    counterValueMarkup: document.querySelector('#value'),
}

refs.decrementBtn.addEventListener('click', () => {
    counterValue -= 1;
    refs.counterValueMarkup.textContent = counterValue;
});

refs.incrementBtn.addEventListener('click', () => {
    counterValue += 1;
    refs.counterValueMarkup.textContent = counterValue;

});
