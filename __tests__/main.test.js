import {createMenuTemplate} from '../src/components/menu.js'
import {createFiltersTemplate} from '../src/components/filter.js'
import {createTasksListTemplate} from '../src/components/tasks.js'
import {createTaskItemTemplate} from '../src/components/task.js'
import {createTaskItemEditTemplate} from '../src/components/task-edit.js'
import {createButtonLoadTemplate} from '../src/components/button-load.js'


const render = (container, template, place = `beforeEnd`) => {
  container.insertAdjacentHTML(place, template);
};

const siteMainElement = document.querySelector(`.main`);
const siteHeaderElement = siteMainElement.querySelector(`.main__control`);

render(siteHeaderElement, createMenuTemplate());

test('create menu', () => {
  expect(siteHeaderElement.querySelector(`.control__btn-wrap`).length).toBe(1);
});
