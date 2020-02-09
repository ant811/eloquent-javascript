class Group {
  constructor() {
    this.values = [];
  }
  
  add(value) {
    if (!this.has(value)) {
      this.values.push(value);
    }
  }

  has(value) {
    return this.values.indexOf(value) !== -1;
  }

  delete(value) {
    if (this.has(value)) {
      this.values.splice((this.values.indexOf(value)), 1);
    }
  }

  static from(values) {
    const group = new Group;
    for (let value of values) {
      group.add(value);
    }
    
    return group;
  }
}

module.exports = Group;
