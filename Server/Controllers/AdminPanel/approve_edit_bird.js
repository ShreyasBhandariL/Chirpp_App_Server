const NotificationModel = require("../../Models/add_bird_notification");
const BirdModel = require("../../Models/bird_data");
const mongoose = require("mongoose");
async function approveEditBird(req, res) {
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
    birdId,
  } = req.body;
  _id = new mongoose.Types.ObjectId(_id);
  birdId = new mongoose.Types.ObjectId(birdId);
  if (typeof size === "string") {
    const sizeImage = size.replace(/[+-]/g, "");
    size = {
      value: size,
      img: `${process.env.Image_URL}/size/${sizeImage}.png`,
    };
  }
  try {
    await NotificationModel.deleteOne({ _id });
    await BirdModel.deleteOne({ _id: birdId });
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
    res.status(200).json({ message: "approved successfully" });
  } catch (error) {
    res.status(500).json({ error: "oops something went wrong!" });
  }
}

module.exports = approveEditBird;
