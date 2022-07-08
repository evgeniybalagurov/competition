const KEY = "l6r7lzQX38ULq1n292LLpWHwUU4iNOWC";

export const configApi = {
  baseUrl: `https://api.giphy.com/v1/gifs/`,
  uploadUrl: 'http://upload.giphy.com/v1/gifs',
  searchUrl: "search",
  trendingUrl: "trending",
  randomUrl: "random",
  apiKey: `?api_key=${KEY}`,
  limit: `&limit=20`,
  query: `&q=`
}

export const searchFormElement = document.querySelector('.search__form');
export const searchInputElement = searchFormElement.querySelector('input[type="search"]');
export const feed = document.querySelector(".feed__grid");
export const trends = document.querySelector('.trends__grid');
export const randomGif = document.querySelector(".random__wrapper");

export const cardTemplate = document
  .querySelector("#grid-template")
  .content.querySelector(".grid");

export const configTabs = {
  linkSelector: '.menu__link',
  contentSelector: '.content__pane',
  buttonAddSelector: '.menu__add-btn',
  linkActiveClass: 'menu__link_active',
  contentShowClass: 'content__pane_show'
}
export const configAddForm = {
  formSelector: '.form',
  fileUploadSelector: '.upload',
  textContainerUploadSelector: '.upload__text',
  buttonResetUploadSelector: '.upload__button-reset',
  inputUploadSelector: '.upload__input',
  inputListSelector: '.form__input',
  buttonSelector: '.form__button',
  inactiveButtonClass: 'form__button_disabled'
}
export const configValidation = {
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.form__button',
  inactiveButtonClass: 'form__button_disabled',
  inputErrorClass: 'form__input_type_error',
  errorClass: 'form__error_visible'
}