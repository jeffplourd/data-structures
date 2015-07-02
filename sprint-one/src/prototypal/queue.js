var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = Object.create(queueMethods);
  obj.storage = {next:null};
  obj.length = 0;
  return obj;
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
	if(this.length > 1) {
		this.length--;
		var result = this.storage.data;
		this.storage = this.storage.next;
		return result;
	}else if(this.length === 1) {
		this.length--;
		var result = this.storage.data;
		this.storage = {next:null};
		return result;
	}else {
		return 0;
	}
};

queueMethods.size = function() {
	return this.length;
};


