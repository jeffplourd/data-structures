var Stack = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var length=0; 

  // Implement the methods below
  someInstance.push = function(value){
    length++; 
    storage[length] = value; 
  };

  someInstance.pop = function(){
    if(length>=1){
      length--; 
      return storage[length+1]; 
    }else{
      return 0; 
    }
  };

  someInstance.size = function(){
    return length; 
  };

  return someInstance;
};