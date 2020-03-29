var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var startOfLine = 0;
  var endOfLine = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[endOfLine] = value;
    endOfLine++
  };

  someInstance.dequeue = function() {
    var firstElement = storage[startOfLine];
    delete storage[startOfLine];
    startOfLine++;
    return firstElement;
  };

  someInstance.size = function() {
    var currentSize = endOfLine - startOfLine ;
    if (currentSize < 0) {
      return 0;
    }
    return currentSize;
  };

  return someInstance;
};
