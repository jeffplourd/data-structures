var Tree = function(value){
  var newTree = Object.create(treeMethods);
  newTree.value = value;
  // your code here
  newTree.children = [];  

  return newTree;
};





var treeMethods = {};

treeMethods.addChild = function(value){
	var newTree = Tree(value);

	this.children.push(newTree);
};

treeMethods.contains = function(target){

	if(this.value===target){
		return true;
	}else {
		return _.some(this.children, function(item){
			return item.contains(target); 
		});
	}
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
