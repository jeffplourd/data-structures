var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
	var newObj = {};	
	newObj.storage = {}; 
	newObj.length = 0; 

	_.extend(newObj, stackMethods);

	return newObj;
};

var stackMethods = {
	push: function(value){
		this.length++; 
		this.storage[this.length] = value; 
	}, 
	pop: function(){
		if(this.length>=1){
			this.length--;
		}
		
		return this.storage[this.length+1];
	}, 
	size: function(){
		return this.length; 
	}

};

