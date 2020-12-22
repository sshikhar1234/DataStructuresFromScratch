class Node{
  constructor(value){
    this.value = value
    this.left = null
    this.right = null
  }
}

class BinarySearchTree{
    constructor(){
    this.root = null;
  }
  insert(value){
    let newNode = new Node(value)
    let currentNode = this.root

    //Getting started with root node
    if(this.root === null){
      this.root = newNode
      return this;
    }

    while(true){
    if(value < currentNode.value){
      //go left
      if(!currentNode.left){
        currentNode.left = newNode;
        return this;
      }
      else{
        currentNode = currentNode.left;
      }
    }else{
      //go right
      if(!currentNode.right){
        currentNode.right = newNode;
        return this;
      }
      else{
        currentNode = currentNode.right;
      }
    }
    }

  }
 printTree(){
    let currentNode = this.root;
    console.log(currentNode)
  }


lookup(value) {
  console.log("Function lookup")
  let currentNode = this.root
  if(currentNode.value === value){
    return true;
  }
  else{
    while(true){
      if(value < currentNode.value){
        //search left
        if(!currentNode.left){
         console.log("Node not found in tree");
         return ;
        }
        else{
        currentNode = currentNode.left;
        }
      }
      else if( value > currentNode.value){
          //search right
        if(!currentNode.right){
          console.log("Node not found in tree");
          return ;
        }
        else{
        currentNode = currentNode.right;
        }
      }

      else if( value === currentNode.value){
        console.log("Node found ",currentNode);
          return currentNode;
      }
    }
  }
}


remove(value){
  let currentNode = this.root;
  let prevNode = this.root;
  while(true){
     console.log("prevNode "+ prevNode.value)
    console.log("currentNode "+ currentNode.value)
  if(value === currentNode.value){
    if(currentNode.left){

    }else if(currentNode.right){

    }else {
    	//We are at the leaf node than needs to be removed
    	//Remove the reference to that node from prevNode and its done!
      if(prevNode.left === currentNode){
      prevNode.left = null;
      console.log("node to be removed ",currentNode)
      }else if (prevNode.right === currentNode){
      prevNode.right = null;
      console.log("node to be removed ",currentNode)
      }
      return this;
      //remove this node
    }
  }
  
  else if(value < currentNode.value){
    if(currentNode.left){
      prevNode = currentNode;
      currentNode = currentNode.left
    }

  }
  else {
    console.log(value +" > "+currentNode.value)
    // console.log("prevNode "+ prevNode.value)
    // console.log("currentNode "+ currentNode.value)
    //go right
    if(currentNode.right){
      prevNode = currentNode;
      currentNode = currentNode.right;
    }
  }
}}
}
//     9
//  4     20
//1  6  15  170


const myTree = new BinarySearchTree();
myTree.insert(9);
myTree.insert(4);
myTree.insert(6);
myTree.insert(1);
myTree.insert(0);
myTree.insert(20);
myTree.insert(170);
myTree.insert(15);
// myTree.lookup(420);
// myTree.lookup(20);
myTree.remove(170);
//myTree.printTree();


// //     9
// //  4     20
// //1  6  15  170

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}