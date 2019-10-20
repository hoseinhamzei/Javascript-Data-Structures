class DoublyLinkedList{
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
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length += 1;
    }

    // remove last item
    pop(){
        if(!this.head) return undefined;
        let prev = this.tail;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        }else{
            this.tail = prev.prev;
            this.tail.next = null;
            prev.prev = null;
        }
        this.length -= 1; 
    }

    // remove first item
    shift(){
        if(!this.head) return undefined;
        let oldHead = this.head;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        }else{
            this.head = oldHead.next;
            this.head.prev = null;
            oldHead.next = null;
        }
        this.length -= 1;
        return oldHead;
    }

    // add first item
    unshift(val){
        let newNode = new Node(val);
        if(!this.head){
            this.tail = newNode;
            this.head = newNode;
        }else{
            this.head.prev = newNode;
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

    // insert into linked list
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
            newNode.prev = selectedNode;
            selectedNode.prev = newNode;
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
            let removedNode = this.getNode(pos);
            removedNode.prev.next = removedNode.next;
            removedNode.next.prev = removedNode.prev;
            removedNode.next = null;
            removedNode.prev = null;
            this.length -= 1;
        }
        

        return true;
    }

    //convert to array
    toArray(){
        let curr = this.head;
        let arr = []
        while(curr){
            arr.push(curr.val);
            curr = curr.next;
        }
        return arr;
    }


}



// node class
class Node{
    constructor(val){
        this.prev = null;
        this.next = null;
        this.val = val;
    }
}

////
let dList = new DoublyLinkedList();
dList.push('ali');
dList.push('martin');
dList.push('jon');
dList.push('eric');
dList.push('yani');
dList.push('rook');
dList.pop();
dList.shift();
dList.unshift('bob');
dList.setNode(1,'hope');
dList.remove(2);

console.log(dList.toArray());
