class Api {
  constructor(baseUrl, apiKey) {
    this._baseUrl = baseUrl;
    this._apiKey = apiKey;
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

export default Api;