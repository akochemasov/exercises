const union = require('../index');
// const union = require('../solution/index');

test('union arrays', () => {
  expect(union([1, 3, 5, 7], [2, 4, 6, 8])).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
  expect(union([1, 3], [2, 4, 6, 8])).toEqual([1, 2, 3, 4, 6, 8]);
  expect(union([2, 4, 6, 8], [1, 3])).toEqual([2, 1, 4, 3, 6, 8]);
});