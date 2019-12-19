import Menu from './components/menu.js'
import Filters from './components/filter.js'
import TasksList from './components/tasks.js'
import TaskItem from './components/task.js'
import TaskItemEdit from './components/task-edit.js'
import ButtonLoad from './components/button-load.js'

import {render, replace, remove} from './utils/render.js'

//import mocks
import {getFilters} from './mock/filter.js'
import {getTasks} from './mock/task.js'

const TASK_COUNT = 22;
const tasks = getTasks(TASK_COUNT);

const siteMainElement = document.querySelector(`.main`);
const siteHeaderElement = siteMainElement.querySelector(`.main__control`);

const menu = new Menu();
render(siteHeaderElement, menu);

const filtersData = getFilters();
const filters = new Filters(filtersData);
render(siteMainElement, filters);

const tasksList = new TasksList();
render(siteMainElement, tasksList);

const tasksContainer = siteMainElement.querySelector(`.board__tasks`);

const buttonLoad = new ButtonLoad();
render(tasksContainer, buttonLoad, `after`);

const loadTasks = (count) => {
  const loadedTasksLength = tasksContainer.querySelectorAll(`.card`).length;

  for (let i = 0; i < count; i++) {
  	let taskIndex = loadedTasksLength + i;

  	if (taskIndex < TASK_COUNT) {
  	  let taskData = tasks[taskIndex];

      const task = new TaskItem(taskData);
      const taskElement = task.getElement();

      const taskEdit = new TaskItemEdit(taskData);
      const taskEditElement = taskEdit.getElement();

      const taskStartEdit = taskElement.querySelector(`.card__btn--edit`);
      taskStartEdit.addEventListener(`click`, () => {
        replace(task, taskEdit);
      });

      const taskEndEdit = taskEditElement.querySelector(`.card__form`);
      taskEndEdit.addEventListener(`submit`, () => {
        replace(taskEdit, task);
      });

      render(tasksContainer, task);
  	} else {
  	  buttonLoad.remove();
  	  break;
  	}
  }
}

buttonLoad.getElement().addEventListener(`click`, () => { loadTasks(8) });

loadTasks(8);
