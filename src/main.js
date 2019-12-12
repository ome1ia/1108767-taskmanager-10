import Menu from './components/menu.js'
import Filters from './components/filter.js'
import TasksList from './components/tasks.js'
import TaskItem from './components/task.js'
import TaskItemEdit from './components/task-edit.js'
import ButtonLoad from './components/button-load.js'

//import mocks
import {getFilters} from './mock/filter.js'
import {getTasks} from './mock/task.js'

const TASK_COUNT = 22;
const tasks = getTasks(TASK_COUNT);

const render = (container, template, place = `beforeEnd`) => {
  container.insertAdjacentHTML(place, template);
};

const siteMainElement = document.querySelector(`.main`);
const siteHeaderElement = siteMainElement.querySelector(`.main__control`);

const menu = new Menu();
const menuElement = menu.getElement();
siteHeaderElement.append(menuElement);

const filtersData = getFilters();
const filters = new Filters(filtersData);
const filtersElement = filters.getElement();
siteMainElement.append(filtersElement);

const tasksList = new TasksList();
const tasksListElement = tasksList.getElement();
siteMainElement.append(tasksListElement);

const tasksContainer = siteMainElement.querySelector(`.board__tasks`);

const buttonLoad = new ButtonLoad();
const buttonLoadElement = buttonLoad.getElement();
tasksContainer.after(buttonLoadElement);

const taskEdit = new TaskItemEdit();
const taskEditElement = taskEdit.getElement();
tasksContainer.append(taskEditElement);

const loadTasks = (count) => {
  const loadedTasksLength = tasksContainer.querySelectorAll(`.card`).length - 1; //так как всегда загружена 1 задача для редактирования

  for (let i = 0; i < count; i++) {
  	let taskIndex = loadedTasksLength + i;

  	if (taskIndex < TASK_COUNT) {
  	  let taskData = tasks[taskIndex];
      const task = new TaskItem(taskData);
      const taskElement = task.getElement();
      tasksContainer.append(taskElement);
  	} else {
  	  buttonLoad.removeElement();
  	  break;
  	}
  }
}

buttonLoadElement.addEventListener(`click`, () => { loadTasks(8) });

loadTasks(7);
