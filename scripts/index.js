const popupElement = document.querySelector('.popup_profile');
const popupElementOpenButton = document.querySelector('.profile__edit-button');
const popupElementCloseButton = popupElement.querySelector('.popup__close-icon');
const nameInput = popupElement.querySelector('.popup__input_type_name');
const professionInput = popupElement.querySelector('.popup__input_type_profession');
const formElement = popupElement.querySelector('.popup__form');
const profileName = document.querySelector('.profile__title');
const profileProfession = document.querySelector('.profile__subtitle');

function popupElementOpen() {
  nameInput.value = profileName.textContent;
  professionInput.value = profileProfession.textContent;
  popupElement.classList.add('popup_opened');
};

function popupElementClose() {
  popupElement.classList.remove('popup_opened');
};

function formProfileSubmitHandler (evt) {
  evt.preventDefault();
  profileName.textContent =  nameInput.value;
  profileProfession.textContent = professionInput.value;
  popupElementClose()
};

popupElementOpenButton.addEventListener('click', popupElementOpen);
popupElementCloseButton.addEventListener('click', popupElementClose);
formElement.addEventListener('submit', formProfileSubmitHandler);
//конец ПР4

//начало ПР5
const popapForm = document.querySelector('.popup_card');
const inputPlace = popapForm.querySelector('.popup__input_type_place');
const inputReference = popapForm.querySelector('.popup__input_type_reference');
const cardlist = document.querySelector('.elements');
const template = document.querySelector('.card-template');
const cardName = cardlist.querySelector('.elements__title');
const popupPhoto = document.querySelector('.popup_photo');
const cardPhoto = popupPhoto.querySelector('.elements__mask-group');
const namePhoto = popupPhoto.querySelector('.elements__title');
const popupPhotoCloseButton = popupPhoto.querySelector('.popup__close-icon');

//cоздаем разметку карточек в HTML
function createCard(cardName) {
  const templateCard = document.querySelector('.card-template').content.querySelector('.elements__element').cloneNode(true);

  templateCard.querySelector('.elements__mask-group').src = cardName.link;
  templateCard.querySelector('.elements__mask-group').alt = cardName.name;
  templateCard.querySelector('.elements__title').textContent = cardName.name;

  //активация-деактивация лайка
  templateCard.querySelector('.elements__group').addEventListener('click', function(evt) {
  evt.target.classList.toggle('elements__group_active')});

  //удаление карточки
  templateCard.querySelector('.elements__trash-icon').addEventListener('click', () => { templateCard.remove(); });

  //попап увеличения картинки
  templateCard.querySelector('.elements__mask-group').onclick = function () {
    popupPhotoOpen();
    cardPhoto.src = templateCard.querySelector('.elements__mask-group').src;
    cardPhoto.alt = templateCard.querySelector('.elements__mask-group').alt;
    namePhoto.textContent = templateCard.querySelector('.elements__title').textContent;
  };

  function popupPhotoOpen() {
    popupPhoto.classList.add('popup_opened');
    cardPhoto.classList.add('elements__mask-group_size_enlarge');
    cardPhoto.classList.remove('elements__mask-group');
    namePhoto.classList.add('elements__title_size_enlarge');
  };

  function popupPhotoClose() {
    popupPhoto.classList.remove('popup_opened');
  };

  popupPhotoCloseButton.addEventListener('click', popupPhotoClose);

  //добавляем шаблонную карту в лист
  cardlist.appendChild(templateCard);
};

//активация формы попап для внесения карточек
const popupCard = document.querySelector('.popup_card');
const popupCardOpenButton = document.querySelector('.profile__add-button');
const popupCardCloseButton = popupCard.querySelector('.popup__close-icon');
const placeInput = popupCard.querySelector('.popup__input_type_place');
const referenceInput = popupCard.querySelector('.popup__input_type_reference');
const formCard = popupCard.querySelector('.popup__form');

function popupCardOpen() {
  popupCard.classList.add('popup_opened');
};

function popupCardClose() {
  popupCard.classList.remove('popup_opened');
};

function formCardSubmitHandler (evt) {
  evt.preventDefault();
  createCard({name:placeInput.value, link:referenceInput.value});
  popupCardClose()
};

popupCardOpenButton.addEventListener('click', popupCardOpen);
popupCardCloseButton.addEventListener('click', popupCardClose);
formCard.addEventListener('submit', formCardSubmitHandler);

//создание исходных карточек
function createInitialCards() {
  initialCards.forEach(createCard);
};

createInitialCards();
