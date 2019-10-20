class Graph{
    constructor(){
        this.adjacencyList = {};
    }

    ////
    addVertex(vertex){
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }
    ////
    addEdge(vertex1, vertex2){
        let list = this.adjacencyList;
        if(list[vertex1] && list[vertex2]){
            list[vertex1].push(vertex2);
            list[vertex2].push(vertex1);
        }
    }
    ////
    removeEdge(vertex1, vertex2){
        let list = this.adjacencyList;
        if(list[vertex1] && list[vertex2]){
            list[vertex1].splice(list[vertex1].indexOf(vertex2),1);
            list[vertex2].splice(list[vertex2].indexOf(vertex1),1);
        }
    }
    ////
    removeVertex(vertex){
       let list = this.adjacencyList;

       if(list[vertex]){
        const temp = list[vertex];
        delete list[vertex];
        
        for(let key in list){
            if(list[key].includes(vertex)){
                list[key].splice(list[key].indexOf(vertex),1);
            }
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
                if(list[key].includes(vertex)){
                    list[key].splice(list[key].indexOf(vertex),1);
                    list[key].push(newVertex);
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
g.addVertex('kitty');
g.addVertex('bobo');
g.addEdge('bobo','kitty');
g.addVertex('nini');
g.addEdge('kitty','nini');
g.addEdge('bobo','nini');
g.updateVertex('kitty','kitten')

console.log(g.getVertexes());