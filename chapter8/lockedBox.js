const box = {
  locked: true,
  unlock() { this.locked = false; },
  lock() { this.locked = true;  },
  _content: [],
  get content() {
    if (this.locked) throw new Error("Locked!");
    return this._content;
  }
};
  
function withBoxUnlocked(body) {
  let isLocked = box.locked;
  try {
    if(isLocked) {
      box.unlock();
      return body();
    } else {
      return body();
    }
  } finally {
    if(isLocked) {
      box.lock();
    }
  }
}

module.exports = { box, withBoxUnlocked };
