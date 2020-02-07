const deepEqual = (item1, item2) => {
  if (item1 === item2) {
    return true;
  }

  if ((item1 === null && item2 !== null) || (item1 !== null && item2 === null)) {
    return false;
  }

  let item1Keys = Object.keys(item1);
  let item2Keys = Object.keys(item2);

  if (item1Keys.length === item2Keys.length) {
    for (let key of item1Keys) {
      if (item2Keys.indexOf(key) === -1) {
        return false;
      } else if (!deepEqual(item1[key], item2[key])) {
        return false;
      }
    }
  } else {
    return false;
  }

  return true;
};

module.exports = deepEqual;
