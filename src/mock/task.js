const getRandom = (max, min = 0) => {

  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);

};

const getTaskDescription = () => {
  const taskDescriptions = [`Изучить теорию`, `Сделать домашку`, `Пройти интенсив на соточку`];
  return taskDescriptions[getRandom(taskDescriptions.length - 1)];
};

const getDate = () => {
  let targetDate;
  let dateDiff;

  if (Math.random() > 0.7) {
    targetDate = null;
  } else {
    targetDate = new Date();
    dateDiff = getRandom(7, -7);
    targetDate.setDate(targetDate.getDate() + dateDiff);
  }

  return targetDate;
};

const getDay = () => {
  const days = {
    'mo': false,
    'tu': false,
    'we': false,
    'th': false,
    'fr': false,
    'sa': false,
    'su': false
  };

  const daysList = [`mo`, `tu`, `we`, `th`, `fr`, `sa`, `su`];
  let repeatingDayIndex = getRandom(8);
  let repeatingDay = daysList[repeatingDayIndex];

  if (repeatingDay) {
    days[repeatingDay] = true;
  }

  // в задании написано объект, но я бы возвращала строку (пустую или с названием дня)

  return days;
};

const getTags = () => {
  const tagsList = [`homework`, `theory`, `practice`, `intensive`, `keks`];
  let tagsSize = getRandom(3);
  let tags = new Set();

  for (let i = 0; i <= tagsSize; i++) {
    let tagId = getRandom(tagsSize - 1);
    tags.add(tagsList[tagId]);
  }

  return tags;
};

const getColor = () => {
  const colors = [`black`, `yellow`, `blue`, `green`, `pink`];
  return colors[getRandom(4)];
};

const getIsFavorite = () => {
  return !!(getRandom(1));
};

const getIsArchive = () => {
  return !!(getRandom(1));
};

const getTask = () => {
  return {
    description: getTaskDescription(),
    dueDate: getDate(),
    repeatingDays: getDay(),
    tags: getTags(),
    color: getColor(),
    isFavorite: getIsFavorite(),
    isArchive: getIsArchive()
  };
};

const getTasks = (count) => {
  let tasks = [];
  for (let i = 0; i < count; i++) {
    tasks.push(getTask());
  }
  return tasks;
};

export {getTask, getTasks};
