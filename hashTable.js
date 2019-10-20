class HashTable{
    constructor(size){
        this.keyMap = new Array(size);
    }

    ////

    hash(key){
        let total = 0;
        const prime = 31;
        for(let i = 0; i < Math.min(key.length, 100); i++){
            let char = key[i];
            let value = char.charCodeAt(0) - 96;
            total = (total * prime + value) % this.keyMap.length;
        }
        return total;
    }

    ////
    set(key, value){
        const hash = this.hash(key);
        if(this.keyMap[hash]){
            this.keyMap[hash].push([key, value]);
        }else{
            this.keyMap[hash] = [[key, value]];
        }
        return hash +' : '+ this.keyMap[hash];
    }


    ////
    get(key){
        const hash = this.hash(key);   
        if(this.keyMap[hash]){
            for(let pair of this.keyMap[hash]){
                if(pair[0] === key){
                    return pair[1];
                }
            }
        }
    }


    ////
    // return keys in an array
    keys(){
        let keys = [];
        for(let arr of this.keyMap){
            if(arr){
                arr.forEach(i=>{
                    keys.push(i[0]);
                })
            }
        }
        return keys;
    }

    ////
    // return values in an array
    values(){
        let keys = [];
        for(let arr of this.keyMap){
            if(arr){
                arr.forEach(i=>{
                    keys.push(i[1]);
                })
            }
        }
        return keys;
    }

    ////
    // delete a pair by key
    delete(key){
            const hash = this.hash(key);   
            if(this.keyMap[hash]){
                for(let pair of this.keyMap[hash]){
                    if(pair[0] === key){
                        this.keyMap[hash].splice(this.keyMap[hash].indexOf(pair),1);
                        return pair;
                    }
                }
            }
    }
    ////
    // update key
    updateKey(key, newKey){
        const hash = this.hash(key);   
        if(this.keyMap[hash]){
            for(let pair of this.keyMap[hash]){
                if(pair[0] === key){
                    pair[0] = newKey;
                }
            }
        }
    }
    ////
    // update value
    updateValue(key, newValue){
        const hash = this.hash(key);   
        if(this.keyMap[hash]){
            for(let pair of this.keyMap[hash]){
                if(pair[0] === key){
                    pair[1] = newValue;
                }
            }
        }
    }

    
}


let ht = new HashTable(10);
ht.set('pink','#hhh');
ht.set('blue','ggg');
ht.set('red','ddd');
ht.set('cyan','bcs');
ht.set('purple','dsd');
ht.set('salmon','sss');
ht.updateValue('pink', 'fdfdfdfdfdfdfaf');

console.log(ht.values());


