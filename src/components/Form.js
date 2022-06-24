class Form {
  constructor(formSelector, handleFormSubmit) {
    this._formElement = document.querySelector(formSelector);
    this._inputList = this._formElement.querySelectorAll('.add-card__input');
    this._buttonElement = this._formElement.querySelector('.add-card__button');
    this._handleFormSubmit = handleFormSubmit;
  }

  _getInputValues() {
    this._inputValues = {};

    this._inputList.forEach(input => {
  
      if (input.type === 'file') {
        this._getFileInputValue(input);
      } else {
        this._inputValues[input.name] = input.value;
      }
    });

    return this._inputValues;
  }

  _getFileInputValue(input) {
    const file = input.files[0];
    this._reader = new FileReader();

    this._reader.readAsDataURL(file);

    this._reader.onload = () => {
      this._inputValues[input.name] = this._reader.result;
      this._handleFormSubmit(this._inputValues);
    };
  
    this._reader.onerror = () => {
      console.log(`Error: ${this._reader.error}`);
    };
  }

  setEventListener() {
    this._formElement.addEventListener('submit', (e) => {
      e.preventDefault();
      this._getInputValues();
    })
  }
}

export default Form;