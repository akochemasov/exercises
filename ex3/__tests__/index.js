const func = require('../index');
// const func = require('../solution/index');

test('test factorial', () => {
  expect(func.factorial(0)).toEqual(1);
  expect(func.factorial(1)).toEqual(1);
  expect(func.factorial(6)).toEqual(720);
});

test('test factorialIter', () => {
  expect(func.factorialIter(0)).toEqual(1);
  expect(func.factorialIter(1)).toEqual(1);
  expect(func.factorialIter(6)).toEqual(720);
});