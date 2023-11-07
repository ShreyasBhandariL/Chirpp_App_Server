const mongoose = require("mongoose");
const BirdModel = require("../../Models/bird_data");
const editBird = async (req, res) => {
  try {
    const { _id } = new mongoose.Types.ObjectId(req.params.id);
    let {
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
    } = req.body;
    size = { value: size, img: `${process.env.Image_URL}/size/${size}.png` };
    const updatedResult = await BirdModel.updateOne(
      { _id },
      {
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
      }
    );
    if (updatedResult.acknowledged) {
      res.status(200).json({ message: "bird data updated successfully" });
    } else {
      res.status(400).json({ error: "failed to updated the bird data" });
    }
  } catch (error) {
    res.status(500).json({ error: "oops something went wrong" });
  }
};

module.exports = editBird;
