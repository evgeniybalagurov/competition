class FormValidator {
  constructor(config, formElement) {
    this._inputSelector = config.inputSelector;
    this._submitButtonSelector = config.submitButtonSelector;
    this._inactiveButtonClass = config.inactiveButtonClass;
    this._formElement = formElement;
    this._inputErrorClass = config.inputErrorClass;
    this._errorClass = config.errorClass;
    this._buttonElement = this._formElement.querySelector(this._submitButtonSelector);
    this._inputList = this._formElement.querySelectorAll(this._inputSelector);
  }

  _showInputError(_inputElement) {
    const _errorElement = document.querySelector(`.${_inputElement.id}-error`);

    _errorElement.textContent = _inputElement.validationMessage;
    _inputElement.classList.add(this._inputErrorClass);
    _errorElement.classList.add(this._errorClass);
  }

  _hideInputError(_inputElement) {
    const _errorElement = document.querySelector(`.${_inputElement.id}-error`);

    _errorElement.textContent = '';
    _inputElement.classList.remove(this._inputErrorClass);
    _errorElement.classList.remove(this._errorClass);
  }

  _toggleButtonState() {
    this._buttonElement.disabled = !this._formElement.checkValidity();
    this._buttonElement.classList.toggle(this._inactiveButtonClass, !this._formElement.checkValidity());
  }

  _handleFormInput(_inputElement) {
    if (_inputElement.validity.valid) {
      this._hideInputError(_inputElement);
    } else {
      this._showInputError(_inputElement);
    }
    this._toggleButtonState();
  }

  _setEventListeners() {
    this._inputList.forEach((_inputElement) => {
      _inputElement.addEventListener('input', () => this._handleFormInput(_inputElement));
    })
  }

  enableValidation() {
    this._setEventListeners();
    this._toggleButtonState();
  }
}

export default FormValidator;