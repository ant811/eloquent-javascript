const PGroup = require('./persistentGroup');

test('Returns instance of PGroup with expected values', () => {
  let a = PGroup.empty.add('a');
  let ab = a.add('b');
  expect(ab.values).toEqual(['a', 'b']);
  expect(ab instanceof PGroup).toBe(true);
});

test('Returns new instance of PGroup with current and new value', () => {
  let a = PGroup.empty.add('a');
  let ab = a.add('a');
  expect(ab.values).toEqual(['a']);
  expect(ab).toBe(a);
  ab = a.add('b');
  let abc = ab.add('c');
  expect(abc.values).toEqual(['a', 'b', 'c']);
  expect(ab).not.toBe(abc);
});

test('Confirms existing values', () => {
  let a = PGroup.empty.add('a');
  let ab = a.add("b");
  expect(ab.has('a')).toBe(true);
  expect(ab.has('b')).toBe(true);
});

test('Returns new instance of PGroup without deleted value', () => {
  let a = PGroup.empty.add('a');
  let ab = a.add('b');
  let noC = ab.delete('c');
  expect(ab).toBe(noC);
  let noB = ab.delete('b');
  expect(noB).not.toBe(ab);
  expect(noB.has('b')).toBe(false);
  expect(ab.has('b')).toBe(true);
});