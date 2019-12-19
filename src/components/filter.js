import AbstractComponent from './abstract-component.js';

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

export default class Filters extends AbstractComponent {
  constructor(filters) {
    super();
    this._filters = filters;
  }

  get _filtersText() {
    return this._filters.reduce(addFilter, ``);
  }

  getTemplate() {
    return `<section class="main__filter filter container">${this._filtersText}</section>`;
  }
}
