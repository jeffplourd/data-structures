

var Graph = function(){
	this.edges = [];
	this.nodes = [];
};

Graph.prototype.addNode = function(node){
	this.nodes.push(node);
};

Graph.prototype.contains = function(node){
	return _.some(this.nodes, function(item) {
		return item === node;
	});	
};

Graph.prototype.removeNode = function(node){
	if(this.contains(node)){
		this.nodes.splice(this.nodes.indexOf(node), 1);
	}
};

Graph.prototype.hasEdge = function(fromNode, toNode){
	return _.some(this.edges, function(item) {
		var one = item[0];
		var two = item[1];
		if((one === fromNode && two === toNode) || (two === fromNode && one === toNode)) {
			return true;
		}else {
			return false;
		}
	});
};

Graph.prototype.addEdge = function(fromNode, toNode){
	if(!this.hasEdge(fromNode, toNode)) {
		this.edges.push([fromNode, toNode]);
	}
};

Graph.prototype.removeEdge = function(fromNode, toNode){
	if(this.hasEdge(fromNode,toNode)) {
		_.each(this.edges, function(item, index, collection) {
			var one = item[0];
			var two = item[1];
			if((one === fromNode && two === toNode) || (two === fromNode && one === toNode)) {
				collection.splice(index,1);
			}
		});
	}
};

Graph.prototype.forEachNode = function(cb){
	_.each(this.nodes, function(item) {
		cb(item);
	});
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



