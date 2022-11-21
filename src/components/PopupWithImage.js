import { Popup } from "./Popup.js";
import { cardPhoto, namePhoto } from "../utils/constants.js";

export class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
  }

  open(name, link) {
    cardPhoto.src = link;
    cardPhoto.alt = name;
    namePhoto.textContent = name;
    super.open();
  }
}
