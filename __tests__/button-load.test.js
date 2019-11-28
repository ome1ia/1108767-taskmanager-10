const createButtonLoadTemplate = () => {
  return `<button class="load-more" type="button">load more</button>`;
};

test('create template of button load', () => {
  expect(createButtonLoadTemplate()).toBe(`<button class="load-more" type="button">load more</button>`);
});