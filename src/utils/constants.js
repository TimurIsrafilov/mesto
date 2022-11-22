export const selectors = {
  popupProfile: ".popup_profile",
  profileEditButton: ".profile__edit-button",
  popupCloseIcon: "popup__close-icon",
  popupInputTypeName: ".popup__input_type_name",
  popupInputTypeProfession: ".popup__input_type_profession",
  popupForm: ".popup__form",
  popupInput: ".popup__input",
  profileTitle: ".profile__title",
  profileSubtitle: ".profile__subtitle",
  cardsContainer: ".elements",
  cardTemplate: ".card-template",
  popupPhoto: ".popup_photo",
  popupMask_group: ".popup__mask-group",
  popupPhotoTitle: ".popup__phototitle",
  popupCard: ".popup_card",
  profileAddButton: ".profile__add-button",
  popupInputTypePlace: ".popup__input_type_place",
  popupInputTypeReference: ".popup__input_type_reference",
  cardTemplateContent: ".elements__element",
  popupOpened: "popup_opened",
  popupOpenedSelector: ".popup_opened",
  cardImage: ".elements__mask-group",
  cardTitle: ".elements__title",
  cardLike: ".elements__group",
  cardLikeActive: "elements__group_active",
  cardTrashIcon: ".elements__trash-icon",
}

export const validationConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__submit-button",
  inputErrorClass: "popup__input_state_invalid",
  inactiveButtonClass: "popup__submit-button_state_invalid",
};

export const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];