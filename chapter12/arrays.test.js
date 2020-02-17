const { topScope } = require('./arrays');
const { run } = require('./12_language');

test('Egg defines, evaluates, and calls methods on arrays', () => {
  let value1 = run(`
  do(define(sum, fun(array,
       do(define(i, 0),
          define(sum, 0),
          while(<(i, length(array)),
            do(define(sum, +(sum, element(array, i))),
               define(i, +(i, 1)))),
          sum))),
     print(sum(array(1, 2, 3))))
  `);
  expect(value1).toEqual(6);
  
  let value2 = run(`
  do(define(sum, fun(array,
       do(define(i, 0),
          define(sum, 0),
          while(<(i, length(array)),
            do(define(sum, +(sum, element(array, i))),
               define(i, +(i, 1)))),
          sum))),
     print(sum(array(1, 2, 3, 4, 5))))
  `);
  expect(value2).toEqual(15);
});
