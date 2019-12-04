import {getFilters} from '../mock/filter.js';

const addFilter = (list, currentFilter) => {
  let filterName = currentFilter.name;
  let filterTitle = filterName[0].toUpperCase() + filterName.slice(1);
  let filterCount = currentFilter.count;

  return list + `<input
          type="radio"
          id="filter__${filterName}"
          class="filter__input visually-hidden"
          name="filter"
          checked
        />
        <label for="filter__${filterName}" class="filter__label">
          ${filterTitle} <span class="filter__all-count">${filterCount}</span></label>`;
};
let filters = getFilters();
let filtersText = filters.reduce(addFilter, ``);

export const createFiltersTemplate = () => {
  return `<section class="main__filter filter container">${filtersText}</section>`;
};
