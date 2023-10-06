const BirdModel = require("../Models/bird_data");
const searchQueryBuilder = ({
  size,
  majorColor,
  minorColor,
  beakShape,
  footShape,
}) => {
  const queries = [];
  const unwantedFields = {};
  if (size) {
    queries.push({ size: { $regex: size, $options: "i" } });
    unwantedFields.size = 0;
  }
  if (majorColor) {
    queries.push({ majorColor: { $regex: majorColor, $options: "i" } });
    unwantedFields.majorColor = 0;
  }
  if (minorColor) {
    queries.push({ minorColor: { $regex: minorColor, $options: "i" } });
    unwantedFields.minorColor = 0;
  }
  if (beakShape) {
    queries.push({ beakShape: { $regex: beakShape, $options: "i" } });
    unwantedFields.beakShape = 0;
  }
  if (footShape) {
    queries.push({ footShape: { $regex: footShape, $options: "i" } });
    unwantedFields.footShape = 0;
  }
  return [{ $and: queries }, unwantedFields];
};
const searchFields = async (req, res) => {
  if (Object.keys(req.query).length === 0) {
    res.status(400).json({ message: "Empty Query Parameters" });
    return;
  }
  const [searchQuery, unwantedFields] = searchQueryBuilder(req.query);
  const result = await BirdModel.find(searchQuery, unwantedFields);
  console.log(result);
};

module.exports = searchFields;
