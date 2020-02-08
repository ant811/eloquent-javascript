const { dominantDirection1, dominantDirection2 } = require('./dominantWritingDirection');

describe('dominantDirection1', () => {
  test('Returns direction of dominant script', () => {
    expect(dominantDirection1('Hello!')).toBe('ltr');
    expect(dominantDirection1('Hey, مساء الخير')).toBe('rtl');
    expect(dominantDirection1('ᠰᠢᠯᠤᠭᠤᠨ ᠰᠢᠯᠪ, الخير')).toBe('ttb');
  });
});

describe('dominantDirection2', () => {
  test('Returns direction of dominant script', () => {
    expect(dominantDirection2('Hello!')).toBe('ltr');
    expect(dominantDirection2('Hey, مساء الخير')).toBe('rtl');
    expect(dominantDirection2('ᠰᠢᠯᠤᠭᠤᠨ ᠰᠢᠯᠪ, الخير')).toBe('ttb');
  });
});
