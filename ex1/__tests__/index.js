const func = require('../index');
// const func = require('../solution/index');

test('[1,2,42,3] -> [1,2,3]', () => {
  expect(func([1,2,42,3])).toEqual([1,2,3]);  
});

test('[1,42,3] not -> [1,42,2]', () => {
  expect(func([1,42,2])).not.toEqual([1,,42,2]);
});
