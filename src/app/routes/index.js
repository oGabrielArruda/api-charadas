const express = require('express');

const PuzzleController = require('../controllers/PuzzleController');

const routes = express.Router();

routes.post('/puzzle', PuzzleController.store);
routes.get('/puzzle', PuzzleController.index);

module.exports = routes;