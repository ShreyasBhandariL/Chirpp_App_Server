const BirdModel = require("../../Models/bird_data");
const searchBirdsLive = async (req, res) => {
  try {
    const { query } = req.query;
    const results = [];
    const dbResults = await BirdModel.find(
      {
        $or: [
          {
            commonName: { $regex: query, $options: "i" },
          },
          {
            scientificName: { $regex: query, $options: "i" },
          },
        ],
      },
      { _id: 0, commonName: 1 }
    );
    dbResults.forEach((value) => {
      results.push(value.commonName);
    });
    res.status(200).json({ results });
  } catch (error) {
    res.status(500).json({ error: "oops something went wrong" });
  }
};

module.exports = searchBirdsLive;
