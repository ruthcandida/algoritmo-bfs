
const _ = require('lodash');

class ArvoreRepository {
    
    static filterNodes(nodeIndex, grafo) {
        return grafo.nodes.filter((node) => {
            return node.id == nodeIndex;
        })
    }

    treeBfs(start, grafo) {
        try {
            const nodesVisited = [];
            const listToExplore = [ start ];
        
            let nodeStart = ArvoreRepository.filterNodes(start, grafo)[0];
            nodeStart.selected = true;
            nodesVisited.push(nodeStart.id);    
        
            while ( listToExplore.length > 0 ) {
                const nodeIndex = listToExplore.shift();
                const proxNode = ArvoreRepository.filterNodes(nodeIndex, grafo);
                
                // Em cada nó existe uma propriedade port, dentro de port existe outra propriedade chamada links
                // esta representa a aresta associada a porta em questão
                proxNode[0].ports.forEach( ( childIndex ) => {
                    const link =  grafo.links.filter((link) => {
                        const array = childIndex.links.map(link => link);
                        return array.includes(link.id);
                    })[0];
        
                    // link.sorce - Nó entrada
                    // link.target - Nó de saída target
                    const filterNo = ArvoreRepository.filterNodes(link.target, grafo)
                    if ( filterNo && !filterNo[0].selected ) {
                        nodesVisited.push(filterNo[0].id)
                        filterNo[0].selected = true;
                        listToExplore.push( link.target );
                    }
                });
            }
    
            return nodesVisited;
        } catch (err) {
            throw err;
        }

    };

    searchNode(idNode, grafo) {
        try {
            return grafo.nodes.filter(node => node.id == idNode);
        } catch (err) {
            throw err;
        }
    }

    deleteNode(idNode, grafo) {
        try {
             _.remove(grafo.nodes, (node) => {
                return node.id = idNode;
            });
        } catch (err) {
            throw err;
        }
    }

}
     

module.exports = ArvoreRepository;