class Form {
  constructor(configForm, handleFormSubmit) {
    this._formElement = document.querySelector(configForm.formSelector);
    this._fileUploadElement = this._formElement.querySelector(configForm.fileUploadSelector);
    this._textContainerUploadElement = this._fileUploadElement.querySelector(configForm.textContainerUploadSelector);
    this._buttonResetUploadElement = this._fileUploadElement.querySelector(configForm.buttonResetUploadSelector);
    this._inputUploadElement = this._fileUploadElement.querySelector(configForm.inputUploadSelector);
    this._inputList = this._formElement.querySelectorAll(configForm.inputListSelector);
    this._buttonElement = this._formElement.querySelector(configForm.buttonSelector);
    this._inactiveButtonClass = configForm.inactiveButtonClass;
    this._handleFormSubmit = handleFormSubmit;
  }

  _getInputValues() {
    this._formData = new FormData();

    this._inputList.forEach(input => {
      if (input.type === 'file') {
        this._formData.append(input.name, input.files[0]);
      } else {
        this._formData.append(input.name, input.value);
      }
    });

    return this._formData;
  }

  _setInactiveButton() {
    this._buttonElement.disabled = true;
    this._buttonElement.classList.add(this._inactiveButtonClass);
  }

  setLoading(isLoading) {
    if (isLoading) {
      this._buttonElement.textContent = 'Sending...';
      this._setInactiveButton();
    } else {
      this._buttonElement.textContent = 'Send';
      this._formElement.reset();
      this._textContainerUploadElement.textContent = 'Select a file';
    }
  }

  setEventListener() {
    this._fileUploadElement.addEventListener('change', (e) => {
      const fileName = e.target.value.split('\\').pop();

      this._textContainerUploadElement.textContent = fileName || 'Select a file';
    });

    this._buttonResetUploadElement.addEventListener('click', (e) => {
      this._textContainerUploadElement.textContent = 'Select a file';
      this._inputUploadElement.value = '';
      this._setInactiveButton();
    });

    this._formElement.addEventListener('submit', (e) => {
      e.preventDefault();
      this._handleFormSubmit(this._getInputValues());
    })
  }
}

export default Form;