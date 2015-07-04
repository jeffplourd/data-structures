var BinarySearchTree = function(value){
	var obj = {};
	obj.value = value;
	obj.left = null;//lower
	obj.right = null;//higher	

	

	obj.insert = function(value) {
		if(value > this.value) {
			if(this.right === null){
				var newBST = BinarySearchTree(value);
				newBST.left = this; 
				this.right = newBST; 
			}else{ // if right exists
				if(value > this.right.value){ // greater than 
					this.right.insert(value);
				}else{ // if less than BST to the right: Put node in between
					var newBST = BinarySearchTree(value);
					newBST.left = this; //position newBST left
					newBST.right = this.right; //position newBST right
					this.right.left = newBST; //repoint right object
					this.right = newBST; //repoint current object
				}
			} //if(right)
		}else if(value < this.value){
			if(this.left === null){
				var newBST = BinarySearchTree(value);
				newBST.right = this; 
				this.left = newBST; 

			}else{
				if(value < this.left.value){ // greater than 
					this.left.insert(value);
				}else{ // if less than BST to the.left: Put node in between
					var newBST = BinarySearchTree(value);
					newBST.right = this; 
					newBST.left = this.left; 
					this.left.right = newBST;
					this.left = newBST; 
				}
			} //if(left)
		} //if
	};

	obj.contains = function(target) {
		if(target === this.value) {
			return true;
		}else if(target > this.value) {
			if(this.right === null) {
				return false;
			}else if(target < this.right.value) {//it means target is in between, and does not exist
				return false;
			}else {
				return this.right.contains(target);
			}
		}else if(target < this.value) {
			if(this.left === null) {
				return false;
			}else if(target > this.left.value) {//it means target is in between, and does not exist
				return false;
			}else {
				return this.left.contains(target);
			}
		}
	};

	obj.depthFirstLog = function(func) {
		func(this.value); //run on current value
		
		var left = this.left; 
		while(left!==null){ //go left until null
			func(left.value)
			left = left.left; 
		}

		var right = this.right; 
		while(right!==null){ //go right until null
			func(right.value)
			right = right.right; 
		}			
		
	};

	return obj; 
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
