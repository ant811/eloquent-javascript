const { reverseArray, reverseArrayInPlace } = require('./reversingAnArray');

describe('reverseArray', () => {
  test('Returns an array with elements in reverse order', () => {
    expect(reverseArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toEqual([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]);
    expect(reverseArray([])).toEqual([]);
  });

  test('Returns an array that is not the same array in memory passed in as the argument', () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    expect(reverseArray(array)).not.toBe(array);
  });

  test('Returns an empty array when the argument is not an array', () => {
    expect(reverseArray({})).toEqual([]);
    expect(reverseArray(undefined)).toEqual([]);
  });
});

describe('reverseArrayInPlace', () => {
  test('Returns an array with elements in reverse order', () => {
    expect(reverseArrayInPlace([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toEqual([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]);
    expect(reverseArrayInPlace([])).toEqual([]);
  });

  test('Returns an array that is the same array in memory passed in as the argument', () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    expect(reverseArrayInPlace(array)).toBe(array);
  });

  test('Returns an empty array when the argument is not an array', () => {
    expect(reverseArray({})).toEqual([]);
    expect(reverseArray(undefined)).toEqual([]);
  });
});