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
}
