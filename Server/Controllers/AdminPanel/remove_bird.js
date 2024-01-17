const BirdModel = require("../../Models/bird_data");
const mongoose = require("mongoose");
const removeBird = async (req, res) => {
  try {
    let { id } = req.body;
    id = new mongoose.Types.ObjectId(id);
    await BirdModel.deleteOne({ _id: id });
    res.status(200).json({ message: "bird deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "oops something went wrong" });
  }
};

module.exports = removeBird;
