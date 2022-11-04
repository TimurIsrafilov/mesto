import {
  selectors,
  popupPhoto,
  cardPhoto,
  namePhoto,
} from "./constants.js";

import { openPopup } from "./index.js";

export class Card {
  constructor(data, templateContent) {
    this._link = data.link;
    this._name = data.name;
    this._templateContent = templateContent;
  }

  createCard() {
    this._cardElement = this._templateContent.cloneNode(true);
    this._templatePhoto = this._cardElement.querySelector(
      selectors.elementsMask_group
    );
    this._templateTitle = this._cardElement.querySelector(
      selectors.elementsTitle
    );

    this._likeButton = this._cardElement.querySelector(selectors.elementsGroup);
    this._trashButton = this._cardElement.querySelector(
      selectors.elementsTrashIcon
    );

    this._templatePhoto.src = this._link;
    this._templatePhoto.alt = this._name;
    this._templateTitle.textContent = this._name;

    this._eventListenersSet();

    //добавляем шаблонную карту в лист
    return this._cardElement;
  }

  //активация-деактивация лайка
  _handleActivationLike = () => {
    this._likeButton.classList.toggle(selectors.elementsGroupActive);
  };

  //удаление карточки
  _handleDeleteCard = () => {
    this._cardElement.remove();
  };

  //попап увеличения картинки
  _enlargePhoto = () => {
    cardPhoto.src = this._templatePhoto.src;
    cardPhoto.alt = this._templatePhoto.alt;
    namePhoto.textContent = this._templateTitle.textContent;
    this._openPopupPhoto(popupPhoto);
  };

  //попап на открытие фото
  _openPopupPhoto = () => {
    openPopup(popupPhoto);
  };

  _eventListenersSet = () => {
    this._likeButton.addEventListener("click", this._handleActivationLike);
    this._trashButton.addEventListener("click", this._handleDeleteCard);
    this._templatePhoto.addEventListener("click", this._enlargePhoto);
  };
}
