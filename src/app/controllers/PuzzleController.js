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

    async index(req, res) {
        const TOTAL_ITEMS = 3992;
        const random = Math.floor(Math.random() * TOTAL_ITEMS);
        const item = await Puzzle.findOne().skip(random);
        
        return res.json(item);
    }
}

export default new PuzzleController();