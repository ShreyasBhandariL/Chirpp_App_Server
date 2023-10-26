const BirdModel = require("../../Models/bird_data");
async function searchFieldImages(query, requiredFields) {
  const [searchResult] = await BirdModel.find(query, requiredFields).limit(1);
  return searchResult;
}
const searchQueryBuilder = async (query = {}, filteredResult) => {
  const { size, majorColor, minorColor, beakShape, footShape } = query;
  const dbQueries = [];
  const unwantedFields = {};

  if (size) {
    dbQueries.push({ "size.value": size });
    const result = await searchFieldImages(
      { "size.value": size },
      { size: 1, _id: 0 }
    );
    filteredResult.size.push(result.size);
    unwantedFields.size = 0;
  }
  if (majorColor) {
    dbQueries.push({ majorColor: majorColor });
    filteredResult.majorColor.push(majorColor);
    unwantedFields.majorColor = 0;
  }
  if (minorColor) {
    dbQueries.push({ minorColor: minorColor });
    filteredResult.minorColor.push(minorColor);
    unwantedFields.minorColor = 0;
  }
  if (beakShape) {
    dbQueries.push({ "beakShape.value": beakShape });
    const result = await searchFieldImages(
      { "beakShape.value": beakShape },
      { beakShape: 1, _id: 0 }
    );
    filteredResult.beakShape.push(result.beakShape);
    unwantedFields.beakShape = 0;
  }
  if (footShape) {
    dbQueries.push({ "footShape.value": footShape });
    const result = await searchFieldImages(
      { "footShape.value": footShape },
      { footShape: 1, _id: 0 }
    );
    filteredResult.footShape.push(result.footShape);
    unwantedFields.footShape = 0;
  }
  unwantedFields._id = 0;
  unwantedFields.name = 0;
  return [dbQueries.length !== 0 ? { $and: dbQueries } : query, unwantedFields];
};

module.exports = searchQueryBuilder;
