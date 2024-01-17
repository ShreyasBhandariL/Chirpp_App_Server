const NotificationModel = require("../../Models/add_bird_notification");
const BirdModel = require("../../Models/bird_data");
const mongoose = require("mongoose");
const approveNotification = async (req, res) => {
  try {
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
      isEdited,
      birdId,
      birdKey,
    } = req.body;
    _id = new mongoose.Types.ObjectId(_id);
    await NotificationModel.deleteOne({
      _id,
    });
    if (isEdited) {
      birdId = new mongoose.Types.ObjectId(birdId);
      const findBird = await BirdModel.findOne({ _id: birdId });
      await BirdModel.updateOne(
        { _id: birdId },
        {
          $set: {
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
          },
        }
      );
      res.status(200).json({ message: "bird updated successfully" });
    } else {
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
    }
  } catch (error) {
    res.status(500).json({ error: "oops something went wrong!" });
  }
};

module.exports = approveNotification;
