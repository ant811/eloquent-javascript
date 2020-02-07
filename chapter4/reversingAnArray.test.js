const { reverseArray, reverseArrayInPlace } = require('./reversingAnArray');

describe('reverseArray', () => {
  test('Returns an array with elements in reverse order', () => {
    expect(JSON.stringify(reverseArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))).toBe(JSON.stringify([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]));
    expect(JSON.stringify(reverseArray([]))).toBe(JSON.stringify([]));
  });

  test('Returns an array that is not the same array in memory passed in as the argument', () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    expect(reverseArray(array) === array).toBe(false);
  });

  test('Returns an empty array when the argument is not an array', () => {
    expect(JSON.stringify(reverseArray({}))).toBe(JSON.stringify([]));
    expect(JSON.stringify(reverseArray(undefined))).toBe(JSON.stringify([]));
  });
});

describe('reverseArrayInPlace', () => {
  test('Returns an array with elements in reverse order', () => {
    expect(JSON.stringify(reverseArrayInPlace([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))).toBe(JSON.stringify([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]));
    expect(JSON.stringify(reverseArrayInPlace([]))).toBe(JSON.stringify([]));
  });

  test('Returns an array that is the same array in memory passed in as the argument', () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    expect(reverseArrayInPlace(array) === array).toBe(true);
  });

  test('Returns an empty array when the argument is not an array', () => {
    expect(JSON.stringify(reverseArray({}))).toBe(JSON.stringify([]));
    expect(JSON.stringify(reverseArray(undefined))).toBe(JSON.stringify([]));
  });
});