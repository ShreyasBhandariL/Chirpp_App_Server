const BirdModel = require("../../Models/bird_data");
const searchQueryBuilder = require("./search_quiry_builder");
const searchBirds = async (req, res) => {
  try {
    if (req.query.start) {
      let { start, end } = req.query;
      if (!end) {
        end = 0;
      }
      const birdsCount = await BirdModel.countDocuments();
      if (start >= birdsCount) {
        return res.status(400).json({ status: false, birdsCount });
      }
      const dbResult = await BirdModel.find({}, { _id: 0 })
        .skip(start)
        .limit(end);

      return res.status(200).json({ status: true, birds: dbResult });
    }
    const [searchQuery] = searchQueryBuilder(req.query);
    const dbResult = await BirdModel.find(searchQuery, { _id: 0 });
    res.status(200).json({ stauts: true, birds: dbResult });
  } catch (error) {
    console.log(error.message);
    res
      .status(500)
      .json({ status: false, message: "oops something went wrong" });
  }
};

module.exports = searchBirds;
