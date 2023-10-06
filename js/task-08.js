const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', onSubmit);

function onSubmit(event) {
    event.preventDefault();

    const { email, password } = event.currentTarget.elements;

    if (email.value.trim() === '' || password.value.trim() === '') {
        alert('Заповніть усі поля!!!');
        return;
    }

    const data = {
        email: email.value.trim(),
        password: password.value.trim(),
    }

    console.log(data);
    event.target.reset();
}


