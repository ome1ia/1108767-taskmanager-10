import AbstractComponent from './abstract-component.js';

const setDay = (date) => {
  const Months = [
    `January`,
    `February`,
    `March`,
    `April`,
    `May`,
    `June`,
    `July`,
    `August`,
    `September`,
    `October`,
    `November`,
    `December`];

  const day = date.getDate();
  const month = Months[date.getMonth()];

  return `${day} ${month}`;
};

const castTimeFormat = (value) => {
  return value < 10 ? `0${value}` : String(value);
};

const setTime = (date) => {
  const hours = castTimeFormat(date.getHours() % 12);
  const minutes = castTimeFormat(date.getMinutes());

  const interval = date.getHours() > 11 ? `PM` : `AM`;

  return `${hours}:${minutes} ${interval}`;
};

const setTags = (hashtags) => {
  let template = ``;
  for (let hashtag of hashtags) {
    template += `<span class="card__hashtag-inner">
                        <span class="card__hashtag-name">
                          #${hashtag}
                        </span>
                      </span>`;
  }
  return template;
};

const checkRepeating = (days) => {
  let repeatingDay = ``;
  for (let day in days) {
    if (days[day]) {
      repeatingDay += day;
      break;
    }
  }
  return repeatingDay;
};

const checkDeadline = (date, repeatingDays) => {
  const nowDate = new Date();
  return (nowDate > date) && !checkRepeating(repeatingDays);
};

// class TaskItem
export default class TaskItem extends AbstractComponent {
  constructor({description, dueDate, repeatingDays, tags, color}) {
    super();
    this._description = description;
    this._dueDate = dueDate;
    this._repeatingDays = repeatingDays;
    this._tags = tags;
    this._color = color;
  }

  get _taskDate() {
    let taskDate;

    if (checkRepeating(this._repeatingDays)) {
      taskDate = checkRepeating(this._repeatingDays);
    } else {
      taskDate = this._dueDate ? setDay(this._dueDate) : ``;
    }

    return taskDate;
  }

  get _taskTime() {
    return (checkRepeating(this._repeatingDays) || !this._dueDate) ? `` : setTime(this._dueDate);
  }

  get _taskTags() {
    return setTags(this._tags);
  }

  get _isDeadline() {
    return checkDeadline(this._dueDate, this._repeatingDays);
  }

  get _isDeadlineClass() {
    return this._isDeadline ? ` card--deadline` : ``;
  }

  get _repeatClass() {
    return checkRepeating(this._repeatingDays) ? ` card--repeat` : ``;
  }

  getTemplate() {
    return `<article class="card card--${this._color}${this._repeatClass}${this._isDeadlineClass}">
            <div class="card__form">
              <div class="card__inner">
                <div class="card__control">
                  <button type="button" class="card__btn card__btn--edit">
                    edit
                  </button>
                  <button type="button" class="card__btn card__btn--archive">
                    archive
                  </button>
                  <button
                    type="button"
                    class="card__btn card__btn--favorites card__btn--disabled"
                  >
                    favorites
                  </button>
                </div>

                <div class="card__color-bar">
                  <svg class="card__color-bar-wave" width="100%" height="10">
                    <use xlink:href="#wave"></use>
                  </svg>
                </div>

                <div class="card__textarea-wrap">
                  <p class="card__text">${this._description}</p>
                </div>

                <div class="card__settings">
                  <div class="card__details">
                    <div class="card__dates">
                      <div class="card__date-deadline">
                        <p class="card__input-deadline-wrap">
                          <span class="card__date">${this._taskDate}</span>
                          <span class="card__time">${this._taskTime}</span>
                        </p>
                      </div>
                    </div>

                    <div class="card__hashtag">
                      <div class="card__hashtag-list">
                        ${this._taskTags}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>`;
  }

  setStartEditHandler(handler) {
    this.getElement().querySelector(`.card__btn--edit`).addEventListener(`click`, handler);
  }
}
