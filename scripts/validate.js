// показываем ошибку
const showInputError = (formElement, inputElement, errorMessage, config) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(config.inputErrorClass);
  errorElement.textContent = errorMessage;
};

// удаляем ошибку
const hideInputError = (formElement, inputElement, config) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(config.inputErrorClass);
  errorElement.textContent = '';
};

// проверка валидности поля
const isValid = (formElement, inputElement, config) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, config);
  } else {
    hideInputError(formElement, inputElement, config);
  }
};

// проверка на невалидность поля
const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

// активация-деактивация кнопки сабмит
const toggleButtonState = (inputList, buttonElement, config) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.setAttribute("disabled", true);
    buttonElement.classList.add(config.inactiveButtonClass);
  } else {
    buttonElement.removeAttribute("disabled");
    buttonElement.classList.remove(config.inactiveButtonClass);
  }
};

// установка слушателей
const setEventListeners = (formElement, config) => {
  const inputList = Array.from(formElement.querySelectorAll(config.inputSelector));
  const buttonElement = formElement.querySelector(config.submitButtonSelector);

  toggleButtonState(inputList, buttonElement, config);


  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      isValid(formElement, inputElement, config);
      toggleButtonState(inputList, buttonElement, config);
    });
  });
};

// включить валидацию
const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.formSelector));

  formList.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
      evt.submitter.setAttribute('disabled', true);
      evt.submitter.classList.add(config.inactiveButtonClass);
    });
    setEventListeners(formElement, config);
  });
};

enableValidation({
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__submit-button",
  inputErrorClass: "popup__input_state_invalid",
  inactiveButtonClass: "popup__submit-button_state_invalid",
});
