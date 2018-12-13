const TreeRepository = require('../repository/TreeRepository')

class TreeController {
    treeBfs(grafo) {
        try {
            const nodeStart = grafo.nodes.map((node) => { 
                if(node.type == 'start') return node.id;
            })[0];

            const treeRepository = new TreeRepository();
            return treeRepository.treeBfs(nodeStart, grafo);
        } catch(err) {
            throw err;
        }
    }

    searchNode(idNode, grafo) {
        try {
            const treeRepository = new TreeRepository();
            return treeRepository.searchNode(idNode, grafo)
        } catch (err) {
            throw err;
        }
    }

    deleteNode(idNode, grafo) {
        try {
            const treeRepository = new TreeRepository();
            return treeRepository.deleteNode(idNode, grafo)
        } catch (err) {
            throw err;
        }
    }
}

module.exports = TreeController;