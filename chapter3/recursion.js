const isEven = (number) => {
  if (typeof number !== 'number') {
    return NaN;
  }

  if (!Number.isInteger(number)) {
    return '';
  }

  if (number === 0) {
    return true;
  } else if (number === 1) {
    return false;
  } else if (number < 0) {
    return isEven(-number);
  } else {
    return isEven(number - 2);
  }
};

module.exports = isEven;
