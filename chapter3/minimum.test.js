const minimum = require('./minimum');

test('Returns the lowest-valued number', () => {
  expect(minimum(10, 0)).toBe(0);
  expect(minimum(-10, 0)).toBe(-10);
  expect(minimum(67, 66.99)).toBe(66.99);
  expect(minimum(7, 7)).toBe(7);
  expect(minimum(Infinity, -Infinity)).toBe(-Infinity);
});

test('Returns NaN when a non-number is provided', () => {
  expect(isNaN(minimum(10, 'three'))).toBe(true);
  expect(isNaN(minimum(10, [56]))).toBe(true);
  expect(isNaN(minimum(null, {}))).toBe(true);
});