const Vec = require('./vectorType');

test('Class Vec returns vector with correct coordinates', () => {
  expect(new Vec(1, 2)).toEqual({x: 1, y: 2});
  expect(new Vec(18, 20)).toEqual({x: 18, y: 20});
});

test('Plus method returns new vector with correct coordinates', () => {
  expect(new Vec(1, 2).plus(new Vec(2, 3))).toEqual({x: 3, y: 5});
  expect(new Vec(18, 13).plus(new Vec(-3, 2))).toEqual({x: 15, y: 15});
});

test('Minus method returns new vector with correct coordinates', () => {
  expect(new Vec(1, 2).minus(new Vec(2, 3))).toEqual({x: -1, y: -1});
  expect(new Vec(18, 13).minus(new Vec(3, -2))).toEqual({x: 15, y: 15});
});

test('Getter-properly length returns length of vector from origin', () => {
  expect(new Vec(3, 4).length).toBe(5);
  expect(new Vec(40, 9).length).toBe(41);
});