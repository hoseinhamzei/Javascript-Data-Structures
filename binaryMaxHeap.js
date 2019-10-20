class BinaryMaxHeap{
    constructor(){
        this.values = [];
    }
    
    insert(val){
        this.values.push(val);
        this.bubbleUp();
    }

    /////

    extractMax(){
       if(this.values.length > 0){
       this.swap(0,this.values.length-1);

       const extracted = this.values.pop();
       this.bubbleDown();
       return extracted;

    }else{
        this.values = [];
    }
    }


    /////

    bubbleUp(){
        let index = this.values.length - 1;
        
        while(index > 0){
            let parentIndex = Math.floor((index-1)/2);
            if(this.values[parentIndex] < this.values[index]){
                this.swap(parentIndex, index);
                index = parentIndex;
            }else{
                return this.values;
            }
        }
    }

    ////

    bubbleDown(){
       let parentIdx = 0;

       while(true){
       const element = this.values[parentIdx];

       const leftIdx = parentIdx * 2 + 1;
       const rightIdx = parentIdx * 2 + 2;

       const leftEl = this.values[leftIdx];
       const rightEl = this.values[rightIdx];

       if(leftEl > element && leftEl > rightEl){
           this.swap(leftIdx, parentIdx);
           parentIdx = leftIdx;
       }else if(rightEl > element && rightEl > leftEl){
           this.swap(rightIdx, parentIdx);
           parentIdx = rightIdx;
       }else{
           break;
       }
    }

}

    ////

    swap(idx1,idx2){
        const temp = this.values[idx1];
        this.values[idx1] = this.values[idx2];
        this.values[idx2] = temp;
    }


    
}



let heap = new BinaryMaxHeap();

heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);
heap.insert(53);
heap.extractMax();






console.log(heap.values);