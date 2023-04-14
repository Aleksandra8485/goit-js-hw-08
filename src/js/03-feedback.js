// importowanie throttle
import { throttle } from 'lodash';

// Pobieranie formularza
const formEl = document.querySelector('.feedback-form');
const emailEl = document.querySelector('input[name="email"]');
const messageEl = document.querySelector('textarea[name="message"]');

// 2 wersja pobieranie pól formularza
// const emailEl = formEl.querySelector('input[name="email"]');
// const messageEl = formEl.querySelector('textarea[name="message"]');

//użycie throttle jako funkcji aktualizującej dane w local storage,
const updateFormDataToLocalStorage = throttle(() => {
  const formData = {
    email: emailEl.value,
    message: messageEl.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}, 500);

// Sprawdzenie stanu local storage podczas ładowania strony
window.addEventListener('load', () => {
  const storedFormData = localStorage.getItem('feedback-form-state');
  if (storedFormData) {
    const parsedFormData = JSON.parse(storedFormData);
    emailEl.value = parsedFormData.email;
    messageEl.value = parsedFormData.message;
  }
});

// Nasłuchiwanie zdarzenia input na polach formularza z wykorzystaniem throttle
emailEl.addEventListener('input', updateFormDataToLocalStorage);
messageEl.addEventListener('input', updateFormDataToLocalStorage);

// Nasłuchiwanie zdarzenia submit na formularzu
formEl.addEventListener('submit', e => {
  e.preventDefault();

  // Pobieranie aktualnych danych z pól formularza
  const email = emailEl.value;
  const message = messageEl.value;

  // Czyszczenie pól formularza
  emailEl.value = '';
  messageEl.value = '';

  // Czyszczenie local storage
  localStorage.removeItem('feedback-form-state');

  // Wypisanie danych do konsoli
  console.log('Email:', email);
  console.log('Message:', message);
});
