import {createElement} from '../utils/create-element.js';

const addFilter = (list, currentFilter) => {
  let filterName = currentFilter.name;
  let filterTitle = filterName[0].toUpperCase() + filterName.slice(1);
  let filterCount = currentFilter.count;

  return list + `<input
        type="radio"
        id="filter__${filterName}"
        class="filter__input visually-hidden"
        name="filter"
      />
      <label for="filter__${filterName}" class="filter__label">
        ${filterTitle} <span class="filter__all-count">${filterCount}</span></label>`;
};

export default class Filters {
  constructor(filters) {
    this._element = null;
    this._filters = filters;
  }


  getTemplate() {
    const filtersText = this._filters.reduce(addFilter, ``);

    return `<section class="main__filter filter container">${filtersText}</section>`;
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
