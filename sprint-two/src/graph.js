

// Instantiate a new graph
var Graph = function() {
  this._nodes = {};npom
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this._nodes[node] = this._nodes[node] ||  { edges: {} };
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  if(!this._nodes[node]){
    return false;
  }
  return true;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  if(this.contains(node)){
    for (var edgeNode in this._nodes[node].edges){
      this.removeEdge(node,edgeNode)
    }
  }
  delete this._nodes[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  if(!this.contains(fromNode)){
    return false;
  }
  return !!this._nodes[fromNode].edges[toNode];
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  if(!this._nodes[fromNode]||!this._nodes[toNode]){
    return "nodes to not exist"
  }
  this._nodes[fromNode].edges[toNode] = toNode;
  this._nodes[toNode].edges[fromNode] = fromNode;
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  if(!this.hasEdge(fromNode,toNode)){
    return "Does not have edge"
  }
  delete this._nodes[fromNode].edges[toNode];
  delete this._nodes[toNode].edges[fromNode];

};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (node in this._nodes){
    cb(node)
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


