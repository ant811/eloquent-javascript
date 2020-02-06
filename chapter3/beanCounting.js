// original countBs
// const countBs = (string) => {
//   if (typeof string !== 'string') {
//     return '';
//   }

//   let counter = 0;
//   for (let i = 0; i < string.length; i++) {
//     if (string[i] === 'B') {
//       counter++;
//     }
//   }

//   return counter;
// };

const countChar = (string, char) => {
  if (typeof string !== 'string' || typeof char !== 'string') {
    return '';
  }

  let counter = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === char) {
      counter++;
    }
  }

  return counter;
};

const countBs = (string) => {
  return countChar(string, 'B');
};

module.exports = { countChar, countBs };
