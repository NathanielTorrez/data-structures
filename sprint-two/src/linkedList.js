var LinkedList = function() {
  var list = {};
  // head is null until it is assigned
  // it needs to be assigned to the first input that went into    Node
  // we cant access it by using node.length
  // how can you acess the first input of an object?
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    //takes a value and adds it to the end of the list
    // the last node.next(pointer) always points to null
    // value = the new node we want to add
    var newNode = Node(value);

     if (list.head === null) {
         list.head = newNode;
     } else {
        list.tail.next = newNode;
     }
     list.tail = newNode;
  };

  list.removeHead = function () {
    // take the first element, delete it and  return it
    //return the value of the removedHead
    var lastHeadValue = list.head.value;
    var newHead = list.head.next;
    delete list.head
    list.head = newHead;
    return lastHeadValue;
  };

  list.contains = function (target) {
    var i = list.head;
    while (i) {
      if (i.value === target) {
        return true;
      }
      i = i.next
    }
    return false;
  };
  return list;
};


// [head] -> [2] -> [3] -> [tail]



//creating a new node with given argument as a value and pointer as null

var Node = function(value) {
  var node = {};

  node.value = value;
  // where the pointer is pointing by default
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


