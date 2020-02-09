const { range, sum } = require('./sumOfRange');

describe('range()', () => {
  test('Returns targeted range', () => {
    expect(range(1, 10)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    expect(range(5, 2)).toEqual([5, 4, 3, 2]);
    expect(range(1, 10, 2)).toEqual([1, 3, 5, 7, 9]);
    expect(range(12, 3, -3)).toEqual([12, 9, 6, 3]);
  });

  test('Returns an empty array when range ascends with negative step', () => {
    expect(range(1, 10, -3)).toEqual([]);
  });
  
  test('Returns an empty array when range descends with positive step', () => {
    expect(range(13, 2, 3)).toEqual([]);
  });

  test('Returns NaN when a non-number is provided', () => {
    expect(Number.isNaN(range(1, 'ten'))).toBe(true);
    expect(Number.isNaN(range(1, 10, null))).toBe(true);
  });
});

describe('sum()', () => {
  test('Returns sum of range', () => {
    expect(sum(range(1, 10))).toBe(55);
    expect(sum(range(1, 10, 2))).toBe(25);
    expect(sum(range(50, 10, -6))).toBe(224);
  });

  test('Returns zero when an empty array is passed in', () => {
    expect(sum(range(13, 2, 3))).toBe(0);
    expect(sum(range(1, 20, -6))).toBe(0);
  });

  test('Returns NaN when a non-number is provided', () => {
    expect(Number.isNaN(sum(range(1, 'ten')))).toBe(true);
    expect(Number.isNaN(sum(range(1, 10, null)))).toBe(true);
  });
});
