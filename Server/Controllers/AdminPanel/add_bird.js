const BirdModel = require("../../Models/bird_data");
const addBird = async (req, res) => {
  try {
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
      birdKey,
    } = req.body;
    const sizeImage = size.replace(/[+-]/g, "");
    size = {
      value: size,
      img: `${process.env.Image_URL}/size/${sizeImage}.png`,
    };
    beakShape = {
      value: req.body["beakShape.value"],
      img: req.body["beakShape.img"],
    };
    footShape = {
      value: req.body["footShape.value"],
      img: req.body["footShape.img"],
    };
    const newBirdModel = new BirdModel({
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
    await newBirdModel.save();
    res.status(200).json({ message: "bird data updated successfully" });
  } catch (error) {
    res.status(500).json({ errror: "oops something went wrong" });
  }
};

module.exports = addBird;
