import {createButtonLoadTemplate} from '../src/components/button-load.js'

test('create template of button load', () => {
  expect(createButtonLoadTemplate()).toBe(`<button class="load-more" type="button">load more</button>`);
});