export default class Api {
  constructor(config) {
    this._baseUrl = config.baseUrl;
    this._uploadUrl = config.uploadUrl;
    this._searchUrl = config.searchUrl;
    this._trendingUrl = config.trendingUrl,
    this._randomUrl = config.randomUrl,
    this._apiKey = config.apiKey,
    this._limit = config.limit,
    this._query = config.query
  }

  searchGifs(queryTerm) {
    return fetch(this._baseUrl + this._searchUrl + this._apiKey + this._limit + this._query + queryTerm)
      .then((res) => {
        if (res) {
          return res.json();
        }
      })
      .then((res) => {
        const data = res.data;
        return data;
      })
      .catch((err) => console.log(err));
  }

  getTrendingGifs() {
    return fetch(this._baseUrl + this._trendingUrl + this._apiKey + this._limit)
      .then((res) => {
        if (res) {
          return res.json();
        }
      })
      .then((res) => {
        const data = res.data;
        return data;
      })
      .catch((err) => console.log(err));
  }

  getRandomGif() {
    return fetch(this._baseUrl + this._randomUrl + this._apiKey)
      .then((res) => {
        if (res) {
          return res.json();
        }
      })
      .then((res) => {
        const data = res.data;
        return data;
      })
      .catch((err) => console.log(err));
  }

  addGif(formData) {
    return fetch(this._uploadUrl + this._apiKey, {
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