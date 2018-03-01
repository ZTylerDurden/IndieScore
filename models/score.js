const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ScoreSchema = Schema({
  band: String,
  song: String,
  link: String,
  tag: [String]
});

const Score = mongoose.model('Score', ScoreSchema);

module.exports = Score;