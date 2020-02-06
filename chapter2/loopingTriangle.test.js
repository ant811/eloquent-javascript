const loopingTriangle = require('./loopingTriangle');

test('Renders triangle with a base of 3', () => {
  expect(loopingTriangle(3)).toBe(`#\n##\n###`);
});

test('Renders triangle with a base of 7', () => {
  expect(loopingTriangle(7)).toBe(`#\n##\n###\n####\n#####\n######\n#######`);
});

test('Renders triangle with a base of 1', () => {
  expect(loopingTriangle(1)).toBe(`#`);
});

test('Returns an empty string when the base is less than 1', () => {
  expect(loopingTriangle(0)).toBe(``);
  expect(loopingTriangle(-9)).toBe(``);
});

test('Returns an empty string when the base is not an integer', () => {
  expect(loopingTriangle('five')).toBe(``);
  expect(loopingTriangle(null)).toBe(``);
  expect(loopingTriangle(5.6)).toBe(``);
});
