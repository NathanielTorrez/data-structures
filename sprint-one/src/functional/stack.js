var Stack = function() {

  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = { };
  var size = 0;

  // Implement the methods below
  someInstance.push = function(value) {
     size++;
     storage[size] = value;
  };

  someInstance.pop = function() {
    var lastElement = storage[size];
    delete storage[size];
    size--;
    return lastElement;
  };

  someInstance.size = function() {

    if (size < 0) {
      return 0;
    }
    return size;
  };

  return someInstance;
};
var test = Stack()
test.push(1)
test.size()
test.pop()
