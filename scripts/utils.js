import { popupPhoto, cardPhoto, namePhoto } from "./constants.js";
import { openPopup } from "./index.js";

//попап на открытие фото
export { openPopupPhoto };
function openPopupPhoto() {
  cardPhoto.src = this._templatePhoto.src;
  cardPhoto.alt = this._templatePhoto.alt;
  namePhoto.textContent = this._templateTitle.textContent;
  openPopup(popupPhoto);
}
