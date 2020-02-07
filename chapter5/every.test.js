const { every, everyWithSome } = require('./every');

describe('every', () => {
  test('Returns true when every element in array passes truth test', () => {
    expect(every([1, 3, 5], n => n < 10)).toBe(true);
    expect(every([], n => n < 10)).toBe(true);
  });

  test('Returns false when not every element in array passes truth test', () => {
    expect(every([2, 4, 16], n => n < 10)).toBe(false);
    expect(every([2, 4, 15], n => n % 2 === 0)).toBe(false);
  });
});

describe('everyWithSome', () => {
  test('Returns true when every element in array passes truth test', () => {
    expect(everyWithSome([1, 3, 5], n => n < 10)).toBe(true);
    expect(everyWithSome([], n => n < 10)).toBe(true);
  });

  test('Returns false when not every element in array passes truth test', () => {
    expect(everyWithSome([2, 4, 16], n => n < 10)).toBe(false);
    expect(everyWithSome([2, 4, 15], n => n % 2 === 0)).toBe(false);
  });
});
