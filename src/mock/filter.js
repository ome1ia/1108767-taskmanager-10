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

export {getFilters};
