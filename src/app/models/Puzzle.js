import mongoose from 'mongoose';

const PuzzleSchema = new mongoose.Schema({
    question: String,
    answer: String,
});

export default mongoose.model('Puzzles', PuzzleSchema);