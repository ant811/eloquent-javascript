const flatten = require('./flattening');

test('Returns flattened array', () => {
  expect(flatten([[1, 2, 3], [4, 5], [6], [7, 8], [9]])).toEqual([ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]);
  expect(flatten([[1, 2, 3], [4, 5], [6], [7, 8], [9]])).toEqual(flatten([[1], [2, 3, 4, 5], [6, 7, 8], [9]]));
  expect(flatten([[], [], [], [], []])).toEqual(flatten([]));
});

test('Returns an empty array when a non-array is passed in as an argument', () => {
  expect(flatten({key: 'value'})).toEqual([]);
});
