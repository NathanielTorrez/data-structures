var BinarySearchTree = function(value) {
  var tree = Object.create(treePrototype);
  tree.value = value;
  tree.left = null;
  tree.right = null;
  return tree;
};
var treePrototype = {};

treePrototype.insert = function(val) {
  if (val < this.value){
    if (this.left === null){
      this.left = BinarySearchTree(val);
    } else {
      this.left.insert(val);
    }
  } else if (val > this.value){
   this.right = BinarySearchTree(val);
  } else {
    this.right.insert(val)
  } else {

  };
}


/*
 * Complexity: What is the time complexity of the above functions?
 */
