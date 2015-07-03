var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);
  bucket = bucket===undefined ? [] : bucket;
  //NOTE: we must update if pre-existing, and push if not there
  bucket.push([k,v]);
  this._storage.set(i, bucket);
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);
  var result=null; 

  _.each(bucket, function(item, index){
  	if(item[0]===k){
  		result = item[1];
  	}
  });

  return result;
};

HashTable.prototype.remove = function(k){
	var i = getIndexBelowMaxForKey(k, this._limit);
	var bucket = this._storage.get(i);
	var outerIndex; 
  	_.each(bucket, function(item, index, bucket){ //item = [k, v]
	  	if(item[0]===k){
	  		outerIndex = index;
	  	} //if
	}); 

	bucket.splice(outerIndex,1);
	// this._storage.set(i, bucket);
};

// HashTable.prototype.searchBucket = function(bucket, k){ //find and returns given [k,v] pair
//   return _.filter(bucket, function(item, index){ //item = [k, v]
//   	if(item[0]===k){
//   		return true; //set result to v
//   	} //if
//   }); 
// }



/*
 * Complexity: What is the time complexity of the above functions?
 */
