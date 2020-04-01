var BinarySearchTree = function(value) {
  // save value to a variable
  this.value = value;
  //left property that stores smaller or equal to current value
  this.left = undefined;
  // right propterty that stores larger or equal to current value
  this.right = undefined;
};
BinarySearchTree.prototype.addNode = function(value) {
  // check if value was smaller or larger than current value choose direction
  var newTree = new BinarySearchTree(value);
  if (value >= this.value) {
    // if direction undefined place tree - Base case
    if (this.right === undefined) {
      // create a new instance of tree
      this.right = newTree;
      return newTree;
    }
    // Repeat process on child tree
    this.right.addNode(value);
  }
  if (this.left === undefined) {
    this.left = newTree;
    return newTree;
  }
  this.left.addNode(value);

};


/*
 * Complexity: What is the time complexity of the above functions?
 */

var testTree = new BinarySearchTree(10);
console.log(testTree.value); //10
testTree.addNode(20);
console.log(testTree);
testTree.addNode(30);
console.log(testTree,testTree.right);

// var anotherTestTree = new BinarySearchTree(5);
// anotherTestTree.addNode();