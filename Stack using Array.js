
class Stack {
  constructor(){
    this.array = []
  }
  
  peek() {
    if(this.array.length !== 0){
      //return the last element of array
      console.log(this.array[this.array.length - 1])
    }
  }

  lookup(value) {
    if(value !== ""){
      for(let i = 0;i<this.array.length;i++){
        if(this.array[i] === value){
          return true
        }
      }
    }else {
      console.log("Cannot pass empty value to push")
      }
      return false
  }
  
  push(value){
    console.log("Pushing \""+ value +"\" to stack")
    if(value !== null){
      this.array.push(value)
      return console.log(this.array)
    }else {
      console.log("Cannot pass empty value to push")
      return
      }
  }
  pop(){
    if(this.array.length !== 0){
    console.log("Popping from stack")
    const deletedElement = this.array.pop()
    this.printStack()
    }
    else console.log("Stack empty")
  }
  printStack(){
      return console.log(this.array)
  }
}

const myStack = new Stack();
myStack.push("Pinterest");
myStack.push("Robinhood");
myStack.push("SunLife");
console.log(myStack.lookup(""));
myStack.peek();
myStack.pop()
myStack.pop()