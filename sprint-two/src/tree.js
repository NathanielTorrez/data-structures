var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me
  count = 0;
  _.extend(newTree, treeMethods)

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  // each of these children will need a count
  var newChild = this.children[count] = {};
  newChild.value = value;
  count++;
};

treeMethods.contains = function(target) {
};




/*
 * Complexity: What is the time complexity of the above functions?
 */
