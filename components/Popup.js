import { selectors } from "./constants.js";

export class Popup {
  constructor(selector) {
    this._popupSelector = selector;
  }

  open() {
    this._popupSelector.classList.add(selectors.popupOpened);
    document.addEventListener("keydown", (evt) => this._handleEscClose(evt));
  }

  close() {
    this._popupSelector.classList.remove(selectors.popupOpened);
    document.removeEventListener("keydown", (evt) => this._handleEscClose(evt));
  }

  _handleEscClose(evt) {
    if (evt.key === "Escape") {
      this.close();
    }
  }

  setEventListeners() {
    this._popupSelector.addEventListener("mousedown", (evt) => {
      if (evt.target.classList.contains(selectors.popupOpened)) {
        this.close();
      }
      if (evt.target.classList.contains(selectors.popupCloseIcon)) {
        this.close();
      }
    });
  }
}
