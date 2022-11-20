import { Popup } from "./Popup.js";
import { selectors } from "./constants.js";

export class PopupWithForm extends Popup {
  constructor(popupSelector, form, { handleFormSubmit }) {
    super(popupSelector);
    this._form = form;
    this._handleFormSubmit = handleFormSubmit;
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
      evt.target.reset();
      super.close();
    });
  }
}
