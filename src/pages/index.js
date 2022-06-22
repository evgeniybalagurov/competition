import "./index.css";

const fileUploadElement = document.querySelector('.upload');
const textContainer = fileUploadElement.querySelector('.upload__text');

const fileUpload = () => {
  fileUploadElement.addEventListener('change', (e) => {
      const fileName = e.target.value.split('\\').pop();

      textContainer.textContent = fileName || 'Select a file';
  });
}

fileUpload();

const fileReset = () => {
  fileUploadElement.querySelector('.upload__button-reset').addEventListener('click', (e) => {
    textContainer.textContent = 'Select a file';
    fileUploadElement.querySelector('.upload__input').value = '';
  });
}

fileReset();