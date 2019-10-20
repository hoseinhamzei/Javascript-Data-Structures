class Graph{
    constructor(){
        this.adjacencyList = {};
    }

    ////
    addVertex(vertex){
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }
    ////
    addEdge(vertex1, vertex2, weight){
        let list = this.adjacencyList;
        if(list[vertex1] && list[vertex2]){
            list[vertex1].push({node:vertex2, weight:weight});
            list[vertex2].push({node:vertex1, weight:weight});
        }
    }
    ////
    removeEdge(vertex1, vertex2){
        let list = this.adjacencyList;

        if(list[vertex1] && list[vertex2]){
            list[vertex1] = list[vertex1].filter(i=>{
                return i.node !== vertex2;
            });

             list[vertex2] = list[vertex2].filter(i=>{
                return i.node !== vertex1;
            });
        }
    }
    ////
    removeVertex(vertex){
       let list = this.adjacencyList;

       if(list[vertex]){
        const temp = list[vertex];
        delete list[vertex];
        
        for(let key in list){
            list[key] = list[key].filter(i=>{
                return i.node !== vertex;
            });
        }

        return temp;
       }
    }
    ////
    hasVertex(vertex){
        if(this.adjacencyList[vertex]){
            return true;
        }else{
            return false;
        }
    }
    ////
    updateVertex(vertex, newVertex){

        let list = this.adjacencyList;

        if(list[vertex]){
            list[newVertex] = list[vertex];
            delete list[vertex];

            for(let key in list){
                for(let n of list[key]){
                    if(n.node === vertex){
                        n.node = newVertex;
                    }
                }
            }

            return list[newVertex];

        }else{
            return false;
        }
    }
    ////
    getVertexes(){
        return this.adjacencyList;
    }
    ////
    depthFirstSearch(start){
        const result = [];
        const visited = {};
        const adjacencyList = this.adjacencyList;

        (function dfs(vertex){
            if(!vertex) return null;
            visited[vertex] = true;
            result.push(vertex);
            adjacencyList[vertex].forEach(neighbor => {
                if(!visited[neighbor]){
                    return dfs(neighbor)
                }
            });
        })(start);

        return result;
    }
    ////
    breadthFirstSearch(start){
        const queue = [start];
        const result = [];
        const visited = {};
        let currentVertex;
        visited[start] = true;

        while(queue.length){
            currentVertex = queue.shift();
            result.push(currentVertex);
           

            this.adjacencyList[currentVertex].forEach(neighbor => {
                if(!visited[neighbor]){
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            });
        }
        return result;
    }
}



let g = new Graph();
g.addVertex('kerman');
g.addVertex('baft');
g.addEdge('kerman','baft','250');
g.addVertex('yazd');
g.addEdge('baft','yazd','400');
g.addEdge('kerman','yazd','200');
g.removeEdge('kerman','baft')

console.log(g.getVertexes());