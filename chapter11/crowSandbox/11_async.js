// Reproduced some code from Chapter 11 to practice promises & callbacks

const { bigOak } = require("./crow-tech");
const { defineRequestType } = require("./crow-tech");

// 'callback hell' to retrieve food cache in bigOak
bigOak.readStorage('food caches', (caches) => {
  let bigOakCache = caches[0];
  bigOak.readStorage(bigOakCache, (bigOakStorage) => {
    console.log('Callback - in big oak:', bigOakStorage);
  });
});

// send method
bigOak.send('Cow Pasture', 'note', 'Let\'s caw loudly at 7AM', ()=> {
  console.log('Note sucessfully received');
});

// define request type 'note'
defineRequestType("note", (nest, content, source, done) => {
  console.log(`${nest.name} received note: ${content}`);
  done();
});

// storage retrieval using Promise object
function storage(nest, name){
  return new Promise(resolve => {
    nest.readStorage(name, result => {
      resolve(result);
    })
  })
} 

// Promise to retrieve all enemies in storage
storage(bigOak, 'enemies').then((values) => {
  console.log('Got: ', values);
})

// Promise to retrieve food cache in big oak
storage(bigOak, 'food caches').then((caches) => {
  //console.log('caches received', caches);
  storage(bigOak, caches[0]).then((inBigOak) => {
    console.log('Promise - in big oak: ', inBigOak);
  })
})
