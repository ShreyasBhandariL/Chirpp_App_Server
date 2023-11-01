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
const searchQueryBuilder = (query = {}) => {
  const { size, majorColor, minorColor, beakShape, footShape } = query;
  const dbQueries = [];
  let unwantedFields = {};
  let filteredResult = {};
  if (size) {
    dbQueries.push({ "size.value": decodeURIComponent(size) });
    unwantedFields = searchProjector("majorColor");
    filteredResult = { majorColor: [] };
  }
  if (majorColor) {
    dbQueries.push({ majorColor: majorColor });
    unwantedFields = searchProjector("minorColor");
    filteredResult = { minorColor: [] };
  }
  if (minorColor) {
    dbQueries.push({ minorColor: minorColor });
    unwantedFields = searchProjector("beakShape");
    filteredResult = { beakShape: [] };
  }
  if (beakShape) {
    dbQueries.push({ "beakShape.value": beakShape });
    unwantedFields = searchProjector("footShape");
    filteredResult = { footShape: [] };
  }
  if (footShape) {
    dbQueries.push({ "footShape.value": footShape });
  }
  if (dbQueries.length === 0) {
    unwantedFields = searchProjector("size");
    filteredResult = { size: [] };
  }
  unwantedFields._id = 0;
  unwantedFields.__v = 0;
  unwantedFields.commonName = 0;
  unwantedFields.scientificName = 0;
  unwantedFields.kannadaName = 0;
  unwantedFields.identification = 0;
  unwantedFields.breedingSeason = 0;
  unwantedFields.diet = 0;
  unwantedFields.imageSrc = 0;
  return [
    dbQueries.length !== 0 ? { $and: dbQueries } : query,
    unwantedFields,
    filteredResult,
  ];
};

module.exports = searchQueryBuilder;
