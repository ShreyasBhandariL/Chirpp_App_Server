const BirdModel = require("../../Models/bird_data");
const searchBirdsLive = async (req, res) => {
  try {
    const { query } = req.query;
    const dbResults = await BirdModel.find(
      {
        $or: [
          {
            name: { $regex: `^${query}`, $options: "i" },
          },
        ],
      },
      { _id: 0 }
    );
    res.status(200).json({ status: true, birds: dbResults });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ status: false, error: error.message });
  }
};

module.exports = searchBirdsLive;
