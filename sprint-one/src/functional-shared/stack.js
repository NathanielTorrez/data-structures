var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  // will be our numeric keys
  var size = 0
  // this will store the elements of stack
  var storage = {}
  // this object can store the stack methods as we add them
  var someInstance = {};
  // we will now continiously extend the method object to contain all values passed into stackMethods

  return someInstance
};

var stackMethods = {
  push: function(value){
    size++;
    storage[size] = value ;
  },

  pop: function(){
    var lastElement = storage[size];
    size--;
    delete storage[size];
    return lastElement;
  },

  size: function(){
    if (size < 0){
      return 0
    }
    return size;
  }
};


