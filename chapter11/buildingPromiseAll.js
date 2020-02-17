function Promise_all(promises) {
  return new Promise((resolve, reject) => {
    const argumentResolves = [];
    let counter = 0;
    for (let i = 0; i < promises.length; i++) {
      promises[i].then(result => {
        counter++;
        argumentResolves[i] = result;
        // console.log('i, counter, argumentResolves', i, counter, argumentResolves);
        if (counter === promises.length) {
          // i, counter, argumentResolves 2 1 [ <2 empty items>, 3 ]
          // i, counter, argumentResolves 1 2 [ <1 empty item>, 2, 3 ]
          // i, counter, argumentResolves 0 3 [ 1, 2, 3 ]
          // resolve(argumentResolves) => [ 1, 2, 3 ]

        // The if statement below does not work, argument promises are not necessarily resolved in order 
        // Maintaining counter outside of argument promises ensures that all argument promises are resolved before Promise_all resolves
        // if (i === promises.length - 1) {  
          // console.log => i, counter, argumentResolves 1 1 [ <1 empty item>, 2 ]
          // console.log => i, counter, argumentResolves 2 2 [ <1 empty item>, 2, 3 ]
          // resolve(argumentResolves) => [1, 2, 3]: [ <1 empty item>, 2, 3 ]
          resolve(argumentResolves);
        }
      }).catch(reject);
    }

    if (promises.length === 0) {
      resolve(argumentResolves);
    };
  });
}

module.exports = { Promise_all };
