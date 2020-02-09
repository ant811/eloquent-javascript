const map = require('./borrowingMethod');

test('Borrows method of same name from Object.prototype', () => {
  expect(Object.prototype.hasOwnProperty.call(map, 'one')).toBe(true);
});