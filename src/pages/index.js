import { FormValidator } from "../components/FormValidator.js";
import { Card } from "../components/Card.js";
import { Section } from "../components/Section.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { Popup } from "../components/Popup.js";
import { UserInfo } from "../components/UserInfo.js";
import { selectors, validationConfig, initialCards } from "../utils/constants.js";
import './index.css';

const popupProfile = document.querySelector(selectors.popupProfile);
const popupProfileOpenButton = document.querySelector(selectors.profileEditButton);
const nameInput = popupProfile.querySelector(selectors.popupInputTypeName);
const professionInput = popupProfile.querySelector(selectors.popupInputTypeProfession);
const formProfile = popupProfile.querySelector(selectors.popupForm);

const cardContainer = document.querySelector(selectors.cardsContainer);
const cardTemplate = document.querySelector(selectors.cardTemplate);
const popupCard = document.querySelector(selectors.popupCard);
const popupCardOpenButton = document.querySelector(selectors.profileAddButton);
const formCard = popupCard.querySelector(selectors.popupForm);
const templateContent = cardTemplate.content.querySelector(selectors.cardTemplateContent);

const popupPhoto = document.querySelector(selectors.popupPhoto);
export const cardPhoto = popupPhoto.querySelector(selectors.popupMask_group);
export const namePhoto = popupPhoto.querySelector(selectors.popupPhotoTitle);

function addCard(cardData) {
  const card = new Card(
    cardData,
    {
      handleCardClick(name, link) {
        popupWithImage.open(name, link);
      },
    },
    templateContent
  );
  cardList.setItem(card.createCard());
}

const cardList = new Section(
  {
    data: initialCards,
    renderer: addCard,
  },
  cardContainer
);

const popupWithFormCard = new PopupWithForm(
  popupCard,
  formCard,
  {
    handleFormSubmit: (data) => {
      addCard({ name: data.place, link: data.reference });
    },
  },
  cardContainer
);

const userInfo = new UserInfo({
  name: selectors.profileTitle,
  profession: selectors.profileSubtitle,
});

const formValidatorProfile = new FormValidator(validationConfig, formProfile);
const formValidatorCard = new FormValidator(validationConfig, formCard);

const profilePopup = new Popup(popupProfile);
const cardPopup = new Popup(popupCard);
const popupWithImage = new PopupWithImage(popupPhoto);

const popupWithFormProfile = new PopupWithForm(popupProfile, formProfile, {
  handleFormSubmit: (data) => {
    userInfo.setUserInfo(data.name, data.profession);
  },
});

//обработчики
cardList.renderItems();

formValidatorProfile.enableValidation();
formValidatorCard.enableValidation();

popupWithImage.setEventListeners();
popupWithFormProfile.setEventListeners();
popupWithFormCard.setEventListeners();

//слушатели
popupProfileOpenButton.addEventListener("click", () => {
  nameInput.value = userInfo.getUserInfo().name;
  professionInput.value = userInfo.getUserInfo().profession;
  profilePopup.open();
});
popupCardOpenButton.addEventListener("click", () => cardPopup.open());
