let quoteRegEx = /(^)'|(\W)'|'($)|'(\W)/g;
let replacement = '$1$2$3$4"';

module.exports = { quoteRegEx, replacement };
