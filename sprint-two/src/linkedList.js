var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    if(list.head===null){
      list.head = Node(value);
      list.tail = list.head; 
    }else{
      list.tail.next = Node(value); 
      list.tail = list.tail.next; 
    }
  };

  list.removeHead = function(){
    var temp = list.head;
    list.head = list.head.next; 
    return temp.value; 
  };

  list.contains = function(target){
    var temp = list.head; 

    while(temp.next!==null){
      if(temp.value === target){break;}
      temp = temp.next;  
    }
    return temp.value==target; 
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


// list {
//   head: null,
//   tail: null,
// }