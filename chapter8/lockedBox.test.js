const { box, withBoxUnlocked } = require('./lockedBox');

test('Adds values to locked box', () => {
  expect(withBoxUnlocked(() => {
    const content = box.content;
    const treasures = ['gold crown', 'sceptre', 'doubloon'];
    treasures.map(treasure => content.push(treasure));
    return content;
  })).toEqual(['gold crown', 'sceptre', 'doubloon']);
});

test('Unlocks, then locks, box', () => {
  expect(box.locked).toBe(true);
  withBoxUnlocked(() => {
    expect(box.locked).toBe(false);
  });
  expect(box.locked).toBe(true);
});

test('Does not lock box when box is already unlocked', () => {
  box.locked = false;
  expect(box.locked).toBe(false);
  withBoxUnlocked(() => {
    expect(box.locked).toBe(false);
  });
  expect(box.locked).toBe(false);
});

test('Access to locked box._content denied without withBoxUnlocked()', () => {
  box.locked = true;
  try {
    box.content();
  } catch(error) {
    expect(error.message).toBe('Locked!');
  }
  
  expect(withBoxUnlocked(() => {
    return box.content;
  })).toEqual(['gold crown', 'sceptre', 'doubloon']);

  box.locked = false;
  expect(box.content).toEqual(['gold crown', 'sceptre', 'doubloon']);
});
