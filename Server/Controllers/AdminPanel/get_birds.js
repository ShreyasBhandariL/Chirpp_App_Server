const BirdModel = require("../../Models/bird_data");
const getBirds = async (req, res) => {
  try {
    const birds = await BirdModel.find({});
    res.status(200).json({ birds });
  } catch (error) {
    res.status(500).json({ error: "oops something went wrong" });
  }
};

module.exports = getBirds;
