const flatten = require('./flattening');

test('Returns flattened array', () => {
  expect(JSON.stringify(flatten([[1, 2, 3], [4, 5], [6], [7, 8], [9]]))).toBe(JSON.stringify([ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]));
  expect(JSON.stringify(flatten([[1, 2, 3], [4, 5], [6], [7, 8], [9]]))).toBe(JSON.stringify(flatten([[1], [2, 3, 4, 5], [6, 7, 8], [9]])));
  expect(JSON.stringify(flatten([[], [], [], [], []]))).toBe(JSON.stringify(flatten([])));
});

test('Returns an empty array when a non-array is passed in as an argument', () => {
  expect(JSON.stringify(flatten({key: 'value'}))).toBe(JSON.stringify([]));
});
