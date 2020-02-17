const { Promise_all } = require('./buildingPromiseAll');

function soon(val) {
  return new Promise(resolve => {
    setTimeout(() => resolve(val), Math.random() * 500);
  });
}

test('Resolves with empty array when an empty array is passed in', () => {
  Promise_all([]).then(array => {
    expect(array).toEqual([]);
  });
});

test('Resolves with array of argument resolves', () => {
  Promise_all([soon(1), soon(2), soon(3)]).then(array => {
    expect(array).toEqual([1, 2, 3]);
  });
});

test('Rejects when argument does not resolve', () => {
  Promise_all([soon(1), Promise.reject("X"), soon(3)])
    .then(array => {
      // console.log("We should not get here");
      // The following test is NOT expected to run
      expect(true).toBe(false);
    })
    .catch(error => {
      if (error != "X") {
        // console.log("Unexpected failure:", error);
        // The following test is NOT expected to run
        expect(true).toBe(false);
      } else {
        expect(error).toEqual("X");
      }
    });
});
