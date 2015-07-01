var Queue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newObj = {};
  newObj.length = 0;
  newObj.storage = {next:null};
  _.extend(newObj, queueMethods);
  return newObj;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
	this.length++;
	var end = this.storage;
	while(end.next !== null) {
		end = end.next;
	}
	end.data = value;
	end.next = {next:null};
};

queueMethods.dequeue = function() {
	if(this.length>1) {
		this.length--;
		var temp = this.storage.data;
		this.storage = this.storage.next;
		return temp;
	}else if(this.length === 1) {
		this.length--;
		var temp = this.storage.data;
		this.storage = {next:null};
		return temp;
	}else {
		return 0;
	}
};

queueMethods.size = function() {
	return this.length;
};


