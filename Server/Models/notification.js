const mongoose = require("mongoose");

const birdSchema = new mongoose.Schema({
  adminName: { type: String, required: true },
  date: { type: String, required: true },
  time: { type: String, required: true },
  commonName: { type: String, required: true },
  scientificName: { type: String, required: true },
  kannadaName: { type: String, required: true },
  identification: { type: String, required: true },
  breedingSeason: { type: String },
  diet: { type: String },
  imageSrc: { type: String, required: true },
  size: { type: Object, required: true },
  majorColor: { type: String, required: true },
  minorColor: { type: String, required: true },
  beakShape: { type: Object, required: true },
  footShape: { type: Object, required: true },
});

module.exports = mongoose.model("notifications", birdSchema);
