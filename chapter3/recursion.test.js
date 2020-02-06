const isEven = require('./recursion');

test('Returns true when the number is even', () => {
  expect(isEven(-20)).toBe(true);
  expect(isEven(26)).toBe(true);
  expect(isEven(100)).toBe(true);
});

test('Returns false when the number is odd', () => {
  expect(isEven(-19)).toBe(false);
  expect(isEven(27)).toBe(false);
  expect(isEven(105)).toBe(false);
});

test('Returns an empty string when a non-integer is provided', () => {
  expect(isEven(-19.89)).toBe('');
  expect(isEven(27.008)).toBe('');
}); 

test('Returns NAN when a non-number is provided', () => {
  expect(isNaN(isEven(null))).toBe(true);
  expect(isNaN(isEven('seven'))).toBe(true);
  expect(isNaN(isEven([56]))).toBe(true);
});
