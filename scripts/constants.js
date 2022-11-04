export const selectors = {
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

export const popupProfile = document.querySelector(selectors.popupProfile);
export const popupProfileOpenButton = document.querySelector(selectors.profileEditButton);
export const popupProfileCloseButton =  popupProfile.querySelector(selectors.popupCloseIcon);
export const nameInput = popupProfile.querySelector(selectors.popupInputTypeName);
export const professionInput = popupProfile.querySelector(selectors.popupInputTypeProfession);
export const formProfile = popupProfile.querySelector(selectors.popupForm);
export const profileName = document.querySelector(selectors.profileTitle);
export const profileProfession = document.querySelector(selectors.profileSubtitle);
export const cardList = document.querySelector(selectors.elements);
export const cardTemplate = document.querySelector(selectors.cardTemplate);
export const popupPhoto = document.querySelector(selectors.popupPhoto);
export const cardPhoto = popupPhoto.querySelector(selectors.popupMask_group);
export const namePhoto = popupPhoto.querySelector(selectors.popupPhotoTitle);
export const popupPhotoCloseButton = popupPhoto.querySelector(selectors.popupCloseIcon);
export const popupCard = document.querySelector(selectors.popupCard);
export const popupCardOpenButton = document.querySelector(selectors.profileAddButton);
export const popupCardCloseButton = popupCard.querySelector(selectors.popupCloseIcon);
export const placeInput = popupCard.querySelector(selectors.popupInputTypePlace);
export const referenceInput = popupCard.querySelector(selectors.popupInputTypeReference);
export const formCard = popupCard.querySelector(selectors.popupForm);
export const templateContent = cardTemplate.content.querySelector(selectors.elementsElement);
