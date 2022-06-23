class Tabs {
  constructor(config) {
    this._linkElements = document.querySelectorAll(config.linkSelector);
    this._contentElements = document.querySelectorAll(config.contentSelector);
    this._buttonAddElement = document.querySelector(config.buttonAddSelector);
    this._linkActiveClass = config.linkActiveClass;
    this._contentShowClass = config.contentShowClass;
  }

  setEventListener() {
    this._linkElements.forEach((element, index) => element.addEventListener('click', () => {
      this._removeClass(this._linkElements, this._linkActiveClass);
      this._removeClass(this._contentElements, this._contentShowClass);

      this._addClass(this._linkElements[index], this._linkActiveClass);
      this._addClass(this._contentElements[index], this._contentShowClass);
    }));
    if (this._buttonAddElement) this._buttonAddElement.addEventListener('click', () => {
      this._removeClass(this._linkElements, this._linkActiveClass);
      this._removeClass(this._contentElements, this._contentShowClass);

      this._addClass(this._contentElements[this._contentElements.length - 1], this._contentShowClass);
    })
  }

  _addClass(element, className) {
    element.classList.add(className);
  }

  _removeClass(elements, className) {
    elements.forEach(element => element.classList.remove(className));
  }
}

export default Tabs;