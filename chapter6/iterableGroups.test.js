const Group = require('./iterableGroups');

test('Iterates through group until iterator returns {done: true}', () => {
  const group = Group.from([1, 2, 3, 4]);
  let doubledValues = [];
  for (let value of group) {
    doubledValues.push(value * 2);
  }

  expect(doubledValues).toEqual([2, 4, 6, 8]);
});