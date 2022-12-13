import { selectors } from "../utils/constants.js";

export class Card {
  constructor(
    data,
    handleCardClick,
    templateContent,
    handleDeleteClick,
    handleLikeClick
  ) {
    this._name = data.name;
    this._link = data.link;
    this._likes = data.likes;
    this._id = data.id;
    this._userId = data.userId;
    this._ownerId = data.ownerId;

    this._templateContent = templateContent;
    this._handleCardClick = handleCardClick;
    this._handleDeleteClick = handleDeleteClick;
    this._handleLikeClick = handleLikeClick;
  }

  isLiked() {
    const userLike = this._likes.find((user) => user._id === this._userId);

    return userLike;
  }

  countLikesNumber(totalLikes) {
    this._likes = totalLikes;
    const likesNumber = this._cardElement.querySelector(selectors.likesNumber);
    likesNumber.textContent = this._likes.length;

    if (this.isLiked()) {
      this._addLike();
    } else {
      this._removeLike();
    }
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

    if (this._ownerId !== this._userId) {
      this._trashButton.style.display = "none";
    }

    this._setEventListeners();
    this.countLikesNumber(this._likes);

    //добавляем шаблонную карту в лист
    return this._cardElement;
  }

  //удаление карточки
  removeCard() {
    this._cardElement.remove();
    this._cardElement = null;
  }

  //активация-деактивация лайка
  _addLike = () => {
    this._likeButton.classList.add(selectors.cardLikeActive);
  };

  //активация-деактивация лайка
  _removeLike = () => {
    this._likeButton.classList.remove(selectors.cardLikeActive);
  };

  //попап увеличения картинки
  _handleCardOpen = () => {
    this._handleCardClick(this._name, this._link);
  };

  //слушатели
  _setEventListeners = () => {
    this._likeButton.addEventListener("click", () =>
      this._handleLikeClick(this._id)
    );
    this._trashButton.addEventListener("click", () =>
      this._handleDeleteClick(this._id)
    );
    this._templatePhoto.addEventListener("click", this._handleCardOpen);
  };
}
