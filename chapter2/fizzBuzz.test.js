const fizzBuzz = require('./fizzBuzz');

test('Prints correct evaluations when the count is 15', () => {
  expect(fizzBuzz(15)).toBe(`1\n2\nFizz\n4\nBuzz\nFizz\n7\n8\nFizz\nBuzz\n11\nFizz\n13\n14\nFizzBuzz`);
});

test('Prints correct evaluations when the count is 100', () => {
  expect(fizzBuzz(100)).toBe(`1\n2\nFizz\n4\nBuzz\nFizz\n7\n8\nFizz\nBuzz\n11\nFizz\n13\n14\nFizzBuzz\n16\n17\nFizz\n19\nBuzz\nFizz\n22\n23\nFizz\nBuzz\n26\nFizz\n28\n29\nFizzBuzz\n31\n32\nFizz\n34\nBuzz\nFizz\n37\n38\nFizz\nBuzz\n41\nFizz\n43\n44\nFizzBuzz\n46\n47\nFizz\n49\nBuzz\nFizz\n52\n53\nFizz\nBuzz\n56\nFizz\n58\n59\nFizzBuzz\n61\n62\nFizz\n64\nBuzz\nFizz\n67\n68\nFizz\nBuzz\n71\nFizz\n73\n74\nFizzBuzz\n76\n77\nFizz\n79\nBuzz\nFizz\n82\n83\nFizz\nBuzz\n86\nFizz\n88\n89\nFizzBuzz\n91\n92\nFizz\n94\nBuzz\nFizz\n97\n98\nFizz\nBuzz`);
});

test('Returns an empty string when the count is less than 1', () => {
  expect(fizzBuzz(0)).toBe(``);
  expect(fizzBuzz(-10)).toBe(``);
});
  
test('Returns an empty string when the count is not an integer', () => {
  expect(fizzBuzz('six')).toBe(``);
  expect(fizzBuzz(undefined)).toBe(``);
  expect(fizzBuzz([])).toBe(``);
  expect(fizzBuzz(9.89)).toBe(``);
});
