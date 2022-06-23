import "./index.css";

import Tabs from '../components/Tabs.js';

const configTabs = {
  linkSelector: '.menu__link',
  contentSelector: '.content__pane',
  buttonAddSelector: '.header__add-btn',
  linkActiveClass: 'menu__link_active',
  contentShowClass: 'content__pane_show'
}

const tabObject = new Tabs(configTabs);

tabObject.setEventListener();






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