class PGroup {
  constructor(values) {
    this.values = values;
  }
  
  has(value) {
    if (this.values.indexOf(value) !== -1) {
      return true;
    } else {
      return false;
    }
  }

  add(value) {
    if (!this.has(value)) {
      return new PGroup(this.values.concat([value]));
    } else {
      return this;
    }
  }

  delete(value) {
    if (this.has(value)) {
      return new PGroup(this.values.filter(item => item !== value));
    } else {
      return this;
    }
  }
}

// empty instance
PGroup.empty =  new PGroup([]);

module.exports = PGroup;
