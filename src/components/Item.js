export default class Item {
  constructor({ images, title }) {
    this._url = images.downsized_medium.url;
    this._name = title;
    this._image = document.querySelector(".random__image");
  }

  generateItem() {
    this._image.src = this._url;
    this._image.alt = this._name;
    return this._image;
  }
}