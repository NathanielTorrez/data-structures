var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me
  _.extend(newTree, treeMethods)
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  // each of these children will need a count
  var newChild = Tree(value);
  this.children.push(newChild);
};

treeMethods.contains = function(target) {

  if(this.value === target) {
    return true;
  } else {
    for (var i=0; i<this.children.length; i++){
      if (this.children[i].value === target){
        return true;
      }
      this.children[i].contains(target)
    }
      return false;
  }

};




/*
 * Complexity: What is the time complexity of the above functions?
 */


