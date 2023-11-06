const BirdModel = require("../../Models/bird_data");
const getBirdsInfo = async (req, res) => {
  try {
    const birdsInfo = await BirdModel.find(
      {},
      { commonName: 1, kannadaName: 1 }
    );
    res.status(200).json({ birdsInfo });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "oops something went wrong" });
  }
};

module.exports = getBirdsInfo;
