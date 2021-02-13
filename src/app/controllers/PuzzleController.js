import Puzzle from '../models/Puzzle';
//const Puzzles = require('../models/Puzzles');

import scrape from '../utils/scrappers';

class PuzzleController {
    async store(req, res) {
        const content = await scrape();

        const response = [];
        await content.forEach(async c => {
            const puzzle = new Puzzle(c);
            await puzzle.save();
            response.push(puzzle);
        });

        return res.json(response);
    }
}

export default new PuzzleController();