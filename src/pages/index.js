import { FormValidator } from "../components/FormValidator.js";
import { Card } from "../components/Card.js";
import { Section } from "../components/Section.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { Popup } from "../components/Popup.js";
import { UserInfo } from "../components/UserInfo.js";
import './index.css';

import {
  selectors,
  popupProfile,
  popupProfileOpenButton,
  formProfile,
  cardContainer,
  popupPhoto,
  popupCard,
  popupCardOpenButton,
  formCard,
  templateContent,
  validationConfig,
  initialCards,
} from "../utils/constants.js";

const cardList = new Section(
  {
    data: initialCards,
    renderer: (cardData) => {
      const card = new Card(
        cardData,
        {
          handleCardClick(name, link) {
            popupWithImage.open(name, link);
          },
        },
        templateContent
      );
      const cardElement = card.createCard();
      cardList.setItem(cardElement);
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

const popupWithFormCard = new PopupWithForm(popupCard, formCard, {
    handleFormSubmit: (data) => {
      const newCard = new Card(
        { name: data.place, link: data.reference },
        {
          handleCardClick(name, link) {
            popupWithImage.open(name, link);
          },
        },
        templateContent
      );
      cardList.setItem(newCard.createCard());
      popupWithFormCard.close();
    },
  },
  cardContainer
);

//обработчики
cardList.renderItems();

formValidatorProfile.enableValidation();
formValidatorCard.enableValidation();

popupWithImage.setEventListeners();
popupWithFormProfile.setEventListeners();
popupWithFormCard.setEventListeners();

//слушатели
popupProfileOpenButton.addEventListener("click", () => {
  userInfo.getUserInfo();
  profilePopup.open();
});
popupCardOpenButton.addEventListener("click", () => cardPopup.open());
