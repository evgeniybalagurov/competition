import { searchUrl, apiKey, limit, query } from "../utils/constants.js";

export default class GifList {
  constructor({ baseUrl }) {
    this._baseUrl = baseUrl;
  }

  getGifs(queryTerm) {
    console.log(this._baseUrl + searchUrl + apiKey + limit + query + queryTerm);
    return fetch(this._baseUrl + searchUrl + apiKey + limit + query + queryTerm)
      .then((res) => {
        if (res) {
          return res.json();
        }
      })
      .then((res) => {
        const data = res.data;
        console.log(data);
        console.log(res.message);
        return data;
      })
      .catch((err) => console.log(err));
  }
  // sendRequest(evt) {
  //   const query = searchInput.value;
  //   const url = `https://api.giphy.com/v1/gifs/search?api_key=${KEY}&limit=10&q=${query}`;
  //   evt.preventDefault();
  //   fetch(url)
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((res) => {
  //       const data = res.data;
  //       console.log(data);
  //       console.log(res.message);
  //     })
  //     .catch((err) => console.log(err));
  // }

  // generateCard() {
  //   this._setEventListeners();
  //   this._image.src = this._link;
  //   this._image.alt = this._name;
  //   this._title.textContent = this._name;
  //   return this._element;
  // }
}
