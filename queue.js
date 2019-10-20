module.exports = class Queue{
    constructor(){
        this.size = 0;
        this.first = null;
        this.last = null;
    }

    // push to stack
    enqueue(val){
        let newNode = new Node(val);
        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        }else{
            this.last.next = newNode;
            this.last = newNode;
        }
        this.size++;
        return this.size;
    }

    // remove last item added
    dequeue(){
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


let q = new Queue();

q.enqueue('do job');
q.enqueue('rest');
q.enqueue('fuck wife');
q.enqueue('sleep');
q.dequeue();
q.enqueue('in');
q.dequeue();

console.log(q.toArray());

