const express = require('express');

const authMiddleware = require('../middlewares/auth');

const PuzzleController = require('../controllers/PuzzleController');

const routes = express.Router();

routes.get('/puzzle', PuzzleController.index);

routes.use(authMiddleware);
routes.post('/puzzle', PuzzleController.store);
routes.delete('/puzzle/:id?', PuzzleController.remove);

module.exports = routes;