var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  // will be our numeric keys
  // this will store the elements of stack
  // this object can store the stack methods as we add them
  var someInstance = {};
  // we will now continiously extend the method object to contain all values passed into stackMethods
  someInstance.count = 0 ;
  someInstance.storage = {};
  _.extend(someInstance,stackMethods)

  return someInstance
};

var stackMethods = {
  push: function(value){
    this.count++;
    this.storage[this.count] = value ;
  },

  pop: function(){
    var lastElement = this.storage[this.count];
    delete this.storage[this.count];
    this.count--;
    return lastElement;
  },

  size: function(){
    if (this.count < 0){
      return 0
    }
    return this.count;
  }
};


