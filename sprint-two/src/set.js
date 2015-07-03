var Set = function(){
  var set = Object.create(setPrototype);
  set.storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(item){
	this.storage[item] = true; 
};

setPrototype.contains = function(item){
	return this.storage[item] ? true:false;
};

setPrototype.remove = function(item){
	// this.storage[item]=false; //an alternative
	delete this.storage[item];
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
