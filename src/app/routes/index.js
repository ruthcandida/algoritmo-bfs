const TreeController = require('../controllers/TreeController');
const express = require('express');
const router = express.Router();

/**
 * @api {post} /bfs Processar árvore BFS
 * @apiDescription fetch all messages with past scheduling and send.
 * @apiVersion 1.0.0
 * @apiName Get by data and send message
 * @apiGroup BFS
 *
 * @apiHeader (header) {String} Athorization           Customer ID and customer secret. ex: client1:secret1 encoded for base64 is Y2xpZW50MTpzZWNyZXQx, then the value will be: 'Basic Y2xpZW50MTpzZWNyZXQx'.
 *
 * @apiSuccess {Object} result                         Processing result.
 * @apiSuccess {Number} result.schedules               Amount of processed schedules.
 * @apiSuccess {Number} result.retrievedFromQueue      Quantity of request retrieved from the fault queue.
 *
 * @apiError (Error) status    HTTP status code.
 * @apiError (Error) code      Vitta status code.
 * @apiError (Error) message   Friendly error description.
 * @apiError (Error) detail    Technical error description.
 */
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