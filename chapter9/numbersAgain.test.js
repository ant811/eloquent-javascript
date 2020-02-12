const JavaScriptNum = require('./numbersAgain');

test('Correctly identifies JavaScript-style numbers', () => {
  for (let str of ["1", "-1", "+15", "1.55", ".5", "5.", "1.3e2", "1E-4", "1e+12", "100890", "1000.90"]) {
    expect(JavaScriptNum.test(str)).toBe(true);
  }
  
  for (let str of ["1a", "+-1", "1.2.3", "1+1", "1e4.5", ".5.", "1f5", "."]) {
    expect(JavaScriptNum.test(str)).toBe(false);
  }
});
