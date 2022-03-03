const mongoose = require('mongoose');

const mainSchema = new mongoose.Schema({
  title: { type: String, required: true, unique: true},
  image: { type: String },
  nutriment: { type: Object },
  ingredient: { type: Array, required: true},
  recipe: { type: Array },
  ingredientKey: { type: String, required: true},
  type: { type: String }
}, { versionKey: false});

module.exports = mongoose.model("Main", mainSchema);