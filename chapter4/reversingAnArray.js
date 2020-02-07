const reverseArray = (array) => {
  const result = [];
  if (Array.isArray(array)) {
    for (let i = array.length - 1; i >= 0; i--) {
      result.push(array[i]);
    }
  }

  return result;
};

const reverseArrayInPlace = (array) => {
  if (!Array.isArray(array)) {
    return [];
  }
  let iterations = Math.floor(array.length / 2);
  
  for (let i = 0; i < iterations; i++) {
    let swap1 = array[i];
    let swap2 = array[array.length - 1 - i];
    array[i] = swap2;
    array[array.length - 1 - i] = swap1;
  }

  return array;
};

module.exports = { reverseArray, reverseArrayInPlace };
