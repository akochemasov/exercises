const func = require('../index');
// const func = require('../solution/index');

test('test fib', () => {
  expect(func.fib(0)).toEqual(0);
  expect(func.fib(1)).toEqual(1);
  expect(func.fib(5)).toEqual(5);
  expect(func.fib(10)).toEqual(55);
  expect(func.fib(20)).toEqual(6765);
});

test('test fibIter', () => {
  expect(func.fibIter(0)).toEqual(0);
  expect(func.fibIter(1)).toEqual(1);
  expect(func.fibIter(5)).toEqual(5);
  expect(func.fibIter(10)).toEqual(55);
  expect(func.fibIter(20)).toEqual(6765);
});