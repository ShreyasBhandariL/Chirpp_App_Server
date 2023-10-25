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
    const [searchQuery, unwantedFields] = await searchQueryBuilder(
      req.query,
      filteredResult
    );
    const result = await BirdModel.find(searchQuery, unwantedFields);
    const checkDuplication = (field, element) => {
      for (let i = 0; i < filteredResult[field].length; i++) {
        if (filteredResult[field][i].value === element.value) {
          return true;
        }
      }
      return false;
    };
    result.forEach((element) => {
      if (element.size && !checkDuplication("size", element.size)) {
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
        !checkDuplication("beakShape", element.beakShape)
      ) {
        filteredResult.beakShape.push(element.beakShape);
      }
      if (
        element.footShape &&
        !checkDuplication("footShape", element.footShape)
      ) {
        filteredResult.footShape.push(element.footShape);
      }
    });

    res.status(200).json(filteredResult);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ status: false, message: "oops something went wrong" });
  }
};

module.exports = searchFields;
