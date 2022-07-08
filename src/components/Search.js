class Search {
  constructor(formElement, handleElementClick) {
    this._formElement = formElement;
    this._handleElementClick = handleElementClick;
  }

  setEventListeners() {
    this._formElement.addEventListener("submit", (e) => {
      e.preventDefault();
      this._handleElementClick();
    });
  }
}

export default Search;
