const popupElement = document.querySelector('.popup_profile');
const popupElementOpenButton = document.querySelector('.profile__edit-button');
const popupElementCloseButton = popupElement.querySelector('.popup__close-icon');
const nameInput = popupElement.querySelector('.popup__input_type_name');
const professionInput = popupElement.querySelector('.popup__input_type_profession');
const formElement = popupElement.querySelector('.popup__form');
const profileName = document.querySelector('.profile__title');
const profileProfession = document.querySelector('.profile__subtitle');

function popupOpen() {
  nameInput.value = profileName.textContent;
  professionInput.value = profileProfession.textContent;
  popupElement.classList.add('popup_opened');
}

function popupClose() {
  popupElement.classList.remove('popup_opened');
}

function formProfileSubmitHandler (evt) {
  evt.preventDefault();
  profileName.textContent =  nameInput.value;
  profileProfession.textContent = professionInput.value;
  popupClose()
}

popupElementOpenButton.addEventListener('click', popupOpen);
popupElementCloseButton.addEventListener('click', popupClose);
formElement.addEventListener('submit', formProfileSubmitHandler);
// конец ПР4

// автозаполнение карточек
const cardList = document.querySelector('.elements');
const cardElement = document.querySelector('.elements__element');
const cardTemplate = document.querySelector('.card-template').content;

const initialCards = [
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

initialCards.forEach(function (element) {
  const cardElement = cardTemplate.cloneNode(true);

  cardElement.querySelector('.elements__title').textContent = element.name;
  cardElement.querySelector('.elements__mask-group').src = element.link;
  cardElement.querySelector('.elements__mask-group').alt = element.name;

  cardList.append(cardElement);
})

// кнопка удалить
const trashButton = document.querySelector('.elements__trash-icon');

function cardRemoval() {
  const cardElement = trashButton.closest('.elements__element');
  cardElement.remove();
}

trashButton.addEventListener('click', cardRemoval);

// активация-деактивация лайка
document.querySelector('.elements__group').addEventListener('click', function (evt) {
  evt.target.classList.toggle('elements__group_active');
});

// активация формы попап для внесения карточек
const popupCard = document.querySelector('.popup_card');
const popupCardOpenButton = document.querySelector('.profile__add-button');
const popupCardCloseButton = popupCard.querySelector('.popup__close-icon');
const placeInput = popupCard.querySelector('.popup__input_type_place');
const referenceInput = popupCard.querySelector('.popup__input_type_reference');
const formCard = popupCard.querySelector('.popup__form');
const placeName = document.querySelector('.elements__title');
const placePicture = document.querySelector('.elements__mask-group');

popupCardOpenButton.addEventListener('click', function() {
  popupCard.classList.add('popup_opened');
});

popupCardCloseButton.addEventListener('click', function() {
  popupCard.classList.remove('popup_opened');
});

function formCardSubmitHandler (evt) {
  evt.preventDefault();
  placeName.textContent =  placeInput.value;
  placePicture.textContent = referenceInput.value;
  popupCard.classList.remove('popup_opened');
}

popupCardOpenButton.addEventListener('click', popupOpen);
popupCardCloseButton.addEventListener('click', popupClose);
formCard.addEventListener('submit', formCardSubmitHandler);

// активация формы попап увеличения фото
const popupPhoto = document.querySelector('.popup_photo');
const popupPhotoOpenButton = document.querySelector('.elements__mask-group');
const popupPhotoCloseButton = popupPhoto.querySelector('.popup__close-icon');

popupPhotoOpenButton.addEventListener('click', function(element) {
  popupPhoto.classList.add('popup_opened');
  popupPhotoOpenButton.textContent = element.alt;
  popupPhotoOpenButton.src = element.src;
  popupPhotoOpenButton.alt = element.alt;
});

popupPhotoCloseButton.addEventListener('click', function() {
  popupPhoto.classList.remove('popup_opened');
});
