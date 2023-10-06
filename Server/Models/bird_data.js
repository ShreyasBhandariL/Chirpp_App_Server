const mongoose = require("mongoose");

const birdSchema = new mongoose.Schema({
  name: { type: String, required: true },
  size: { type: String, required: true },
  majorColor: { type: String, required: true },
  minorColor: { type: String, required: true },
  beakShape: { type: String, required: true },
  footShape: { type: String, required: true },
});

module.exports = mongoose.model("birds", birdSchema);
