var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.end = 0;
  this.start = 0;
  this.storage = {};
};
Queue.prototype.enqueue = function(value){
    this.storage[this.end] = value;
    this.end++;
};
Queue.prototype.dequeue = function(){
  var firstElement = this.storage[this.start];
  delete this.storage[this.start]
  this.start++
  return firstElement
}
Queue.prototype.size = function(){
  var currentSize = this.end - this.start;
  if ( currentSize < 0) {
    return 0
  }
  return currentSize
};
var ClassKing = new Queue()


