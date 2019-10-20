class BinaryTree{
    constructor(){
        this.root = null;
    }

    // insert in tree
    insert(val, pos, side){
        let newNode = new Node(val);
        if(!this.root){
            this.root = newNode;
        }else{
            let q = [];
            q.push(this.root);
            while(q.length > 0){

                
                temp = q.shift();
                
                if(temp)

                if(temp.left){
                    q.push(temp.left);
                }
                if(temp.right){
                    q.push(temp.right);
                }
            }

        }
    }

    // convert tree to array
    toArray(){
        if(!this.root){
            return [];
        }else{
            let q = [];
            q.push(this.root);
            let list = [];
            while(q.length > 0){

                
                let temp = q.shift();
                list.push(temp.val);

                if(temp.left){
                    q.push(temp.left);
                }
                if(temp.right){
                    q.push(temp.right);
                }
            }

            return list;


        }
    }

    // find if the tree has a node
    contains(val){
        if(!this.root){
            return false;
        }else{
            let q = [];
            q.push(this.root);
            let list = [];
            while(q.length > 0){

                
                let temp = q.shift();
                list.push(temp.val);

                if(temp.left){
                    q.push(temp.left);
                }
                if(temp.right){
                    q.push(temp.right);
                }
            }

            return list.includes(val);


        }
    }

    // remove node from the tree
    remove(val) {
       
      }

}


///////

class Node{
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

////////
let bt = new BinaryTree();
bt.root = new Node(1);
bt.root.left = new Node(3);
bt.root.right = new Node(2);
bt.root.right.right = new Node(5);

console.log(bt.toArray());

