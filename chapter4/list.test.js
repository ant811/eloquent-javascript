const { arrayToList, listToArray, prepend, nth, recursiveNth } = require('./list');

describe('arrayToList', () => {
  test('Returns a list of array values', () => {
    expect(arrayToList([10, 20])).toEqual({value: 10, rest: {value: 20, rest: null}});
    expect(arrayToList([10, 20, 30])).toEqual({value: 10, rest: {value: 20, rest: {value: 30, rest: null}}});
  });  
  
  test('Returns an empty object when an empty array or non-array is passed in as an argument', () => {
    expect(arrayToList([])).toEqual({});
    expect(arrayToList({value: 1, rest: null})).toEqual({});
  });
});

describe('listToArray', () => {
  test('Returns an array of list values', () => {
    expect(listToArray(arrayToList([10, 20, 30]))).toEqual([10, 20, 30]);
    expect(listToArray(arrayToList([10, 20]))).toEqual([10, 20]);
    expect(listToArray({value: 10, rest: {value: 20, rest: null}})).toEqual([10, 20]);
  });

  test('Returns an empty array when an empty object or non-object is passed in as an argument', () => {
    expect(listToArray(arrayToList([]))).toEqual([]);
    expect(listToArray({})).toEqual([]);
    expect(listToArray([3, 4, 5])).toEqual([]);
  });
});

describe('prepend', () => {
  test('Returns new list with item prepended to existing list', () => {
    expect(prepend(10, prepend(20, null))).toEqual({value: 10, rest: {value: 20, rest: null}});
    expect(prepend(10, arrayToList([20, 30]))).toEqual({value: 10, rest: {value: 20, rest: {value: 30, rest: null}}});
  });
});

describe('nth', () => {
  test('Returns the element at given position in the list', () => {
    expect(nth(arrayToList([10, 20, 30]), 1)).toBe(20);
    expect(nth({value: 10, rest: {value: 20, rest: {value: 30, rest: null}}}, 1)).toBe(20);
  });

  test('Returns undefined when there is no element at given position in the list', () => {
    expect(nth(arrayToList([10, 20, 30]), 4)).toBe(undefined);
    expect(nth({value: 10, rest: {value: 20, rest: {value: 30, rest: null}}}, 4)).toBe(undefined);
  });
});

describe('recursiveNth', () => {
  test('Returns the element at given position in the list', () => {
    expect(recursiveNth(arrayToList([10, 20, 30]), 1)).toBe(20);
    expect(recursiveNth({value: 10, rest: {value: 20, rest: {value: 30, rest: null}}}, 1)).toBe(20);
  });

  test('Returns undefined when there is no element at given position in the list', () => {
    expect(recursiveNth(arrayToList([10, 20, 30]), 4)).toBe(undefined);
    expect(recursiveNth({value: 10, rest: {value: 20, rest: {value: 30, rest: null}}}, 4)).toBe(undefined);
  });
});

