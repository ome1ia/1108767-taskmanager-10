import {createMenuTemplate} from './components/menu.js'
import {createFiltersTemplate} from './components/filter.js'
import {createTasksListTemplate} from './components/tasks.js'
import {createTaskItemTemplate} from './components/task.js'
import {createTaskItemEditTemplate} from './components/task-edit.js'
import {createButtonLoadTemplate} from './components/button-load.js'

//import mocks for data
import {getFilters} from './mock/filter.js'
import {getTask} from './mock/task.js'

const render = (container, template, place = `beforeEnd`) => {
  container.insertAdjacentHTML(place, template);
};

const siteMainElement = document.querySelector(`.main`);
const siteHeaderElement = siteMainElement.querySelector(`.main__control`);

render(siteHeaderElement, createMenuTemplate());

let filters = getFilters();
render(siteMainElement, createFiltersTemplate(filters));

render(siteMainElement, createTasksListTemplate());

const tasksList = siteMainElement.querySelector(`.board__tasks`);
render(tasksList, createTaskItemEditTemplate());

const TASK_COUNT = 8;

for (let i = 0; i < TASK_COUNT; i++) {
  let task = getTask();
  render(tasksList, createTaskItemTemplate(task));
}

render(tasksList, createButtonLoadTemplate());
