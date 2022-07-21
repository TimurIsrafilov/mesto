const popupProfile = document.querySelector(".popup_profile");
const popupProfileOpenButton = document.querySelector(".profile__edit-button");
const popupProfileCloseButton = popupProfile.querySelector(".popup__close-icon");
const nameInput = popupProfile.querySelector(".popup__input_type_name");
const professionInput = popupProfile.querySelector(".popup__input_type_profession");
const formProfile = popupProfile.querySelector(".popup__form");
const profileName = document.querySelector(".profile__title");
const profileProfession = document.querySelector(".profile__subtitle");
const cardList = document.querySelector(".elements");
const template = document.querySelector(".card-template");
const cardData = cardList.querySelector(".elements__title");
const popupPhoto = document.querySelector(".popup_photo");
const cardPhoto = popupPhoto.querySelector(".popup__mask-group");
const namePhoto = popupPhoto.querySelector(".popup__phototitle");
const popupPhotoCloseButton = popupPhoto.querySelector(".popup__close-icon");
const popupCard = document.querySelector(".popup_card");
const popupCardOpenButton = document.querySelector(".profile__add-button");
const popupCardCloseButton = popupCard.querySelector(".popup__close-icon");
const placeInput = popupCard.querySelector(".popup__input_type_place");
const referenceInput = popupCard.querySelector(".popup__input_type_reference");
const formCard = popupCard.querySelector(".popup__form");

//общий попап на открытие
function openPopup(popup) {
  popup.classList.add("popup_opened");
}

//общий попап на закрытие
function closePopup(popup) {
  popup.classList.remove("popup_opened");
}

//попап на открытие профиля
function openProfilePopup() {
  nameInput.value = profileName.textContent;
  professionInput.value = profileProfession.textContent;
  openPopup(popupProfile);
}

//попап на закрытие профиля
function closeProfilePopup() {
  closePopup(popupProfile);
}

//попап на открытие карт
function openPopupCard() {
  openPopup(popupCard);
}

//попап на закрытие карт
function closePopupCard() {
  closePopup(popupCard);
}

//cоздаем разметку карточек в HTML
function createCard(cardData) {
  const templateCard = template.content
    .querySelector(".elements__element")
    .cloneNode(true);
  const templatePhoto = templateCard.querySelector(".elements__mask-group");
  const templateTitle = templateCard.querySelector(".elements__title");

  templatePhoto.src = cardData.link;
  templatePhoto.alt = cardData.name;
  templateTitle.textContent = cardData.name;

  //активация-деактивация лайка
  const likeButton = templateCard.querySelector(".elements__group");

  likeButton.addEventListener("click", () => {
    likeButton.classList.toggle("elements__group_active");
  });

  //удаление карточки
  templateCard
    .querySelector(".elements__trash-icon")
    .addEventListener("click", () => {
      templateCard.remove();
    });

  //попап увеличения картинки
  templatePhoto.addEventListener("click", () => {
    cardPhoto.src = templatePhoto.src;
    cardPhoto.alt = templatePhoto.alt;
    namePhoto.textContent = templateTitle.textContent;
    openPopupPhoto(popupPhoto);
  });

  //попап на открытие фото
  function openPopupPhoto() {
    openPopup(popupPhoto);
  }

  //попап на закрытие фото
  function closePopupPhoto() {
    closePopup(popupPhoto);
  }

  //слушатель попапа на закрытие фото
  popupPhotoCloseButton.addEventListener("click", closePopupPhoto);

  //добавляем шаблонную карту в лист
  return templateCard;
}

//создаем исходные карты
initialCards.forEach((cardData) => {
  const templateCard = createCard(cardData);
  cardList.append(templateCard);
});

//функция правки профиля
function handleSubmitProfileForm(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileProfession.textContent = professionInput.value;
  closeProfilePopup();
}

//функция создания новой карты
function handleSubmitCardForm(evt) {
  evt.preventDefault();

  const newCards = [{ name: placeInput.value, link: referenceInput.value }];

  newCards.forEach((cardData) => {
    const templateCard = createCard(cardData);
    cardList.prepend(templateCard);
  });

  placeInput.value = "";
  referenceInput.value = "";

  closePopupCard(popupCard);
}

//обработчики
popupCardOpenButton.addEventListener("click", openPopupCard);
popupCardCloseButton.addEventListener("click", closePopupCard);
popupProfileOpenButton.addEventListener("click", openProfilePopup);
popupProfileCloseButton.addEventListener("click", closeProfilePopup);
formCard.addEventListener("submit", handleSubmitCardForm);
formProfile.addEventListener("submit", handleSubmitProfileForm);
