class DoublyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      previous: null
    };
    this.tail = this.head
    this.length = 1
  }
  
  append(value) {
    console.log("Adding at the end")
    const  newNode = new Node(value)
    this.tail.next = newNode
    newNode.previous = this.tail
    this.tail = newNode
    this.length++
    return this.printList()
  }

  prepend(value){
    console.log("Adding in the beginning")
    const  newNode = new Node(value)
    this.head.previous = newNode
    newNode.next = this.head
    this.head = newNode
    this.length++
    return this.printList()
  }

  insert(index,value){
    const  newNode = new Node(value)
    let ind = 0
    let currentNode = this.head
    
    if(index === 0){
      this.prepend(value)
      return
    }
    else if(index>this.length){
      this.append(value)
      return
    }
    console.log("Adding at index: ",index)
    while(ind<=index){
      if(ind === index-1){
        let follower = currentNode.next
        newNode.next = currentNode.next
        currentNode.next = newNode
        newNode.previous = currentNode
        follower.previous = newNode
        this.printList()
      }
      currentNode = currentNode.next
      ind++
    }
    
    return 
  }

  removeAt(index){
    let ind = 0
    let passedIndex = parseInt(index, 10)
    let currentNode = this.head

    if(passedIndex === 0){      
    console.log("Removing the head")
      this.head = currentNode.next
        this.length--
        return this.printList()
    } else if(passedIndex > this.length){
    console.log("Invalid index passed")
      return
    } else if(passedIndex == this.length){
      //Means remove the last element 
    console.log("Removing the tail")
      //Get reference to prevNode and remove ref to that node from victim node
    
      const prevNode = this.tail.previous
      this.tail.previous = null
      this.tail = prevNode
      prevNode.next = null
      this.length--
      return this.printList()
    }
    console.log("Removing at index: ",passedIndex)
    while(ind <= passedIndex && passedIndex > 0 && passedIndex < this.length){
      if(ind === (passedIndex)){
        //Get reference to prevNode and remove ref to that node from victim node
        const prevNode = currentNode.previous
        currentNode.previous = null

        //Get reference to nextNode
        const nextNode = currentNode.next
        currentNode.next = null

        prevNode.next = nextNode
        nextNode.previous = prevNode

        this.length--
      } else   if(ind<index){
        currentNode = currentNode.next
      }
      ind++
    }
    
    return this.printList()
  }

  
  printList(){
    let array = []
    let  currentNode = this.head
    while(currentNode !== null){
      array.push(currentNode.value)
      currentNode = currentNode.next
     }
    console.log(array)
  }


}

class Node{
  constructor(value){
    this.value = value
    this.next = null
    this.previous = null
  }
}
let myDoublyLinkedList = new DoublyLinkedList(10)
myDoublyLinkedList.printList()
myDoublyLinkedList.append(5)
myDoublyLinkedList.append(16)
myDoublyLinkedList.prepend(50)
myDoublyLinkedList.insert(2,90)
myDoublyLinkedList.removeAt(2)
myDoublyLinkedList.removeAt(3)
myDoublyLinkedList.removeAt(0)
