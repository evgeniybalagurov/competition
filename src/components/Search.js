class Search {
  constructor(buttonElement, inputElement, handleElementClick) {
    this._buttonElement = buttonElement;
    this._inputElement = inputElement;
    this._handleElementClick = handleElementClick;
  }

  setEventListeners() {
    this._buttonElement.addEventListener("click", () => {
      this._handleElementClick();
    });
    this._inputElement.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        this._handleElementClick();
      }
    });
  }
}

export default Search;
