const BirdModel = require("../../Models/bird_data");
const mongoose = require("mongoose");
const getBirdEdit = async (req, res) => {
  try {
    const { id } = req.query;
    const _id = new mongoose.Types.ObjectId(id);
    const [birdEditInfo] = await BirdModel.find({ _id });
    if (!birdEditInfo) {
      return res.status(404).json({ error: "bird not found" });
    }
    res.status(200).json({ birdEditInfo });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "oops something went wrong" });
  }
};

module.exports = getBirdEdit;
