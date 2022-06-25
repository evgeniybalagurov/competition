export default class GifList {
  constructor({ data }, cardElement) {
    this._name = data.name;
    this._link = data.link;
    this._element = cardElement.cloneNode(true);
    this._image = this._element.querySelector(".card__image");
    this._title = this._element.querySelector(".card__title");
  }

  generateCard() {
    this._setEventListeners();
    this._image.src = this._link;
    this._image.alt = this._name;
    this._title.textContent = this._name;
    return this._element;
  }
  getGifs(){
    
  }
}
