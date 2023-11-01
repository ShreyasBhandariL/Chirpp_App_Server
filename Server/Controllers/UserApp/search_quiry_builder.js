
function searchProjector(field) {
  let projector = {};
  switch (field) {
    case "size":
      projector = { majorColor: 0, minorColor: 0, beakShape: 0, footShape: 0 };
      break;
    case "majorColor":
      projector = { size: 0, minorColor: 0, beakShape: 0, footShape: 0 };
      break;
    case "minorColor":
      projector = { size: 0, majorColor: 0, beakShape: 0, footShape: 0 };
      break;
    case "beakShape":
      projector = { size: 0, majorColor: 0, minorColor: 0, footShape: 0 };
      break;
    case "footShape":
      projector = { size: 0, majorColor: 0, minorColor: 0, beakShape: 0 };
  }
  return projector;
}
const searchQueryBuilder = async (query = {}) => {
  const { size, majorColor, minorColor, beakShape, footShape } = query;
  const dbQueries = [];
  let wantedFields = {};
  let filteredResult = {};
  if (size) {
    dbQueries.push({ "size.value": size });
    wantedFields = searchProjector("majorColor");
    filteredResult = { majorColor: [] };
  }
  if (majorColor) {
    dbQueries.push({ majorColor: majorColor });
    wantedFields = searchProjector("minorColor");
    filteredResult = { minorColor: [] };
  }
  if (minorColor) {
    dbQueries.push({ minorColor: minorColor });
    wantedFields = searchProjector("beakShape");
    filteredResult = { beakShape: [] };
  }
  if (beakShape) {
    dbQueries.push({ "beakShape.value": beakShape });
    wantedFields = searchProjector("footShape");
    filteredResult = { footShape: [] };
  }
  if (footShape) {
    dbQueries.push({ "footShape.value": footShape });
  }
  if (dbQueries.length === 0) {
    wantedFields = searchProjector("size");
    filteredResult = { size: [] };
  }
  wantedFields._id = 0;
  wantedFields.name = 0;
  return [
    dbQueries.length !== 0 ? { $and: dbQueries } : query,
    wantedFields,
    filteredResult,
  ];
};

module.exports = searchQueryBuilder;
