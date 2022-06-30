const popupElement = document.querySelector('.popup');
const popupElementOpenButton = document.querySelector('.profile__edit-button');
const popupElementCloseButton = popupElement.querySelector('.popup__close-icon');
const nameInput = popupElement.querySelector('.popup__input_name');
const professionInput = popupElement.querySelector('.popup__input_profession');
const formElement = popupElement.querySelector('.popup__form');
const profileName = document.querySelector('.profile__title');
const profileProfession = document.querySelector('.profile__subtitle');

function popupOpen() {
  popupElement.classList.add('popup_opened');
}

function popupClose() {
  popupElement.classList.remove('popup_opened');
}

function formSubmitHandler (evt) {
  evt.preventDefault();
  profileName.textContent =  nameInput.value;
  profileProfession.textContent = professionInput.value;
  popupClose()
}

popupElementOpenButton.addEventListener('click', popupOpen);
popupElementCloseButton.addEventListener('click', popupClose);
formElement.addEventListener('submit', formSubmitHandler);
