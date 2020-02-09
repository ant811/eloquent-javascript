const yourOwnLoop = require('./yourOwnLoop');

test('Loop iterates and terminates when expected', () => {
  const multiplesOfThree = [];
  yourOwnLoop(21, num => num > 3, num => num - 1, num => {
    if (num % 3 === 0) {
      multiplesOfThree.push(num);
    }
  });

  expect(multiplesOfThree).toEqual([21, 18, 15, 12, 9, 6]);
});
