const BirdModel = require("../../Models/bird_data");
const mongoose = require("mongoose");
const deleteBird = async (req, res) => {
  try {
    const { id } = req.body;
    const _id = new mongoose.Types.ObjectId(id);
    const deleteResult = await BirdModel.deleteOne({ _id });
    console.log(deleteResult);
    res.status(200).json({ message: "bird deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "oops something went wrong" });
  }
};

module.exports = deleteBird;
