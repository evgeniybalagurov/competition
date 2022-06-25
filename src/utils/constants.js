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
  buttonDisabledClass: 'form__button_disabled'
}
const uploadUrl = 'http://upload.giphy.com/v1/gifs';
const apiKey = '48eDHJgBXOuipy8tCNfx9u9vAtEvKgfp';

export {
  configTabs,
  configAddForm,
  uploadUrl,
  apiKey
}