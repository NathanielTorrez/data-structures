class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.start = 0
    this.end = 0
    this.storage = {}
  }

  enqueue  (value) {
    this.storage[this.end] = value;
    this.end++;
  }

  dequeue () {
   var firstElement = this.storage[this.start];
   delete this.storage[this.start];
   this.start++;
   return firstElement;
  }

  size () {
    var currentSize = this.end - this.start;
    if ( currentSize < 0) {
      return 0
    }
    return currentSize
  }
}

var ClassKing = new Queue()
