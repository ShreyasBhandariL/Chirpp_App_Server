const BirdModel = require("../../Models/bird_data");
const NotificationModel = require("../../Models/add_bird_notification");
const mongoose = require("mongoose");
const getBirdEdit = async (req, res) => {
  try {
    const { id, preview } = req.query;
    const _id = new mongoose.Types.ObjectId(id);
    if (Number(preview)) {
      const [birdEditInfo] = await NotificationModel.find({ _id });
      if (!birdEditInfo) {
        return res.status(404).json({ error: "bird not found" });
      }
      res.status(200).json({ birdEditInfo });
    } else {
      const [birdEditInfo] = await BirdModel.find({ _id });
      if (!birdEditInfo) {
        return res.status(404).json({ error: "bird not found" });
      }
      res.status(200).json({ birdEditInfo });
    }
  } catch (error) {
    res.status(500).json({ error: "oops something went wrong" });
  }
};

module.exports = getBirdEdit;
