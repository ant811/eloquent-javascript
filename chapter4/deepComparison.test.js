const deepEqual = require('./deepComparison');

test('Returns true when objects are deeply equal', () => {
  let obj = {here: {is: "an"}, object: 2};
  expect(deepEqual(obj, obj)).toBe(true);
  expect(deepEqual(obj, {here: {is: "an"}, object: 2})).toBe(true);
  expect(deepEqual({here: {is: "an"}, every: {other: 'time'}, object: 2}, {every: {other: 'time'}, here: {is: "an"}, object: 2})).toBe(true);
});

test('Returns false when objects are not deeply equal', () => {
  let obj = {here: {is: "an"}, object: 2};
  expect(deepEqual(obj, {here: 1, object: 2 })).toBe(false);
  expect(deepEqual({here: {is: "an"}, every: {other: 'time'}, object: 2}, {every: 'time', here: {is: "an"}, object: 2})).toBe(false);
  expect(deepEqual({every: {other: 'time'}, object: 2}, {every: 'time', object: 2})).toBe(false);
});

test('Returns false when null and not null are compared', () => {
  expect(deepEqual(null, {key: 'value'})).toBe(false);
});

test('Returns true when null and null are compared', () => {
  expect(deepEqual(null, null)).toBe(true);
});
