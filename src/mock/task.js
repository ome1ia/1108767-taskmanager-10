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

  const DaysList = [`mo`, `tu`, `we`, `th`, `fr`, `sa`, `su`];
  const repeatingDayIndex = getRandom(8);
  const repeatingDay = DaysList[repeatingDayIndex];

  if (repeatingDay) {
    days[repeatingDay] = true;
  }

  return days;
};

const getTags = () => {
  const TagsList = [`homework`, `theory`, `practice`, `intensive`, `keks`];
  const tagsSize = getRandom(3);
  const tags = new Set();

  for (let i = 0; i <= tagsSize; i++) {
    const tagId = getRandom(tagsSize - 1);
    tags.add(TagsList[tagId]);
  }

  return tags;
};

const getColor = () => {
  const Colors = [`black`, `yellow`, `blue`, `green`, `pink`];
  return Colors[getRandom(4)];
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
  const tasks = [];
  for (let i = 0; i < count; i++) {
    tasks.push(getTask());
  }
  return tasks;
};

export {getTask, getTasks};
