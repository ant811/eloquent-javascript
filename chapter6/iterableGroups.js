const Group = require('./group');

class GroupIterator {
  constructor(group) {
    this.group = group;
    this.counter = 0;
  }
  
  next() {
    if (this.counter === this.group.values.length) {
      return {done: true};
    } else {
      let value = this.group.values[this.counter];
      this.counter++;
      return {value, done: false};
    }
  }
}

Group.prototype[Symbol.iterator] = function() {
  return new GroupIterator(this);
};

module.exports = Group;
