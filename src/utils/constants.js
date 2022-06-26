export const KEY = "l6r7lzQX38ULq1n292LLpWHwUU4iNOWC";
export const baseUrl = `https://api.giphy.com/v1/`;
export const searchUrl = "gifs/search";
export const trendingUrl = "gifs/trending";
export const randomUrl = "gifs/random";
export const apiKey = `?api_key=${KEY}`;
export const limit = `&limit=20`;
export const query = `&q=`

export const searchInput = document.querySelector('input[type="search"]');

export const cardTemplate = document
  .querySelector("#grid-template")
  .content.querySelector(".grid");

const configTabs = {
  linkSelector: '.menu__link',
  contentSelector: '.content__pane',
  buttonAddSelector: '.header__add-btn',
  linkActiveClass: 'menu__link_active',
  contentShowClass: 'content__pane_show'
}
const configAddForm = {
  formSelector: '.form',
  fileUploadSelector: '.upload',
  textContainerUploadSelector: '.upload__text',
  buttonResetUploadSelector: '.upload__button-reset',
  inputUploadSelector: '.upload__input',
  inputListSelector: '.form__input',
  buttonSelector: '.form__button',
  inactiveButtonClass: 'form__button_disabled'
}
const configValidation = {
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.form__button',
  inactiveButtonClass: 'form__button_disabled',
  inputErrorClass: 'form__input_type_error',
  errorClass: 'form__error_visible'
}
const uploadUrl = 'http://upload.giphy.com/v1/gifs';
const apiKey = '48eDHJgBXOuipy8tCNfx9u9vAtEvKgfp';

export {
  configTabs,
  configAddForm,
  configValidation,
  uploadUrl,
  apiKey
}