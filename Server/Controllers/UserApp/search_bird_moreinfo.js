const BirdModel = require("../../Models/bird_data");
const birdMoreInfo = async (req, res) => {
  try {
    const { commonName } = req.query;
    const [birdInfo] = await BirdModel.find(
      { commonName },
      {
        _id: 0,
        __v: 0,
        size: 0,
        majorColor: 0,
        minorColor: 0,
        beakShape: 0,
        footShape: 0,
      }
    );
    if (!birdInfo) {
      return res.status(404).json({ error: "bird not found" });
    }
    res.status(200).json({ birdInfo });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "oops something went wrong" });
  }
};

module.exports = birdMoreInfo;
