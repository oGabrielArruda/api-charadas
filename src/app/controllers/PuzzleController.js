const Puzzle = require('../models/Puzzle');

const scrape = require('../utils/scrappers');
const consts = require('../utils/consts');

class PuzzleController {
    async index(req, res) {
        const { lang } = req.query;

        if (!lang) {
            return res.status(400).json({ error: 'Language required' });
        }
        
        const random = Math.floor(Math.random() * consts.TOTAL_ITEMS);
        const response = await Puzzle.findOne({ lang }).skip(random);

        if (!response) {
            return res.status(404).json({ error: 'Puzzle with this language was not found' });
        }
        
        return res.json(response);
    }

    async store(req, res) {
        const content = await scrape();

        let response = [];
        await content.forEach(async c => {
            const puzzle = new Puzzle(c);
            response.push(puzzle);
            await puzzle.save();
        });

        return res.json(response);
    }

    async remove(req, res) {
        const { id } = req.params;

        if (!id) {        
            await Puzzle.deleteMany();
        } else {
            let puzzleExists;

            try {
                puzzleExists = await Puzzle.findById(id);
                console.log(puzzleExists);
            } catch(err) {
                return res.status(400).json({ error: 'Invalid ID' });
            }

            if (!puzzleExists) {
                return res.status(404).json({ error: 'Puzzle was not found' });
            }

            await puzzleExists.remove();
        }

        return res.json({ message: "Successfully removed" });
    }
}

module.exports = new PuzzleController();