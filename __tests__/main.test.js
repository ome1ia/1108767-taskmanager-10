import {main} from '../src/main.js'

test('create menu', () => {
  expect(siteHeaderElement.querySelector(`.control__btn-wrap`).length).toBe(1);
});
