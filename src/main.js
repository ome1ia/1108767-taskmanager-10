import {createMenuTemplate} from './components/menu.js'
import {createFiltersTemplate} from './components/filter.js'
import {createTasksListTemplate} from './components/tasks.js'
import {createTaskItemTemplate} from './components/task.js'
import {createTaskItemEditTemplate} from './components/task-edit.js'
import {createButtonLoadTemplate} from './components/button-load.js'


const render = (container, template, place = `beforeEnd`) => {
  container.insertAdjacentHTML(place, template);
};

const siteMainElement = document.querySelector(`.main`);
const siteHeaderElement = siteMainElement.querySelector(`.main__control`);

render(siteHeaderElement, createMenuTemplate());
render(siteMainElement, createFiltersTemplate());
render(siteMainElement, createTasksListTemplate());

const tasksList = siteMainElement.querySelector(`.board__tasks`);
const taskCount = 3;

render(tasksList, createTaskItemEditTemplate());

for (let i = 0; i < taskCount; i++) {
  render(tasksList, createTaskItemTemplate());
}

render(tasksList, createButtonLoadTemplate());
