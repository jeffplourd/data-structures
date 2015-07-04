var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._count = 0;
};

HashTable.prototype.insert = function(k, v){
    var i = getIndexBelowMaxForKey(k, this._limit);
    
    var bucket = this._storage.get(i);
    bucket = bucket===undefined ? [] : bucket;
    //NOTE: we must update if pre-existing, and push if not there
    var outerIndex = null;

    //func: check if duple already exists
    _.each(bucket, function(item, index) {
      if(item[0] === k) {
        outerIndex = index;
      }
    });

    //check if duple already exists
    if(outerIndex !== null) { //c
      bucket[outerIndex] = [k,v];
    }else {
      bucket.push([k,v]);
      this._count++;
    }
    this._storage.set(i, bucket);

  //handles expanding size
  //1. reinsert each preexisting duple
  //2. insert new duple [k,v]
  if((this._count/this._limit)>=0.75){
    this._limit = this._limit * 2;
    
    
    var dupleArray = [];
    var newStorage = LimitedArray(this._limit); //new hash table
    this._count = 0; 
    
    this._storage.each(function(bucket, index, storage){ //get all duples from current database
      _.each(bucket, function(duple) {
        dupleArray.push(duple);        
      });
    });

    this._storage = newStorage; 
    for(var i = 0; i<dupleArray.length; i++){ //reinsert all storage
      var duple = dupleArray[i];
      //var dupleIndex = getIndexBelowMaxForKey(duple[0], this._limit);
      this.insert(duple[0],duple[1]); //insert current
    }
    
    this.insert(k,v); //insert current
    this._count++; 
    
  } //if(too large)
};

// Hashtable.prototype.print = function(){
//   alert('Cheers!');

// } //test

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
	this._storage.set(i, bucket);
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
