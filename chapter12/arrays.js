const { topScope } = require('./12_language');

topScope.array = (...elements) => {
  return [...elements];
};

topScope.length = (array) => {
  return array.length;
};

topScope.element = (array, index) => {
  return array[index];
};

module.exports = { topScope };
