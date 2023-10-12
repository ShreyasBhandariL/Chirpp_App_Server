const BirdModel = require("../../Models/bird_data");
const searchQueryBuilder = require("./search_quiry_builder");
const searchBirds = async (req, res) => {
  try {
    const [searchQuery] = searchQueryBuilder(req.query);
    console.log(searchQuery);
    const dbResult = await BirdModel.find(searchQuery, { _id: 0 });
    res.status(200).json(dbResult);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};

module.exports = searchBirds;
