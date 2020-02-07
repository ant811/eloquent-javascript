const range = (start, end, step = start < end ? 1 : -1) => {
  if (typeof start !== 'number' || typeof end !== 'number' || typeof step !== 'number') {
    return NaN;
  }

  const result = [];
  //Prevent stack overflow
    //Return an empty array:
      //when range counts up and has negative step, or
      //when rangle counts down and has positive step
  if ((start < end && step < 0 ) || (start > end && step > 0)) {
    return result;
  }

  for (let i = start; start < end ? i <= end : i >= end; i = i + step) {
    result.push(i);
  }

  return result;
};

const sum = (numbers) => {
  if (Number.isNaN(numbers)) {
    return NaN;
  }

  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total+=numbers[i];
  } 

  return total;
};

module.exports = { range, sum };
