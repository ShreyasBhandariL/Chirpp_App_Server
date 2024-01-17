const NotificationModel = require("../../Models/add_bird_notification");
const BirdModel = require("../../Models/bird_data");
const mongoose = require("mongoose");
async function approveAddBird(req, res) {
  let {
    _id,
    commonName,
    scientificName,
    kannadaName,
    identification,
    breedingSeason,
    diet,
    imageSrc,
    size,
    majorColor,
    minorColor,
    beakShape,
    footShape,
    birdKey,
  } = req.body;
  _id = new mongoose.Types.ObjectId(_id);
  try {
    await NotificationModel.deleteOne({
      _id,
    });
    const newBird = new BirdModel({
      commonName,
      scientificName,
      kannadaName,
      identification,
      breedingSeason,
      diet,
      imageSrc,
      size: size,
      majorColor,
      minorColor,
      beakShape,
      footShape,
      birdKey,
    });
    await newBird.save();
    res.status(200).json({ message: "bird added successfully" });
  } catch (error) {
    res.status(500).json({ error: "oops something went wrong!" });
  }
}

module.exports = approveAddBird;
