import Menu from './components/menu.js'
import Filters from './components/filter.js'
import BoardController from './components/board-controller.js'

import {render, replace, remove} from './utils/render.js'

//import mocks
import {getFilters} from './mock/filter.js'
import {getTasks} from './mock/task.js'

const siteMainElement = document.querySelector(`.main`);
const siteHeaderElement = siteMainElement.querySelector(`.main__control`);

const menu = new Menu();
render(siteHeaderElement, menu);

const filtersData = getFilters();
const filters = new Filters(filtersData);
render(siteMainElement, filters);


const TASK_COUNT = 22;
const tasks = getTasks(TASK_COUNT);
const boardController = new BoardController(siteMainElement, tasks);
boardController.render();
