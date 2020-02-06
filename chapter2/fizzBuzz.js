function fizzBuzz(count) {
  const result = [];

  if (Number.isInteger(count)) {
    for (let i = 1; i <= count; i++) {
      let evaluation = '';

      if (i % 3 === 0) {
        evaluation+="Fizz";
      }

      if (i % 5 === 0) {
        evaluation+="Buzz";
      }

      result.push(evaluation || i);
    }
  }

  return result.join(`\n`);
}

module.exports = fizzBuzz;

// console.log(fizzBuzz(100));
// 1
// 2
// Fizz
// 4
// Buzz
// Fizz
// 7
// 8
// Fizz
// Buzz
// 11
// Fizz
// 13
// 14
// FizzBuzz
// 16
// 17
// Fizz
// 19
// Buzz
// Fizz
// 22
// 23
// Fizz
// Buzz
// 26
// Fizz
// 28
// 29
// FizzBuzz
// etc...
