const efficientRobot = require('./robotEfficiency');
const compareRobots = require('./measuringRobot');
const { goalOrientedRobot } = require('./helpersFromChapter7');

test('efficientRobot is more efficient than goalOrientedRobot', () => {
  const results1 = compareRobots(efficientRobot, [], goalOrientedRobot, []);
  expect(results1['Average Robot1 Turns'] < results1['Average Robot2 Turns']).toBe(true);
  const results2 = compareRobots(efficientRobot, [], goalOrientedRobot, []);
  expect(results2['Average Robot1 Turns'] < results2['Average Robot2 Turns']).toBe(true);
  const results3 = compareRobots(efficientRobot, [], goalOrientedRobot, []);
  expect(results3['Average Robot1 Turns'] < results3['Average Robot2 Turns']).toBe(true);
  const results4 = compareRobots(efficientRobot, [], goalOrientedRobot, []);
  expect(results4['Average Robot1 Turns'] < results4['Average Robot2 Turns']).toBe(true);
});
