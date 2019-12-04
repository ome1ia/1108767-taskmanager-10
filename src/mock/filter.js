const getFilters = () => {
  const filterNames = [
    `all`, `overdue`, `today`, `favorites`, `repeating`, `tags`, `archive`
  ];

  return filterNames.map((it) => {
    return {
      name: it,
      count: Math.floor(Math.random() * 10),
    };
  });
};

// чтоб не забылось: в целом этот код из https://github.com/htmlacademy-ecmascript/taskmanager-10/blob/59dcc88702154ac6cfc11ef7a75d8d4fa4552069/src/mock/filter.js
// в ТЗ: "Аналогичным образом создайте структуру данных для компонента с фильтрами. Это будет массив объектов с полями:
// count: количество задач, сопоставимое с фильтром. Напишите функцию, которая будет вычислять количество на основе списка задач, созданного ранее."
//
// ТЗ ИМХО некорректное! Лектор не вычисляет на основе, а генерирует случайное число! Если не смотреть его пример, я бы заморачивалась с общим хранилищем данных

export {getFilters};
