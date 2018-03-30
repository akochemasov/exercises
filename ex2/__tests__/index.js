const army = require('../index');

test('army[i]()', () => {
  expect(army[0]()).toEqual(0);
  expect(army[5]()).toEqual(5);
});