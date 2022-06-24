class Api {
  constructor(baseUrl, apiKey) {
    this._baseUrl = baseUrl;
    this._apiKey = apiKey;
  }

  addCard({ file, tags }) {
    return fetch(`${this._baseUrl}?api_key=${this._apiKey}&file=${file}&tags=${tags}`)
      .then(this._getResposeData)
  }

  _getResponseData(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Error: ${res.status}`);
  }
}

export default Api;