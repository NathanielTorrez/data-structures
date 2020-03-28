var LinkedList = function() {
  var list = {
    // head:{
    //   value: 0;
          // next: {
          //   value: 1;
              // tail: null
          // }
    // }

  };
  // head is null until it is assigned
  // it needs to be assigned to the first input that went into    Node
  // we cant access it by using node.length
  // how can you acess the first input of an object?
  list.head = null;
  list.tail = null;
  var currentNode = list.head;


  list.addToTail = function(value) {
    //takes a value and adds it to the end of the list
    // the last node.next(pointer) always points to null
    // value = the new node we want to add
    var newNode = Node(value);
     //current list is empty
     if (list.head === null) {
         list.head = newNode;
         list.tail = newNode;
     } else {
        list.tail = newNode;
     }
  };

  list.removeHead = function() {
    // take the first element, delete it and  return it
    //return the value of the removedHead
    var lastHeadValue = list.head.value;
    var newHead = list.head.next;
    delete list.head
    list.head = newHead;
    return lastHeadValue;

  };

  list.contains = function(target) {
  //   //returns boolean reflecting whether or not the passed-in value is in the linked list
    if (list.head === null) {
      return false;
    }
    if(currentNode.value === target) {
      return true;
    } else {
      currentNode = currentNode.next;
    }
     list.contains(currentNode);
     return false
  };

  return list;
};





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


