const mongoose = require("mongoose");

const birdSchema = new mongoose.Schema({
  name: { type: String, required: true },
  size: { type: Object, required: true },
  majorColor: { type: String, required: true },
  minorColor: { type: String, required: true },
  beakShape: { type: Object, required: true },
  footShape: { type: Object, required: true },
});

module.exports = mongoose.model("birds", birdSchema);
