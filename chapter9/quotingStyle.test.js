const { quoteRegEx, replacement } = require('./quotingStyle');

test('Replaces single quotes with double quotes', () => {
  let text = "'I'm the cook,' he said, 'it's my job.'";
  expect(text.replace(quoteRegEx, replacement)).toEqual("\"I'm the cook,\" he said, \"it's my job.\"");
});
