const arrayToList = (array) => {
  if (array.length === 0 || !Array.isArray(array)) {
    return {};
  }

  let list;
  for (let i = 0; i < array.length; i++) {
    if (i === 0) {
      list = {
        value: array[i],
        rest: null
      };
    } else {
      let nextItem = list;
      while (nextItem.rest !== null) {
        nextItem = nextItem.rest;
      }

      nextItem.rest = {
        value: array[i],
        rest: null
      };
    }
  }

  return list;
};

const listToArray = (list) => {
  const array = [];
  if (Object.keys(list).length !== 0 && typeof list === 'object' && !Array.isArray(list)) {
    let nextItem = list;
    while (nextItem) {
      array.push(nextItem.value);
      nextItem = nextItem.rest;
    }
  }
  
  return array;
};

const prepend = (element, list) => {
  return {
    value: element,
    rest: list
  }
}; 

const nth = (list, number) => {
  let counter = 0;
  let nextItem = list;
  while (counter < number && nextItem !== null) {
    nextItem = nextItem.rest;
    counter++;
  }

  if (nextItem === null) {
    return undefined;
  } else {
    return nextItem.value;
  }
};

const recursiveNth = (list, number, counter = 0) => {
  if (list === null) {
    return undefined;
  } else if (counter === number) {
    return list.value;
  } else {
    return recursiveNth(list.rest, number, ++counter);
  }
};

module.exports = { arrayToList, listToArray, prepend, nth, recursiveNth };

