const SCRIPTS = require('./scripts');

// VERSION 1: Not using countBy

// Function characterScript is a function from Chapter 5 lesson
  // Changes: 
    // 1) Passes in length of text as parameter 
    // 2) Returns object with direction and length of text

function characterScript1(code, length) {
  for (let script of SCRIPTS) {
    if (script.ranges.some(([from, to]) => {
      return code >= from && code < to;
    })) {
      return {direction: script.direction, length};
    }
  }
  return null;
}

const dominantDirection1 = (text) => {
  let textArr = text.split(', ');
  let textDataArr = textArr.map((script) => {
    return characterScript1(script.codePointAt(0), script.length);
  });

  return textDataArr.reduce((acc, element) => {
    return element.length > acc.length ? {length: element.length, direction: element.direction}: acc;
  }, { length: 0, direction: ''}).direction;
};


// VERSION 2: Using countBy

// Function countBy is a function from Chapter 5 lesson
  // Changes:
   // 1) Returns object abstracted from length-1 counts array
   // 2) groupName receives item.codePointAt(0) as the argument

function countBy(items, groupName) {
  let counts = [];
  for (let item of items) {
    let name = groupName(item.codePointAt(0));
    let known = counts.findIndex(c => c.name == name);
    if (known == -1) {
      counts.push({name, count: 1});
    } else {
      counts[known].count++;
    }
  }

  return counts[0];
}

// Function characterScript is a function from Chapter 5 lesson
  // Changes:
    // 1) Returns direction property

function characterScript2(code) {
  for (let script of SCRIPTS) {
    if (script.ranges.some(([from, to]) => {
      return code >= from && code < to;
    })) {
      return script.direction;
    }
  }
  return null;
}

const dominantDirection2 = (text) => {
  let textArr = text.split(', ');
  let textDataArr = textArr.map((script) => {
    return countBy(script, characterScript2);
  });

  return textDataArr.reduce((acc, element) => {
    return element.count > acc.count ? {count: element.count, name: element.name}: acc;
  }, { count: 0, name: ''}).name;
};

module.exports = { dominantDirection1, dominantDirection2 };

// CONCLUSION / THOUGHTS
  // 1) Version 2 is more accurate.  The function countBy filters out whitespace and only evaluates 
    // targeted script characters (E.g., '!' evaluates to character code 33, which is not identified 
    // with any script, and the empty space in the Arabic string is not counted toward script length
  // 2) Version 1 only evaluates the first character in the string and determines length without
    // evaluating every character in the string
    

