var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {}
   someInstance.start = 0;
   someInstance.end = 0;
   someInstance.storage = {}

  _.extend(someInstance,queueMethods)


  return someInstance
};

var queueMethods = {
enqueue: function(value) {
  this.storage[this.end] = value
  this.end++
},
dequeue: function(){
  var firstElement = this.storage[this.start];
  delete this.storage[this.start];
  this.start++;
  return firstElement
},
size: function(){
  var currentSize = this.end - this.start;
  if (currentSize < 0) {
    return 0
  }
  return currentSize;
}
};


