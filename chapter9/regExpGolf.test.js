const { verify, regExpGolf1, regExpGolf2, regExpGolf3, regExpGolf4, regExpGolf5, regExpGolf6, regExpGolf7 } = require('./regExpGolf');

test('Verifies car and cat - regExpGolf1', () => {
  expect(verify(regExpGolf1, ['my car', 'bad cats'], ['camper', 'high art'])).toBe(true);
});

test('Verifies pop and prop - regExpGolf2', () => {
  expect(verify(regExpGolf2, ['pop culture', 'mad props'], ['plop', 'prrrop'])).toBe(true);
});

test('Verifies ferret, ferry, and ferrari - regExpGolf3', () => {
  expect(verify(regExpGolf3, ['ferret', 'ferry', 'ferrari'], ['ferrum', 'transfer A'])).toBe(true);
});

test('Verifies any word ending in ious - regExpGolf4', () => {
  expect(verify(regExpGolf4, ['how delicious', 'spacious room'], ['ruinous', 'consciousness'])).toBe(true);
});

test('Verifies a whitespace character followed by a period, comma, colon, or semicolon - regExpGolf5', () => {
  expect(verify(regExpGolf5, ['bad punctuation .'], ['escape the period'])).toBe(true);
});

test('Verifies a word longer than six letters - regExpGolf6', () => {
  expect(verify(regExpGolf6, ['hottentottententen'], ['no', 'hotten totten tenten'])).toBe(true);
});

test('Verifies a word without the letter e (or E) - regExpGolf7', () => {
  expect(verify(regExpGolf7, ['red platypus', 'wobbling nest'], ['earth bed', 'learning ape', 'BEET'])).toBe(true);
});
