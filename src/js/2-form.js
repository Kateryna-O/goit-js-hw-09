const form = document.querySelector('.feedback-form');

const emailInput = form.elements['email'];
const textarea = form.elements['message'];

populateTextarea();

form.addEventListener('submit', handlaSubmit);
form.addEventListener('input', onTextareaInput);

function handlaSubmit(event) {
  event.preventDafault();

  const formData = {
    email: emailInput.value,
    message: messageInput.value,
  };

  console.log(formData);

  event.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
}

function onTextareaInput(event) {
  const formData = {
    email: emailInput.value,
    message: messageInput.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function populateTextarea() {
  const storedData = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (storedData) {
    emailInput.value = storedData.email;
    messageInput.value = storedData.message;
  }
}
