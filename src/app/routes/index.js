import express from 'express';

import PuzzleController from '../controllers/PuzzleController';

const routes = express.Router();

routes.post('/puzzle', PuzzleController.store);

export default routes;