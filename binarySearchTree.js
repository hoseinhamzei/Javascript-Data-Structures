class BST{
    constructor(){
        this.root = null;
    }

    // insert in tree
    insert(val){
        let newNode = new Node(val);
        if(!this.root){
            this.root = newNode;
        }else{
            let temp = this.root;
            let loop = true;

            while(temp && loop){
                if(val > temp.val){
                    if(temp.right){
                        temp = temp.right;
                    }else{
                        temp.right = newNode;
                        loop = false;
                    }
                }else if(val < temp.val){
                    if(temp.left){
                        temp = temp.left;
                    }else{
                        temp.left = newNode;
                        loop = false;
                    }
                }else{
                    return undefined;
                }
            }

        }
    }

    // find if the tree has a node
    contains(val){
        if(!this.root){
            return false;
        }else{
            let temp = this.root;

            while(temp){
                if(val > temp.val){
                    if(temp.right){
                        temp = temp.right;
                    }else{
                        return false;
                    }
                }else if(val < temp.val){
                    if(temp.left){
                        temp = temp.left;
                    }else{
                        return false;
                    }
                }else if(val === temp.val){
                    return true;
                }
            }

        }
    }

    // traverse
    traverse(){
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

    // remove node from the tree
    remove(val) {
        let currentNode, parentNode, nextBiggestParentNode=null, found=false, base=[this.root];
        while(base.length > 0 && !found) {
          currentNode = base.pop();
          if(currentNode.val === val) {
            found=true;
            if(!currentNode.left && !currentNode.right) {
              parentNode.right === currentNode ? parentNode.right = null : parentNode.left = null;
            }
            else if(!currentNode.right && currentNode.left) {
              parentNode.right === currentNode ? parentNode.right = currentNode.left : parentNode.left = currentNode.left;
            }
            else if(!currentNode.left && currentNode.right) {
              parentNode.right === currentNode ? parentNode.right = currentNode.right : parentNode.left = currentNode.right;
            }
            else {
              let _traverse = node => {
                if (node.right) {
                  nextBiggestParentNode = node;
                  _traverse(node.right);
                }
                else {
                  currentNode.val = node.val;
                  nextBiggestParentNode ? nextBiggestParentNode.right = null : currentNode.left = null;
                }
              }
              _traverse(currentNode.left);
            }
          }
          else {
            parentNode = currentNode;
            val > currentNode.val && currentNode.right ? base.unshift(currentNode.right) : base.unshift(currentNode.left);
          }
        }
        return this;
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
let bst = new BST();
bst.insert(10);
bst.insert(15);
bst.insert(7);
bst.insert(99);
bst.insert(9);
bst.insert(7.2);

console.log(bst.traverse());