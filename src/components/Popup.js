import { selectors } from "../utils/constants.js";

export class Popup {
  constructor(popupSelector) {
    this._popupSelector = popupSelector;
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  open() {
    this._popupSelector.classList.add(selectors.popupOpened);
    document.addEventListener("keydown", this._handleEscClose);
  }

  close() {
    this._popupSelector.classList.remove(selectors.popupOpened);
    document.removeEventListener("keydown", this._handleEscClose);
  }

  _handleEscClose(evt) {
    if (evt.key === "Escape") {
      this.close();
    }
  }

  setEventListeners() {
    this._popupSelector.addEventListener("mousedown", (evt) => {
      if (
        evt.target.classList.contains(selectors.popupOpened) ||
        evt.target.classList.contains(selectors.popupCloseIcon)
      ) {
        this.close();
      }
    });
  }
}
