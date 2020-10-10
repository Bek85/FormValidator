const form = document.getElementById('form');
const usernameInput = document.getElementById('username');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const checkPasswordInput = document.getElementById('checkPassword');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  checkRequired([usernameInput, emailInput, passwordInput, checkPasswordInput]);
});

const showError = (input, message) => {
  const formControl = input.parentElement;
  formControl.classList.add('error');
  formControl.querySelector('small').textContent = message;
};

const showSuccess = (input) => {
  const formControl = input.parentElement;
  formControl.classList.add('success');
};

const isValidEmail = (email) => {
  const regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regEx.test(String(email).toLowerCase());
};

const checkRequired = (formInputs) => {
  formInputs.forEach((input) => {
    if (input.value.trim() === '')
      showError(input, `${getFieldName(input)} is required`);
    else showSuccess(input);
  });
};

const getFieldName = (input) => {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
};
