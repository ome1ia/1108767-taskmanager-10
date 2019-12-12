import {createMenuTemplate} from './components/menu.js'
import {createFiltersTemplate} from './components/filter.js'
import {createTasksListTemplate} from './components/tasks.js'
import {createTaskItemTemplate} from './components/task.js'
import {createTaskItemEditTemplate} from './components/task-edit.js'
import ButtonLoad from './components/button-load.js'

//import mocks
import {getFilters} from './mock/filter.js'
import {getTasks} from './mock/task.js'

const TASK_COUNT = 22;
let tasks = getTasks(TASK_COUNT);

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

let buttonLoad = new ButtonLoad();
let buttonLoadElement = buttonLoad.getElement();
tasksList.append(buttonLoadElement);

render(buttonLoadElement, createTaskItemEditTemplate(), `beforeBegin`);

const loadTasks = (count) => {
  const loadedTasksLength = tasksList.querySelectorAll(`.card`).length - 1; //так как всегда загружена 1 задача для редактирования

  for (let i = 0; i < count; i++) {
  	let taskIndex = loadedTasksLength + i;

  	if (taskIndex < TASK_COUNT) {
  	  let taskData = tasks[taskIndex];
  	  render(buttonLoadElement, createTaskItemTemplate(taskData), `beforeBegin`);
  	} else {
  	  buttonLoad.removeElement();
  	  break;
  	}
  }
}

buttonLoadElement.addEventListener(`click`, () => { loadTasks(8) });

loadTasks(7);
