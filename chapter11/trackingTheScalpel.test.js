const { locateScalpel, locateScalpel2 } = require('./trackingTheScalpel');
const { bigOak } = require('./crowSandbox/crow-tech');

test('Finds nest with scalpel', () => {
  locateScalpel(bigOak).then((found) => {
    expect(found).toEqual('Butcher\'s Shop');
  });
  locateScalpel2(bigOak).then((found) => {
    expect(found).toEqual('Butcher\'s Shop');
  });
});