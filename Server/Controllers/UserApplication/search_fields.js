const BirdModel = require("../../Models/bird_data");
const searchQueryBuilder = require("./search_quiry_builder");
const searchFields = async (req, res) => {
  try {
    const filteredResult = {
      size: [],
      majorColor: [],
      minorColor: [],
      beakShape: [],
      footShape: [],
    };
    const [searchQuery, unwantedFields] = searchQueryBuilder(req.query);
    const result = await BirdModel.find(searchQuery, unwantedFields);
    result.forEach((element) => {
      if (element.size && filteredResult.size.indexOf(element.size) === -1) {
        filteredResult.size.push(element.size);
      }
      if (
        element.majorColor &&
        filteredResult.majorColor.indexOf(element.majorColor) === -1
      ) {
        filteredResult.majorColor.push(element.majorColor);
      }
      if (
        element.minorColor &&
        filteredResult.minorColor.indexOf(element.minorColor) === -1
      ) {
        filteredResult.minorColor.push(element.minorColor);
      }
      if (
        element.beakShape &&
        filteredResult.beakShape.indexOf(element.beakShape) === -1
      ) {
        filteredResult.beakShape.push(element.beakShape);
      }
      if (
        element.footShape &&
        filteredResult.footShape.indexOf(element.footShape) === -1
      ) {
        filteredResult.footShape.push(element.footShape);
      }
    });

    res.status(200).json(filteredResult);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};

module.exports = searchFields;
