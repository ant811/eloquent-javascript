const { countChar, countBs } = require('./beanCounting');

test('Returns correct number of targeted characters', () => {
  expect(countBs('BBC')).toBe(2);
  expect(countChar('kakkerlak', 'k')).toBe(4);
  expect(countBs('balderdash')).toBe(0);
  expect(countChar('elephant run', 'z')).toBe(0);
});

test('Returns an empty string when non-strings are provided', () => {
  expect(countChar('hello', 9)).toBe('');
  expect(countBs(null)).toBe('');
});