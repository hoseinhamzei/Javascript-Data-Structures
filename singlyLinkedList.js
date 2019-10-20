class LinkedList{
    constructor(){
         this.head = null;
         this.length = 0;
         this.tail = null;
    }

    // push to list
    push(value){
        const newNode = new Node(value);
        if(!this.head){
            this.tail = newNode;
            this.head = newNode;
        }else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length += 1;
    }

    // remove last item
    pop(){
        if(!this.head) return undefined;
        let pre = this.head;
        let temp = pre;
        while(pre.next){
                temp = pre;
                pre = pre.next;
        }
        this.tail = temp;
        this.tail.next = null;
        this.length -= 1;
        if(this.length === 0){
            this.empty();
        }
        return pre;
    }

    // remove first item
    shift(){
        if(!this.head) return undefined;
        this.head = this.head.next;
        this.length -= 1;
        if(this.length === 0){
            this.tail = null;
        }
        return this.head;
    }

    // add first item
    unshift(val){
        let newNode = new Node(val);
        if(!this.head){
            this.tail = newNode;
            this.head = newNode;
        }else{
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length += 1;
    }

    // empty list
    empty(){
        this.head = null;
        this.tail = null;
    }

    // convert list to array
    toArray(){
        let curr = this.head;
        let arr = []
        while(curr){
            arr.push(curr.val);
            curr = curr.next;
        }
        return arr;
    }

    // get node by position
    getNode(pos){
        let curr = this.head;

        for(let i = 0; i < this.length; i++){
            if(i === pos){
                return curr;
            }
            curr = curr.next;
        }
        return undefined;
        
    }

    // set node by position
    setNode(pos, val){
        let curr = this.head;

        for(let i = 0; i < this.length; i++){
            if(i === pos){
                curr.val = val;
            }else{
                curr = curr.next;
            }
        }
        return undefined;
    }

    // insert node in list
    insert(pos, val){

        if(pos > this.length || pos < 0) return false;

        if(pos === this.length){
            this.push(val);
        }else if(pos === 0){
            this.unshift(val);
        }else{
            let selectedNode = this.getNode(pos-1);
            let oldNext = selectedNode.next;
            let newNode = new Node(val);
            selectedNode.next = newNode;
            newNode.next = oldNext;
            this.length += 1;
        }

        return true;

    }

    // remove by position
    remove(pos){
        if(pos >= this.length || pos < 0) return false;

        if(pos === this.length-1){
            this.pop();
        }else if(pos === 0){
            this.shift();
        }else{
            let prevNode = this.getNode(pos-1);
            let selectedNode = prevNode.next;
            prevNode.next = selectedNode.next;

            this.length -= 1;
        }

        return true;
    }

    // reverse the linked list
    reverse(){
        let node = this.head;
        this.head = this.tail;
        this.tail = node;

        let next = null;
        let prev = null;
        
        for(let i = 0; i < this.length; i++){
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }    

    }
}

//////////

class Node{
    constructor(val){
         this.val = val;
         this.next = null;
    }
}

let myList = new LinkedList();
myList.push('hell');
myList.push('o');
myList.push('brother');
myList.pop();
myList.push(886);
myList.shift();
myList.unshift('hey there');
myList.insert(1,'mimi');
myList.remove(2);
myList.reverse();





console.log(myList.toArray());