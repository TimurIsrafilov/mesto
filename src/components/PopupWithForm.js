import { Popup } from "./Popup.js";
import { selectors } from "../utils/constants.js";

export class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
  super(popupSelector);
  this._form = popupSelector.querySelector(selectors.popupForm);
  this._handleFormSubmit = handleFormSubmit;
  this._submitButton = this._form.querySelector(selectors.submitButton);
  this._loadingText = this._submitButton.textContent;
}

renderLoading(isLoading) {
  if (isLoading) {
    this._submitButton.textContent = "Сохранение...";
  } else {
    this._submitButton.textContent = this._loadingText;
  }
}

_getInputValues() {
  this._inputList = this._form.querySelectorAll(selectors.popupInput);
  this._formValues = {};
  this._inputList.forEach((input) => {
    this._formValues[input.name] = input.value;
  });

  return this._formValues;
}

setEventListeners() {
  super.setEventListeners();
  this._form.addEventListener("submit", (evt) => {
    evt.preventDefault();
    this._handleFormSubmit(this._getInputValues());
    this.close();
  });
}

close() {
  super.close();
  this._form.reset();
}
}
