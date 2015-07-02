var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = [];
  this.length = 0;
};

Queue.prototype.enqueue = function(value) {
	this.length++;
	this.storage.push(value);
};

Queue.prototype.dequeue = function() {
	if(this.length >= 1) {
		this.length--;
		return this.storage.shift();		
	}else {
		return 0;
	}
};

Queue.prototype.size = function() {
	return this.length;
}


