import AbstractComponent from './abstract-component.js';

const castTimeFormat = (value) => {
  return value < 10 ? `0${value}` : String(value);
};

const setDate = (date) => {
  if (!date) {
    return ``;
  }

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
  const hours = castTimeFormat(date.getHours() % 12);
  const minutes = castTimeFormat(date.getMinutes());

  const interval = date.getHours() > 11 ? `PM` : `AM`;

  return `${day} ${month} ${hours}:${minutes} ${interval}`;
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

const setDays = (repeatingDays) => {
  const DaysList = [`mo`, `tu`, `we`, `th`, `fr`, `sa`, `su`];
  let template = ``;
  for (let day of DaysList) {
    const isChecked = repeatingDays[day] ? `checked` : ``;
    template += `<input
                            class="visually-hidden card__repeat-day-input"
                            type="checkbox"
                            name="repeat"
                            value="${day}"
                            id="repeat-${day}-4"
                            ${isChecked}
                          />
                          <label class="card__repeat-day" for="repeat-${day}-4"
                            >${day}</label
                          >`;
  }
  return template;
};

const setTags = (hashtags) => {
  let template = ``;
  for (let hashtag of hashtags) {
    template += `<span class="card__hashtag-inner">
                          <input
                            type="hidden"
                            name="hashtag"
                            value="${hashtag}"
                            class="card__hashtag-hidden-input"
                          />
                          <p class="card__hashtag-name">
                            #${hashtag}
                          </p>
                          <button type="button" class="card__hashtag-delete">
                            delete
                          </button>
                        </span>`;
  }
  return template;
};

const setColors = (color) => {
  const Colors = [`black`, `yellow`, `blue`, `green`, `pink`];
  let template = ``;

  for (let item of Colors) {
    const isChecked = (item === color) ? `checked` : ``;
    template += `<input
                        type="radio"
                        id="color-${item}-4"
                        class="card__color-input card__color-input--${item} visually-hidden"
                        name="color"
                        value="${item}"
                        ${isChecked}
                      />
                      <label
                        for="color-${item}-4"
                        class="card__color card__color--${item}"
                        >${item}</label
                      >`;
  }

  return template;
};

// class TaskItemEdit
export default class TaskItemEdit extends AbstractComponent {
  constructor({description, dueDate, repeatingDays, tags, color}) {
    super();
    this._description = description;
    this._dueDate = dueDate;
    this._repeatingDays = repeatingDays;
    this._tags = tags;
    this._color = color;
  }

  get _isTaskDate() {
    return this._dueDate ? `yes` : `no`;
  }

  get _repeatClass() {
    return checkRepeating(this._repeatingDays) ? ` card--repeat` : ``;
  }

  get _taskDate() {
    return setDate(this._dueDate);
  }

  get _isRepeat() {
    return checkRepeating(this._repeatingDays) ? `yes` : `no`;
  }

  get _days() {
    return setDays(this._repeatingDays);
  }

  get _hashtags() {
    return setTags(this._tags);
  }

  get _colors() {
    return setColors(this._color);
  }

  getTemplate() {
    return `<article class="card card--edit card--${this._color}${this._repeatClass}">
            <form class="card__form" method="get">
              <div class="card__inner">
                <div class="card__color-bar">
                  <svg class="card__color-bar-wave" width="100%" height="10">
                    <use xlink:href="#wave"></use>
                  </svg>
                </div>

                <div class="card__textarea-wrap">
                  <label>
                    <textarea
                      class="card__text"
                      placeholder="Start typing your text here..."
                      name="text"
                    >${this._description}</textarea>
                  </label>
                </div>

                <div class="card__settings">
                  <div class="card__details">
                    <div class="card__dates">
                      <button class="card__date-deadline-toggle" type="button">
                        date: <span class="card__date-status">${this._isTaskDate}</span>
                      </button>

                      <fieldset class="card__date-deadline">
                        <label class="card__input-deadline-wrap">
                          <input
                            class="card__date"
                            type="text"
                            placeholder=""
                            name="date"
                            value="${this._taskDate}"
                          />
                        </label>
                      </fieldset>

                      <button class="card__repeat-toggle" type="button">
                        repeat:<span class="card__repeat-status">${this._isRepeat}</span>
                      </button>

                      <fieldset class="card__repeat-days">
                        <div class="card__repeat-days-inner">
                          ${this._days}
                        </div>
                      </fieldset>
                    </div>

                    <div class="card__hashtag">
                      <div class="card__hashtag-list">
                        ${this._hashtags}
                      </div>

                      <label>
                        <input
                          type="text"
                          class="card__hashtag-input"
                          name="hashtag-input"
                          placeholder="Type new hashtag here"
                        />
                      </label>
                    </div>
                  </div>

                  <div class="card__colors-inner">
                    <h3 class="card__colors-title">Color</h3>
                    <div class="card__colors-wrap">
                      ${this._colors}
                    </div>
                  </div>
                </div>

                <div class="card__status-btns">
                  <button class="card__save" type="submit">save</button>
                  <button class="card__delete" type="button">delete</button>
                </div>
              </div>
            </form>
          </article>`;
  }
}
