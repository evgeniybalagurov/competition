import { searchUrl, apiKey, limit, query } from "../utils/constants.js";

export default class GridItem {
  constructor({ images, title }, cardElement) {
    this._url = images.downsized_medium.url;
    this._name = title;
    this._element = cardElement.cloneNode(true);
    this._image = this._element.querySelector(".grid__image");
  }

  generateCard() {
    this._image.src = this._url;
    this._image.alt = this._name;
    return this._element;
  }
}
