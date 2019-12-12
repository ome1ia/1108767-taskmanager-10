export const createTaskItemTemplate = ({description, dueDate, repeatingDays, tags, color}) => {

  const setDay = (date) => {
    const months = [
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

    let day = date.getDate();
    let month = months[date.getMonth()];

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

  const checkDeadline = (date) => {
    let nowDate = new Date();
    return (nowDate > date);
  };

  // я может что-то не понимаю: В ТЗ: "Дни недели повтора задачи: отображено,
  // если установлен флаг повторения. В противном случае скрыто."
  // в верстке /1108767-taskmanager-10/markup/index.html время выводится, добавлен класс

  let taskDate;
  let taskTime;

  if (checkRepeating(repeatingDays)) {
    taskDate = checkRepeating(repeatingDays);
    taskTime = ``;
  } else {
    taskDate = dueDate ? setDay(dueDate) : ``;
    taskTime = dueDate ? setTime(dueDate) : ``;
  }

  let taskTags = setTags(tags);
  let isDeadline = checkDeadline(dueDate);
  let isDeadlineClass = isDeadline ? `card--deadline` : ``;


  return `<article class="card card--${color} ${isDeadlineClass}">
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
                  <p class="card__text">${description}</p>
                </div>

                <div class="card__settings">
                  <div class="card__details">
                    <div class="card__dates">
                      <div class="card__date-deadline">
                        <p class="card__input-deadline-wrap">
                          <span class="card__date">${taskDate}</span>
                          <span class="card__time">${taskTime}</span>
                        </p>
                      </div>
                    </div>

                    <div class="card__hashtag">
                      <div class="card__hashtag-list">
                        ${taskTags}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>`;
};
