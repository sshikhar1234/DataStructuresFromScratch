class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null
    };
    this.tail = this.head
    this.length = 1
  }
  
  append(value) {
    const  newNode = new Node(value)
    this.tail.next = newNode
    this.tail = newNode
    this.length++
    return this
  }

  prepend(value){
    const  newNode = new Node(value)
    newNode.next = this.head
    this.head = newNode
    this.length++
    return this
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
    while(ind<=index){
      if(ind === index-1){
        newNode.next = currentNode.next
        currentNode.next = newNode
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
      this.head = currentNode.next
        this.length--
        return this.printList()
    } else if(passedIndex > this.length){
      console.log("Invalid index passed")
      return
    }

    while(ind <= passedIndex && passedIndex > 0){
      if(ind === (passedIndex - 1)){
        const unWantedNod = currentNode.next
        currentNode.next = unWantedNod.next
        this.length--
      } else   if(ind<index){
        currentNode = currentNode.next
      }´
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
  }
}

let myLinkedList = new LinkedList(10)
myLinkedList.append(5)
myLinkedList.append(16)´
myLinkedList.printList()
myLinkedList.insert(2,90)
myLinkedList.removeAt(2)
myLinkedList.removeAt(6)
myLinkedList.removeAt(0)
