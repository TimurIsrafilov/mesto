const profileForm = {
  form: '.popup__form[name="profileEditForm"]',
  formButton: ".popup__submit-button",
  formButtonValid: "popup__submit-button_state_valid",
  formButtonInvalid: "popup__submit-button_state_invalid",
  formInput: ".popup__input",
  formInputInvalid: "popup__input_state_invalid",
};

const cardForm = {
  form: '.popup__form[name="cardEditForm"]',
  formButton: ".popup__submit-button",
  formButtonValid: "popup__submit-button_state_valid",
  formButtonInvalid: "popup__submit-button_state_invalid",
  formInput: ".popup__input",
  formInputInvalid: "popup__input_state_invalid",
};

// функция активации валидации
function enableValidation(config) {
  // поиск формы в документе
  const form = document.querySelector(config.form);
  // добавление слушателя
  form.addEventListener("input", function (event) {
    handleFormInput(event, config);
  });
}

// функция поля формы
function handleFormInput(event, config) {
  const input = event.target;
  const form = event.currentTarget;
  // установка кастомных ошибок
  setCustomError(input);
  // отображение ошибок под полем ввода
  showFieldError(input);
  // активация-деактивация кнопки сабмит
  setSubmitButtonState(form, config);
  // активация-деактивация подчеркивания поля с ошибкой
  setInputHighlighterState(input, config);
}

// установка кастомных ошибок
function setCustomError(input) {
  const validity = input.validity;

  input.setCustomValidity("");

  if (validity.valueMissing) {
    input.setCustomValidity("Вы пропустили это поле.");
  }
  if (validity.tooShort) {
    input.setCustomValidity("Текст должен быть не короче 2 симв.");
  }
}

// отображение ошибок под полем ввода
function showFieldError(input) {
  const span = input.nextElementSibling;
  span.textContent = input.validationMessage;
}

// активация-деактивация кнопки сабмит
function setSubmitButtonState(form, config) {
  const formButton = form.querySelector(config.formButton);
  const isValid = form.checkValidity();

  if (isValid) {
    formButton.removeAttribute("disabled");
    formButton.classList.remove(config.formButtonInvalid);
    formButton.classList.add(config.formButtonValid);
  } else {
    formButton.setAttribute("disabled", true);
    formButton.classList.add(config.formButtonInvalid);
    formButton.classList.remove(config.formButtonValid);
  }
}

// активация-деактивация подчеркивания поля с ошибкой
function setInputHighlighterState(input, config) {
  const isValid = input.checkValidity();

  if (isValid) {
    input.classList.remove(config.formInputInvalid);
  } else {
    input.classList.add(config.formInputInvalid);
  }
}

enableValidation(profileForm);
enableValidation(cardForm);
