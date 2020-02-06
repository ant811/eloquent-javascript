const chessboard = require('./chessboard');

test('Renders chessboard with a size of 8', () => {
  expect(chessboard(8)).toBe(` # # # #\n# # # # \n # # # #\n# # # # \n # # # #\n# # # # \n # # # #\n# # # # `);
});

test('Renders chessboard with a size of 1', () => {
  expect(chessboard(1)).toBe(` `);
});

test('Renders chessboard with a size of 13', () => {
  expect(chessboard(13)).toBe(` # # # # # # \n# # # # # # #\n # # # # # # \n# # # # # # #\n # # # # # # \n# # # # # # #\n # # # # # # \n# # # # # # #\n # # # # # # \n# # # # # # #\n # # # # # # \n# # # # # # #\n # # # # # # `);
});

test('Returns an empty string when the size is less than 1', () => {
  expect(chessboard(0)).toBe(``);
  expect(chessboard(-3)).toBe(``);
});
  
test('Returns an empty string when the size is not an integer', () => {
  expect(chessboard('eleven')).toBe(``);
  expect(chessboard({})).toBe(``);
  expect(chessboard(null)).toBe(``);
  expect(chessboard(20.9)).toBe(``);
});
