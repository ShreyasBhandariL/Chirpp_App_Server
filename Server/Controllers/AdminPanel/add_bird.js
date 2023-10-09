const BirdModel = require("../../Models/bird_data");
const addBird = async (req, res) => {
  const { name, size, majorColor, minorColor, beakShape, footShape } = req.body;
  try {
    const newBirdModel = new BirdModel({
      name,
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
