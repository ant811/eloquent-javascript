const reliableMultiply = require('./retry');

test('Reliably returns expected product', () => {
  expect(reliableMultiply(8, 8)).toBe(64);
  expect(reliableMultiply(7, 5)).toBe(35);
});

test('Returns unaccounted for exception', () => {
  expect(Number.isNaN(reliableMultiply(8, 'eight'))).toEqual(true);
});
