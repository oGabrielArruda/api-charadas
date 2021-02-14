const mongoose = require('mongoose');

const PuzzleSchema = new mongoose.Schema({
    question: String,
    answer: String,
    lang: String,
});

module.exports = mongoose.model('Puzzles', PuzzleSchema);