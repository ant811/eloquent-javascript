const minimum = (a, b) => {
  if (typeof a === 'number' && typeof b === 'number') {
    return a < b ? a : b;
  } else {
    return NaN;
  }
};

module.exports = minimum;
