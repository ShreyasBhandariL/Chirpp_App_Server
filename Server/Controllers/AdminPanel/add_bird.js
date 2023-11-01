const BirdModel = require("../../Models/bird_data");
const addBird = async (req, res) => {
  const {
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
  try {
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
    console.log("Data Inserted Successfully");
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = addBird;
