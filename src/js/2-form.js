const STORAGE_KEY = 'feedback-form-state';

let formData = { email: '', message: '' };

const form = document.querySelector('.feedback-form');

restoreFormData();

form.addEventListener('input', onFormInput);
form.addEventListener('submit', onFormSubmit);

function onFormInput(event) {
  const { name, value } = event.target;

  if (!(name in formData)) {
    return;
  }

  formData[name] = value.trim();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(event) {
  event.preventDefault();

  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);

  localStorage.removeItem(STORAGE_KEY);
  formData = { email: '', message: '' };
  form.reset();
}

function restoreFormData() {
  const savedData = localStorage.getItem(STORAGE_KEY);

  if (!savedData) {
    return;
  }

  try {
    const { email, message } = JSON.parse(savedData);
    formData.email = email ?? '';
    formData.message = message ?? '';
  } catch {
    localStorage.removeItem(STORAGE_KEY);
    return;
  }

  form.elements.email.value = formData.email;
  form.elements.message.value = formData.message;
}
