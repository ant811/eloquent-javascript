const { VillageState } = require('./helpersFromChapter7');

function turnCounter(state, robot, memory) {
  for (let turns = 0;; turns++) {
    if (state.parcels.length == 0) {
      return turns;
    }

    let action = robot(state, memory);
    state = state.move(action.direction);
    memory = action.memory;
  }
}

function compareRobots(robot1, memory1, robot2, memory2) {
  let robot1Turns = 0;
  let robot2Turns = 0;
  for (let i = 0; i <100; i++) {
    let state = VillageState.random();
    robot1Turns = robot1Turns + turnCounter(state, robot1, memory1);
    robot2Turns = robot2Turns + turnCounter(state, robot2, memory2);
  }

  return {"Average Robot1 Turns": robot1Turns/100, "Average Robot2 Turns": robot2Turns/100};
}

module.exports = compareRobots;
