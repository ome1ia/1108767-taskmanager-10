import AbstractComponent from './abstract-component.js';

export default class ButtonLoad extends AbstractComponent {
  getTemplate() {
    return `<button class="load-more" type="button">load more</button>`;
  }
  setClickHandler(handler) {
    this.getElement().addEventListener(`click`, handler);
  }
}
