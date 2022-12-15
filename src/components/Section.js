export class Section {
  constructor({ renderer }, cardContainer) {
    this._renderer = renderer;
    this._container = cardContainer;
  }

  renderItems(cards) {
    cards.forEach((item) => {
      this._container.append(this._renderer(item));
    });
  }

  setItem(element) {
    this._container.prepend(element);
  }
}
