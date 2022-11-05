import { selectors, cardPhoto, namePhoto } from "./constants.js";

export class Card {
  constructor(data, templateContent, openPopupPhoto, popupPhoto) {
    this._link = data.link;
    this._name = data.name;
    this._templateContent = templateContent;
    this._openPopupPhoto = openPopupPhoto;
    this._popupPhoto = popupPhoto;
  }

  createCard() {
    this._cardElement = this._templateContent.cloneNode(true);
    this._templatePhoto = this._cardElement.querySelector(
      selectors.cardsContainerImage
    );
    this._templateTitle = this._cardElement.querySelector(
      selectors.cardsContainerTitle
    );

    this._likeButton = this._cardElement.querySelector(
      selectors.cardsContainerLike
    );
    this._trashButton = this._cardElement.querySelector(
      selectors.cardsContainerTrashIcon
    );

    this._templatePhoto.src = this._link;
    this._templatePhoto.alt = this._name;
    this._templateTitle.textContent = this._name;

    this._setEventListeners();

    //добавляем шаблонную карту в лист
    return this._cardElement;
  }

  //активация-деактивация лайка
  _handleToggleLike = () => {
    this._likeButton.classList.toggle(selectors.cardsContainerLikeActive);
  };

  //удаление карточки
  _handleDeleteCard = () => {
    this._cardElement.remove();
    this._cardElement = null;
  };

  //попап увеличения картинки
  _enlargePhoto = () => {
    cardPhoto.src = this._templatePhoto.src;
    cardPhoto.alt = this._templatePhoto.alt;
    namePhoto.textContent = this._templateTitle.textContent;
    this._openPopupPhoto(this._popupPhoto);
  };

  _setEventListeners = () => {
    this._likeButton.addEventListener("click", this._handleToggleLike);
    this._trashButton.addEventListener("click", this._handleDeleteCard);
    this._templatePhoto.addEventListener("click", this._enlargePhoto);
  };
}
