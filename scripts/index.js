const selectors = {
  popupProfile: ".popup_profile",
  profileEditButton: ".profile__edit-button",
  popupCloseIcon: ".popup__close-icon",
  popupInputTypeName: ".popup__input_type_name",
  popupInputTypeProfession: ".popup__input_type_profession",
  popupForm: ".popup__form",
  profileTitle: ".profile__title",
  profileSubtitle: ".profile__subtitle",
  elements: ".elements",
  cardTemplate: ".card-template",
  popupPhoto: ".popup_photo",
  popupMask_group: ".popup__mask-group",
  popupPhotoTitle: ".popup__phototitle",
  popupCard: ".popup_card",
  profileAddButton: ".profile__add-button",
  popupInputTypePlace: ".popup__input_type_place",
  popupInputTypeReference: ".popup__input_type_reference",
  elementsElement: ".elements__element",
  popupOpened: "popup_opened",
  popupOpenedSelector: ".popup_opened",
  elementsMask_group: ".elements__mask-group",
  elementsTitle: ".elements__title",
  elementsGroup: ".elements__group",
  elementsGroupActive: "elements__group_active",
  elementsTrashIcon: ".elements__trash-icon",
}

const popupProfile = document.querySelector(selectors.popupProfile);
const popupProfileOpenButton = document.querySelector(selectors.profileEditButton);
const popupProfileCloseButton =  popupProfile.querySelector(selectors.popupCloseIcon);
const nameInput = popupProfile.querySelector(selectors.popupInputTypeName);
const professionInput = popupProfile.querySelector(selectors.popupInputTypeProfession);
const formProfile = popupProfile.querySelector(selectors.popupForm);
const profileName = document.querySelector(selectors.profileTitle);
const profileProfession = document.querySelector(selectors.profileSubtitle);
const cardList = document.querySelector(selectors.elements);
const cardTemplate = document.querySelector(selectors.cardTemplate);
const popupPhoto = document.querySelector(selectors.popupPhoto);
const cardPhoto = popupPhoto.querySelector(selectors.popupMask_group);
const namePhoto = popupPhoto.querySelector(selectors.popupPhotoTitle);
const popupPhotoCloseButton = popupPhoto.querySelector(selectors.popupCloseIcon);
const popupCard = document.querySelector(selectors.popupCard);
const popupCardOpenButton = document.querySelector(selectors.profileAddButton);
const popupCardCloseButton = popupCard.querySelector(selectors.popupCloseIcon);
const placeInput = popupCard.querySelector(selectors.popupInputTypePlace);
const referenceInput = popupCard.querySelector(selectors.popupInputTypeReference);
const formCard = popupCard.querySelector(selectors.popupForm);
const templateContent = cardTemplate.content.querySelector(selectors.elementsElement);

//общий попап на открытие + добавления слушателей если попап открыт
function openPopup(popup) {
  popup.classList.add(selectors.popupOpened);
  document.addEventListener('keydown', closePopupByEsc);
  popup.addEventListener('click', closePopupByOverlay);
}

//общий попап на закрытие + удаления слушателей если попап закрыт
function closePopup(popup) {
  popup.classList.remove(selectors.popupOpened);
  document.removeEventListener('keydown', closePopupByEsc);
  popup.removeEventListener('click', closePopupByOverlay);
}

//закрытия попапа при нажатии на оверлей
function closePopupByOverlay(evt) {
  const popup = document.querySelector(selectors.popupOpenedSelector);
  if (evt.target !== evt.currentTarget) return;
    closePopup(popup);
}

//закрытия попапа при нажатии на escape
function closePopupByEsc(evt) {
  const popup = document.querySelector(selectors.popupOpenedSelector);
  if (evt.key !== 'Escape') {
    return
  }
    closePopup(popup);
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

//попап на закрытие фото
function closePopupPhoto() {
  closePopup(popupPhoto);
}

//cоздаем разметку карточек в HTML
function createCard(cardData) {
  const card = templateContent.cloneNode(true);
  const templatePhoto = card.querySelector(selectors.elementsMask_group);
  const templateTitle = card.querySelector(selectors.elementsTitle);

  templatePhoto.src = cardData.link;
  templatePhoto.alt = cardData.name;
  templateTitle.textContent = cardData.name;

  //активация-деактивация лайка
  const likeButton = card.querySelector(selectors.elementsGroup);

  likeButton.addEventListener("click", () => {
    likeButton.classList.toggle(selectors.elementsGroupActive);
  });

  //удаление карточки
  card
    .querySelector(selectors.elementsTrashIcon)
    .addEventListener("click", () => {
      card.remove();
    });

  //попап увеличения картинки
  function enlargePhoto() {
    cardPhoto.src = templatePhoto.src;
    cardPhoto.alt = templatePhoto.alt;
    namePhoto.textContent = templateTitle.textContent;
    openPopupPhoto(popupPhoto);
  };

  templatePhoto.addEventListener("click", enlargePhoto);

  //попап на открытие фото
  function openPopupPhoto() {
    openPopup(popupPhoto);
  }

  //добавляем шаблонную карту в лист
  return card;
}

//создаем исходные карты
initialCards.forEach((cardData) => {
  const card = createCard(cardData);
  cardList.append(card);
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

  const card = createCard({
    name: placeInput.value,
    link: referenceInput.value,
  });
  cardList.prepend(card);

  placeInput.value = "";
  referenceInput.value = "";

  closePopupCard(popupCard);
}


//обработчики
popupCardOpenButton.addEventListener("click", openPopupCard);
popupCardCloseButton.addEventListener("click", closePopupCard);
popupProfileOpenButton.addEventListener("click", openProfilePopup);
popupProfileCloseButton.addEventListener("click", closeProfilePopup);
popupPhotoCloseButton.addEventListener("click", closePopupPhoto);
formCard.addEventListener("submit", handleSubmitCardForm);
formProfile.addEventListener("submit", handleSubmitProfileForm);
