const { anyStorage } = require('./helpersFromChapter11');

async function locateScalpel(nest) {
  let foundNest = nest.name;
  let found = false;
  while(!found) {
    let nextNest = await anyStorage(nest, foundNest, 'scalpel');
    if(nextNest === foundNest) {
      foundNest = nextNest;
      found = true;
    } else {
      foundNest = nextNest;
    }
  }

  return foundNest;
}

function locateScalpel2(nest) {
  const recursiveLoop = (foundNest) => {
    return anyStorage(nest, foundNest, 'scalpel').then((found) => {
      if(found === foundNest) {
        return foundNest;
      } else {
        return recursiveLoop(found);
      }
    });
  };

  return recursiveLoop(nest.name);
}

module.exports = { locateScalpel, locateScalpel2 };
