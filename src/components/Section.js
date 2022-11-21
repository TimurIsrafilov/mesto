export class Section {
  constructor({ data, renderer }, cardContainer) {
    this._initialCards = data;
    this._renderer = renderer;
    this._container = cardContainer;
  }

  renderItems() {
    this._initialCards.forEach((item) => {
      this._renderer(item);
    });
  }

  setItem(element) {
    this._container.prepend(element);
  }
}
