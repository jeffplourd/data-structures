var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {next:null};
  var length = 0;

  // Implement the methods below

  someInstance.enqueue = function(value){
    length++;

    var end = storage; 
    while(end.next!==null){
      end = end.next; 
    }
    //end is going to be the last one on the list
    end.data = value;
    end.next = {next:null}; 
    
  };

  someInstance.dequeue = function(){
    if(length>1){
      
      length--;
      var result = storage.data; 
      storage = storage.next; 
      
      return result;
    }else if(length ==1){
      length--;
      var result = storage.data; 
      storage = {next:null}; 
      
      return result; 

    }else{
      return 0; 
    }


  };

  someInstance.size = function(){
    return length;
  };

  return someInstance;
};
