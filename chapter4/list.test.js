const { arrayToList, listToArray, prepend, nth, recursiveNth } = require('./list');

describe('arrayToList', () => {
  test('Returns a list of array values', () => {
    expect(JSON.stringify(arrayToList([10, 20]))).toBe(JSON.stringify({value: 10, rest: {value: 20, rest: null}}));
    expect(JSON.stringify(arrayToList([10, 20, 30]))).toBe(JSON.stringify({value: 10, rest: {value: 20, rest: {value: 30, rest: null}}}));
  });  
  
  test('Returns an empty object when an empty array or non-array is passed in as an argument', () => {
    expect(JSON.stringify(arrayToList([]))).toBe(JSON.stringify({}));
    expect(JSON.stringify(arrayToList({value: 1, rest: null}))).toBe(JSON.stringify({}));
  });
});

describe('listToArray', () => {
  test('Returns an array of list values', () => {
    expect(JSON.stringify(listToArray(arrayToList([10, 20, 30])))).toBe(JSON.stringify([10, 20, 30]));
    expect(JSON.stringify(listToArray(arrayToList([10, 20])))).toBe(JSON.stringify([10, 20]));
    expect(JSON.stringify(listToArray({value: 10, rest: {value: 20, rest: null}}))).toBe(JSON.stringify([10, 20]));
  });

  test('Returns an empty array when an empty object or non-object is passed in as an argument', () => {
    expect(JSON.stringify(listToArray(arrayToList([])))).toBe(JSON.stringify([]));
    expect(JSON.stringify(listToArray({}))).toBe(JSON.stringify([]));
    expect(JSON.stringify(listToArray([3, 4, 5]))).toBe(JSON.stringify([]));
  });
});

describe('prepend', () => {
  test('Returns new list with item prepended to existing list', () => {
    expect(JSON.stringify(prepend(10, prepend(20, null)))).toBe(JSON.stringify({value: 10, rest: {value: 20, rest: null}}));
    expect(JSON.stringify(prepend(10, arrayToList([20, 30])))).toBe(JSON.stringify({value: 10, rest: {value: 20, rest: {value: 30, rest: null}}}));
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

