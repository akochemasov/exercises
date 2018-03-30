const func = require('../index');
// const func = require('../solution/index');

test('test func', () => {
  expect(func()).toEqual(1);
  expect(func()).not.toEqual(0);
});