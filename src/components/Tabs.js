class Tabs {
  constructor(config, handleElementClick) {
    this._linkElements = document.querySelectorAll(config.linkSelector);
    this._contentElements = document.querySelectorAll(config.contentSelector);
    this._buttonElement = document.querySelector(config.buttonAddSelector);
    this._linkActiveClass = config.linkActiveClass;
    this._contentShowClass = config.contentShowClass;
    this._handleElementClick = handleElementClick;
  }

  _addClass(element, className) {
    element.classList.add(className);
  }

  _removeClass(elements, className) {
    elements.forEach(element => element.classList.remove(className));
  }

  _removeActiveClass() {
    this._removeClass(this._linkElements, this._linkActiveClass);
    this._removeClass(this._contentElements, this._contentShowClass);
  }

  setEventListener() {
    this._linkElements.forEach((element, index) => element.addEventListener('click', () => {
      this._removeActiveClass();
      this._addClass(this._linkElements[index], this._linkActiveClass);
      this._addClass(this._contentElements[index], this._contentShowClass);
      this._handleElementClick(index);
    }));
    if (this._buttonElement) this._buttonElement.addEventListener('click', () => {
      this._removeActiveClass();
      this._addClass(this._contentElements[this._contentElements.length - 1], this._contentShowClass);
      this._handleElementClick(this._contentElements.length - 1);
    })
  }
}

export default Tabs;