const yourOwnLoop = (value, test, update, body) => {
  for (i = value; test(i); i = update(i)) {
    body(i);
  }
};

module.exports = yourOwnLoop;
