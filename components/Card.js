import { selectors } from "./constants.js";

export class Card {
  constructor(data, { handleCardClick }, templateContent) {
    this._name = data.name;
    this._link = data.link;
    this._templateContent = templateContent;
    this._handleCardClick = handleCardClick;
  }

  createCard() {
    this._cardElement = this._templateContent.cloneNode(true);
    this._templatePhoto = this._cardElement.querySelector(selectors.cardImage);
    this._templateTitle = this._cardElement.querySelector(selectors.cardTitle);

    this._likeButton = this._cardElement.querySelector(selectors.cardLike);
    this._trashButton = this._cardElement.querySelector(
      selectors.cardTrashIcon
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
    this._likeButton.classList.toggle(selectors.cardLikeActive);
  };

  //удаление карточки
  _handleDeleteCard = () => {
    this._cardElement.remove();
    this._cardElement = null;
  };

  //попап увеличения картинки
  _handleCardOpen = () => {
    this._handleCardClick(this._name, this._link);
  };

  //слушатели
  _setEventListeners = () => {
    this._likeButton.addEventListener("click", this._handleToggleLike);
    this._trashButton.addEventListener("click", this._handleDeleteCard);
    this._templatePhoto.addEventListener("click", this._handleCardOpen);
  };
}
