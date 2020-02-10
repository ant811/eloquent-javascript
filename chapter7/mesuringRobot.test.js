const compareRobots = require('./measuringRobot');
const { goalOrientedRobot, routeRobot } = require('./helpersFromChapter7');

test('Returns average steps per task', () => {
  const results = compareRobots(routeRobot, [], goalOrientedRobot, []);
  expect(typeof results['Average Robot1 Turns']).toBe('number');
  expect(results['Average Robot1 Turns'] > 0).toBe(true);
  expect(typeof results['Average Robot2 Turns']).toBe('number');
  expect(results['Average Robot2 Turns'] > 0).toBe(true);
});

test('goalOrientedRobot is more efficient than routeRobot', () => {
  const results1 = compareRobots(routeRobot, [], goalOrientedRobot, []);
  expect(results1['Average Robot1 Turns'] > results1['Average Robot2 Turns']).toBe(true);
  const results2 = compareRobots(routeRobot, [], goalOrientedRobot, []);
  expect(results2['Average Robot1 Turns'] > results2['Average Robot2 Turns']).toBe(true);
});
