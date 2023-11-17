const BirdModel = require("../../Models/bird_data");
const getBirds = async (req, res) => {
  try {
    const birds = await BirdModel.find(
      {},
      { _id: 0, imageSrc: 1, commonName: 1, kannadaName: 1 }
    );
    if (!birds.length) {
      return res.status(404).json({ error: "birds not found" });
    }
    res.status(200).json({ birds });
  } catch (error) {
    res.status(500).json({ error: "oops something went wrong!" });
  }
};

module.exports = getBirds;
