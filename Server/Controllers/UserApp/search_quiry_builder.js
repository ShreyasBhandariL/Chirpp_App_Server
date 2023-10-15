const searchQueryBuilder = (query = {}) => {
  const { size, majorColor, minorColor, beakShape, footShape } = query;
  const dbQueries = [];
  const unwantedFields = {};

  if (size) {
    dbQueries.push({ "size.value": size });
    unwantedFields.size = 0;
  }
  if (majorColor) {
    dbQueries.push({ majorColor: majorColor });
    unwantedFields.majorColor = 0;
  }
  if (minorColor) {
    dbQueries.push({ minorColor: minorColor });
    unwantedFields.minorColor = 0;
  }
  if (beakShape) {
    dbQueries.push({ "beakShape.value": beakShape });
    unwantedFields.beakShape = 0;
  }
  if (footShape) {
    dbQueries.push({ "footShape.value": footShape });
    unwantedFields.footShape = 0;
  }
  unwantedFields._id = 0;
  unwantedFields.name = 0;
  return [dbQueries.length !== 0 ? { $and: dbQueries } : query, unwantedFields];
};

module.exports = searchQueryBuilder;
