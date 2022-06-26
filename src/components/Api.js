import {
  searchUrl,
  trendingUrl,
  randomUrl,
  apiKey,
  limit,
  query,
} from "../utils/constants.js";

export default class Api {
  constructor({ baseUrl }) {
    this._baseUrl = baseUrl;
  }

  searchGifs(queryTerm) {
    return fetch(this._baseUrl + searchUrl + apiKey + limit + query + queryTerm)
      .then((res) => {
        if (res) {
          return res.json();
        }
      })
      .then((res) => {
        const data = res.data;
        console.log(res.message);
        return data;
      })
      .catch((err) => console.log(err));
  }

  getTrendingGifs() {
    return fetch(this._baseUrl + trendingUrl + apiKey + limit)
      .then((res) => {
        if (res) {
          return res.json();
        }
      })
      .then((res) => {
        const data = res.data;
        console.log(res.meta.msg);
        return data;
      })
      .catch((err) => console.log(err));
  }
  
  getRandomGif() {
    return fetch(this._baseUrl + randomUrl + apiKey)
      .then((res) => {
        if (res) {
          return res.json();
        }
      })
      .then((res) => {
        const data = res.data;
        console.log(res.message);
        return data;
      })
      .catch((err) => console.log(err));
  }
  
  addCard(formData) {
    return fetch(`${this._baseUrl}?api_key=${this._apiKey}`, {
        method: "POST",
        body: formData,
      })
      .then(this._getResposeData)
  }

  _getResponseData(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Error: ${res.message}`);
  }
}