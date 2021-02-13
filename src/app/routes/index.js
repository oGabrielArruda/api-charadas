import express from 'express';

import PuzzleController from '../controllers/PuzzleController';

const routes = express.Router();

routes.post('/puzzle', PuzzleController.store);
routes.get('/puzzle', PuzzleController.index);

export default routes;