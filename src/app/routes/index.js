const TreeController = require('../controllers/TreeController');
const express = require('express');
const router = express.Router();

router.post('/bfs', (req, res, next) => {
    try {
        const nodesVisited = new TreeController().treeBfs(req.body);
        res.send({ data: nodesVisited});
    } catch (e) {
        next(e);
    }
});

router.post('/search-node', (req, res, next) => {
    try {
        const node = new TreeController().searchNode(req.query.id, req.body);
        res.send({ data: node[0]});
    } catch (e) {
        next(e);
    }
});

router.post('/delete-node', (req, res, next) => {
    try {
        new TreeController().deleteNode(req.query.id, req.body)
        res.send({ data: true});
    } catch (e) {
        next(e);
    }
});


module.exports = router;
