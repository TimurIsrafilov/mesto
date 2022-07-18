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

initialCards.forEach(function (element) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardPhoto = cardElement.querySelector(".elements__mask-group");
  const cardTitle = cardElement.querySelector(".elements__title");
  const likeButton = cardElement.querySelector(".elements__group");
  const trashButton = cardElement.querySelector(".elements__trash-icon");

  cardPhoto.src = element.link;
  cardPhoto.alt = element.name;
  cardTitle.textContent = element.name;

  // активация-деактивация лайка
  likeButton.addEventListener('click', function(evt) {
    evt.target.classList.toggle('elements__group_active')
  });

  // кнопка удалить
  function cardRemoval() {
    const cardElement = trashButton.closest('.elements__element');
    cardElement.remove();
}

  trashButton.addEventListener('click', cardRemoval);

  const popupPhoto = document.querySelector('.popup_photo');
  const popupPhotoOpenButton = document.querySelector('.elements__mask-group');
  const popupPhotoCloseButton = popupPhoto.querySelector('.popup__close-icon');

  // увеличение фото
  function popupPhotoOpen() {
    popupPhoto.classList.add('popup_opened');

    cardPhoto.src = element.link;
    cardPhoto.alt = element.name;
    cardTitle.textContent = element.name;
  };

  popupPhotoOpenButton.addEventListener('click', popupPhotoOpen);

  // закрыть увеличение фото
  function popupPhotoClose() {
    popupPhoto.classList.remove('popup_opened')
  };

  popupPhotoCloseButton.addEventListener('click', popupPhotoClose);

  cardList.append(cardElement);
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
