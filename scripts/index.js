import { FormValidator } from './FormValidator.js';
import { Card } from './Card.js';
import { initialCards } from './cards.js';

initialCards

import {
  selectors,
  popupProfile,
  popupProfileOpenButton,
  popupProfileCloseButton,
  nameInput,
  professionInput,
  formProfile,
  profileName,
  profileProfession,
  cardList,
  popupPhoto,
  popupPhotoCloseButton,
  popupCard,
  popupCardOpenButton,
  popupCardCloseButton,
  placeInput,
  referenceInput,
  formCard,
  templateContent,
} from "./constants.js";

// ----------------------------------------------



const config = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit-button',
  inputErrorClass: 'popup__input_state_invalid',
  inactiveButtonClass: 'popup__submit-button_state_invalid',
}

const formValidatorProfile = new FormValidator(config, formProfile);
const formValidatorCard = new FormValidator(config, formCard);

formValidatorProfile.enableValidation();
formValidatorCard.enableValidation();

//  ---------------------






// -----------------------------------------------

export { openPopup };

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

//создание карт
const renderCard = (data) => {
  const card = new Card(data, templateContent);
  const cardElement = card.createCard();
  cardList.prepend(cardElement);
}

//создание исходных карт
initialCards.forEach((data, cardList) => {
  renderCard(data);
});

//создание новой карты
function handleSubmitCardForm(evt) {
  evt.preventDefault();

  const card = renderCard({
    name: placeInput.value,
    link: referenceInput.value,
  });

  placeInput.value = "";
  referenceInput.value = "";

  closePopupCard(popupCard);
}

//функция правки профиля
function handleSubmitProfileForm(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileProfession.textContent = professionInput.value;
  closeProfilePopup();
}

//обработчики
popupCardOpenButton.addEventListener("click", openPopupCard);
popupCardCloseButton.addEventListener("click", closePopupCard);
popupProfileOpenButton.addEventListener("click", openProfilePopup);
popupProfileCloseButton.addEventListener("click", closeProfilePopup);
popupPhotoCloseButton.addEventListener("click", closePopupPhoto);
formCard.addEventListener("submit", handleSubmitCardForm);
formProfile.addEventListener("submit", handleSubmitProfileForm);
