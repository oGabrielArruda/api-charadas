import Puzzle from '../models/Puzzle';
//const Puzzles = require('../models/Puzzles');

class PuzzleController {
    async store(req, res) {
        const puzzle = new Puzzle(req.body);
        await puzzle.save();
        return res.json(puzzle);
    }
}

export default new PuzzleController();