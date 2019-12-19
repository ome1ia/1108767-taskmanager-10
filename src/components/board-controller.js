import TasksList from './tasks.js';
import TaskItem from './task.js';
import TaskItemEdit from './task-edit.js';
import ButtonLoad from './button-load.js';

import {render, replace, remove} from '../utils/render.js';

export default class BoardController {
  constructor(container, tasks) {
    this._container = container;
    this._tasks = tasks;
    this._loadedTasks = 0;
    this._buttonLoad = null;
    this._TasksList = null;
    this._tasksContainer = null;
  }

  get _taskSize() {
    return this._tasks.length;
  }

  render() {
    this._tasksList = new TasksList();
    render(this._container, this._tasksList);

    this._tasksContainer = this._tasksList.getElement().querySelector(`.board__tasks`);

    this._buttonLoad = new ButtonLoad();
    render(this._tasksContainer, this._buttonLoad, `after`);
    
    this._buttonLoad.setClickHandler(() => {
      this.loadTasks(8);
    });

    this.loadTasks(8);
  }

  loadTasks(count) {
    for (let i = 0; i < count; i++) {
      if (this._loadedTasks < this._taskSize) {
        let taskData = this._tasks[this._loadedTasks];

        const task = new TaskItem(taskData);
        const taskEdit = new TaskItemEdit(taskData);

        task.setStartEditHandler(() => {
          replace(task, taskEdit);
        });
        taskEdit.setSubmitHandler(() => {
          replace(taskEdit, task);
        });

        render(this._tasksContainer, task);

        this._loadedTasks += 1;
      } else {
        remove(this._buttonLoad);
        break;
      }
    }
  }
}
