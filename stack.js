class Stack{
    constructor(){
        this.size = 0;
        this.first = null;
        this.last = null;
    }

    // push to stack
    push(val){
        let newNode = new Node(val);
        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        }else{
            newNode.next = this.first;
            this.first = newNode;
        }
        this.size++;
        return this.size;
    }

    // remove last item added
    pop(){
        if(!this.first) return null;
        var temp = this.first;
        if(this.first === this.last){
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return temp.val;
    }

    // convert list to array
    toArray(){
        let curr = this.first;
        let arr = []
        while(curr){
            arr.push(curr.val);
            curr = curr.next;
        }
        return arr;
    }

}

/////

class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}


let stack = new Stack();

stack.push('do job');
stack.push('rest');
stack.push('fuck wife');
stack.push('sleep');
stack.pop();

console.log(stack.toArray());