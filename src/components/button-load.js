import {createElement} from '../utils/create-element.js';

export default class ButtonLoad {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return `<button class="load-more" type="button">load more</button>`;
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }
    return this._element;
  }

  removeElement() {
    this._element.remove();
    this._element = null;
  }
}
