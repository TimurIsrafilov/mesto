import { Popup } from "./Popup.js";
import { selectors } from "../utils/constants.js";

export class PopupWithConfirmation extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popup = document.querySelector(selectors.popupConfirmation);
    this._form = this._popup.querySelector(selectors.popupForm);
  }

  submitHandler(submitAction) {
    this._handleSubmit = submitAction;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleSubmit();
      this.close();
    });
  }
}
