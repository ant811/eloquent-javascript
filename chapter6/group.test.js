const Group = require('./group');

test('Returns instance of Group with expected values', () => {
  const group = Group.from([1, 2, 3, 4]);
  expect(group.values).toEqual([1, 2, 3, 4]);
  expect(group instanceof Group).toBe(true);
});

test('Adds values to group only when a value is not already stored', () => {
  const group = Group.from([]);
  group.add(2);
  group.add(4);
  group.add(2);
  group.add(2);
  expect(group.values).toEqual([2, 4]);
});

test('Confirms existing values', () => {
  const group = Group.from([]);
  expect(group.has(3)).toBe(false);
  expect(group.has(4)).toBe(false);
  group.add(3);
  group.add(4);
  expect(group.has(3)).toBe(true);
  expect(group.has(4)).toBe(true);
});

test('Deletes values from group', () => {
  const group = Group.from([1, 2, 3, 4]);
  group.delete(1);
  expect(group.has(1)).toBe(false);
  expect(group.values).toEqual([2, 3, 4]);
});
