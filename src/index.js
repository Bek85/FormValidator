const form = document.getElementById('form');
const usernameInput = document.getElementById('username');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const checkPasswordInput = document.getElementById('checkPassword');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  if (usernameInput.value === '')
    showError(usernameInput, 'Username is required');
  else showSuccess(username);

  if (emailInput.value === '') showError(emailInput, 'Email is required');
  else if (!isValidEmail(emailInput.value))
    showError(email, 'Email is not valid');
  else showSuccess(emailInput);

  if (passwordInput.value === '')
    showError(passwordInput, 'Password is required');
  else showSuccess(passwordInput);

  if (checkPasswordInput.value === '')
    showError(checkPasswordInput, 'Enter your password again');
  else showSuccess(checkPasswordInput);
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
