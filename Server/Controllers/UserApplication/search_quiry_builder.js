const searchQueryBuilder = (query = {}) => {
  const { size, majorColor, minorColor, beakShape, footShape } = query;
  const dbQueries = [];
  const unwantedFields = {};
  if (size) {
    dbQueries.push({ size: { $regex: size, $options: "i" } });
    unwantedFields.size = 0;
  }
  if (majorColor) {
    dbQueries.push({ majorColor: { $regex: majorColor, $options: "i" } });
    unwantedFields.majorColor = 0;
  }
  if (minorColor) {
    dbQueries.push({ minorColor: { $regex: minorColor, $options: "i" } });
    unwantedFields.minorColor = 0;
  }
  if (beakShape) {
    dbQueries.push({ beakShape: { $regex: beakShape, $options: "i" } });
    unwantedFields.beakShape = 0;
  }
  if (footShape) {
    dbQueries.push({ footShape: { $regex: footShape, $options: "i" } });
    unwantedFields.footShape = 0;
  }
  unwantedFields._id = 0;
  unwantedFields.name = 0;
  return [dbQueries.length !== 0 ? { $and: dbQueries } : query, unwantedFields];
};

module.exports = searchQueryBuilder;
