import "./index.css";

import Tabs from '../components/Tabs.js';
import Api from '../components/Api.js';
import Form from "../components/Form.js";

import {
  configTabs,
  baseUrl,
  apiKey
} from '../utils/constants.js';


const tabs = new Tabs(configTabs);

tabs.setEventListener();


const api = new Api(baseUrl, apiKey);

const formAddCardSelector = '.add-card__form';

const formAddCard = new Form(
  formAddCardSelector,
  (data) => {
    api.addCard(data)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(`Error: ${err}`);
      })
  }
);

formAddCard.setEventListener();



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