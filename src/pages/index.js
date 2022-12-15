import { FormValidator } from "../components/FormValidator.js";
import { Card } from "../components/Card.js";
import { Section } from "../components/Section.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { UserInfo } from "../components/UserInfo.js";
import { selectors, validationConfig } from "../utils/constants.js";
// import './index.css';

import { Api } from "../components/Api.js";
import { PopupWithConfirmation } from "../components/PopupWithConfirmation.js";

const popupProfile = document.querySelector(selectors.popupProfile);
const popupProfileOpenButton = document.querySelector(
  selectors.profileEditButton
);
const nameInput = popupProfile.querySelector(selectors.popupInputTypeName);
const professionInput = popupProfile.querySelector(
  selectors.popupInputTypeProfession
);
const formProfile = popupProfile.querySelector(selectors.popupForm);

const cardContainer = document.querySelector(selectors.cardsContainer);
const cardTemplate = document.querySelector(selectors.cardTemplate);
const popupCard = document.querySelector(selectors.popupCard);
const popupCardOpenButton = document.querySelector(selectors.profileAddButton);
const formCard = popupCard.querySelector(selectors.popupForm);
const templateContent = cardTemplate.content.querySelector(
  selectors.cardTemplateContent
);

const popupPhoto = document.querySelector(selectors.popupPhoto);
export const cardPhoto = popupPhoto.querySelector(selectors.popupMask_group);
export const namePhoto = popupPhoto.querySelector(selectors.popupPhotoTitle);

const popupConfirmation = document.querySelector(selectors.popupConfirmation);
const formConfirmation = popupCard.querySelector(selectors.popupForm);
export const submitButton = popupConfirmation.querySelector(
  selectors.submitButton
);

const popupAvatar = document.querySelector(selectors.popupAvatar);
const popupAvatarOpenButton = document.querySelector(
  selectors.profileAvatarButton
);
const avatarInput = popupAvatar.querySelector(selectors.popupInputTypeAvatar);
const formAvatar = popupAvatar.querySelector(selectors.popupForm);

let userId;

const api = new Api({
  baseUrl: "https://mesto.nomoreparties.co/v1/cohort-54",
  headers: {
    authorization: "0696f677-58b1-4ea2-bdfa-d2fcd17ccfa1",
    "Content-Type": "application/json",
  },
});

function createCard(cardData) {
  const card = new Card(
    cardData,
    (name, link) => {
      popupWithImage.open(name, link);
    },
    templateContent,
    (id) => {
      popupWithFormConfirm.open();
      popupWithFormConfirm.submitHandler(() => {
        api.deleteCard(id)
          .then((res) => {
            card.removeCard();
          })
          .catch((err) => console.log(`Ошибка.....: ${err}`));
      });
    },
    (id) => {
      if (card.isLiked()) {
        api.deleteLike(id)
          .then((res) => {
            card.countLikesNumber(res.likes);
          })
          .catch((err) => console.log(`Ошибка.....: ${err}`));
      } else {
        api.addLike(id)
          .then((res) => {
            card.countLikesNumber(res.likes);
          })
          .catch((err) => console.log(`Ошибка.....: ${err}`));
      }
    }
  );

  return card.createCard();
}

Promise.all([api.getProfileInfo(), api.getInitialCards()])
  .then(([res, serverCards]) => {
    userInfo.setUserInfo(res.name, res.about);
    userInfo.setUserAvatar(res.avatar);
    userId = res._id;
    cardList.renderItems(serverCards);
  })
  .catch((err) => console.log(`Ошибка.....: ${err}`));

const cardList = new Section(
  {
    data: [],
    renderer: (cardData) => {
      cardList.setItem(cardData);
    },
  },
  cardContainer
);

const popupWithFormCard = new PopupWithForm(
  // popupCard,
  selectors.popupCard,
  (data) => {
    popupWithFormCard.renderLoading(true);
    api.addNewCard(data.place, data.reference)
      .then((res) => {
        cardList.setItem(
          createCard({
            name: res.name,
            link: res.link,
            likes: res.likes,
            id: res._id,
            userId: userId,
            ownerId: res.owner._id,
          })
        );
      })
      .catch((err) => console.log(`Ошибка.....: ${err}`))
      .finally(() => {
        popupWithFormCard.renderLoading(false);
      });
  },
  cardContainer
);

const popupWithFormAvatar = new PopupWithForm(
  // popupAvatar,
  selectors.popupAvatar,
  (data) => {
  popupWithFormAvatar.renderLoading(true);
  api.updateAvatar(data.avatar)
    .then((res) => {
      userInfo.setUserAvatar(data.avatar);
    })
    .catch((err) => console.log(`Ошибка.....: ${err}`))
    .finally(() => {
      popupWithFormAvatar.renderLoading(false);
    });
});

const userInfo = new UserInfo({
  name: selectors.profileTitle,
  profession: selectors.profileSubtitle,
  avatar: selectors.profileAvatar,
});

const formValidatorProfile = new FormValidator(validationConfig, formProfile);
const formValidatorCard = new FormValidator(validationConfig, formCard);
const formValidatorAvatar = new FormValidator(validationConfig, formAvatar);

const popupWithImage = new PopupWithImage(selectors.popupPhoto);

const popupWithFormProfile = new PopupWithForm(
  // popupProfile,
  selectors.popupProfile,
   (data) => {
  popupWithFormProfile.renderLoading(true);
  api.editProfileInfo(data.name, data.profession)
    .then((res) => {
      userInfo.setUserInfo(data.name, data.profession);
    })
    .catch((err) => console.log(`Ошибка.....: ${err}`))
    .finally(() => {
      popupWithFormProfile.renderLoading(false);
    });
});

const popupWithFormConfirm = new PopupWithConfirmation(selectors.popupConfirmation);

//обработчики
cardList.renderItems();

formValidatorProfile.enableValidation();
formValidatorCard.enableValidation();
formValidatorAvatar.enableValidation();

popupWithImage.setEventListeners();
popupWithFormProfile.setEventListeners();
popupWithFormCard.setEventListeners();

popupWithFormConfirm.setEventListeners();
popupWithFormAvatar.setEventListeners();

//слушатели
popupProfileOpenButton.addEventListener("click", () => {
  const { name, profession } = userInfo.getUserInfo();
  nameInput.value = name;
  professionInput.value = profession;
  popupWithFormProfile.open();
});
popupCardOpenButton.addEventListener("click", () => popupWithFormCard.open());

popupAvatarOpenButton.addEventListener("click", () =>
  popupWithFormAvatar.open()
);
