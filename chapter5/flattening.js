const flatten = (arrays) => {
  if (Array.isArray(arrays)) {
    return [...arrays].reduce((acc, array) => {
      return acc.concat(array);
    }, []);
  } else {
    return [];
  }
};

module.exports = flatten;
