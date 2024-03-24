const form = document.querySelector('.feedback-form');

const emailInput = form.elements['email'];
const textarea = form.elements['message'];
populateTextarea();
form.addEventListener('submit', handlaSubmit);
form.addEventListener('input', onTextareaInput);

function handlaSubmit(event) {
  event.preventDefault();
  const emailValue = emailInput.value.trim();
  const messageValue = textarea.value.trim();
  if (emailValue !== '' && messageValue !== '') {
    const formData = {
      email: emailValue,
      message: messageValue,
    };

    console.log(formData);

    event.currentTarget.reset();
    localStorage.removeItem('feedback-form-state');
  } else {
    alert('Please fill in both fields.');
  }
}

function onTextareaInput(event) {
  const formData = {
    email: emailInput.value,
    message: textarea.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function populateTextarea() {
  const storedData = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (storedData) {
    emailInput.value = storedData.email;
    textarea.value = storedData.message;
  }
}
