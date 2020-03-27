class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.count = 0;
    this.storage = {};
  }

  pop () {
    var lastElement = this.storage[this.count];
    delete this.storage[this.count];
    this.count--;
    return lastElement;
  }

  size () {
    if (this.count < 0) {
      return 0
    }
    return this.count
  }

  push (value) {
    this.count++
    this.storage[this.count] = value
  }
};

var Stacker = new Stack()