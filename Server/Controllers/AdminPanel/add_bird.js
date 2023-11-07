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
      beakShape,
      footShape,
    } = req.body;
    size = { value: size, img: `${process.env.Image_URL}/size/${size}` };
    const newBirdModel = new BirdModel({
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
    });
    await newBirdModel.save();
    res.status(200).json({ message: "bird data updated successfully" });
  } catch (error) {
    res.status(500).json({ errror: "oops something went wrong" });
  }
};

module.exports = addBird;
