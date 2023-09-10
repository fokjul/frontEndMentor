const emailForm = document.querySelector('form');
const errorMessage = document.querySelector('.error-message');
const emailInput = document.querySelector('#email');

emailForm.addEventListener('submit', function(e){
    e.preventDefault();
    const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(!email.value.match(validRegex)) {
        errorMessage.style.display = 'block'; 
    }
})