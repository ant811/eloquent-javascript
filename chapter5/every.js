const every = (array, test) => {
  for (let element of array) {
    if (!test(element)) {
      return false;
    }
  }

  return true;
};

const everyWithSome = (array, test) => {
  let booleans = array.map((element) => {
    return test(element);
  });
  
  return !booleans.some((boolean) => {
    return boolean === false;
  });
};

module.exports = { every, everyWithSome };

// Official answer is much cleaner

// function every2(array, predicate) {
//   return !array.some(element => !predicate(element));
// }
