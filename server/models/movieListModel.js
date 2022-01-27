const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieList = new Schema({
  title: {type: String, required: true},
  releasedate: {type: String},
});

module.exports = mongoose.model('MovieList', movieList);