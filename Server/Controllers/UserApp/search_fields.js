const BirdModel = require("../../Models/bird_data");
const searchQueryBuilder = require("./search_quiry_builder");
const birdSizeSort = (filteredResult) => {
  const birdSizeOrder = [
    "sparrow--",
    "sparrow-",
    "sparrow",
    "sparrow+",
    "sparrow++",
    "myna--",
    "myna-",
    "myna",
    "myna+",
    "myna++",
    "crow--",
    "crow-",
    "crow",
    "crow+",
    "crow++",
    "eagle--",
    "eagle-",
    "eagle",
    "eagle+",
    "eagle++",
  ];
  let temp = null;
  let key = 0;
  for (let i = 0; i < birdSizeOrder.length; i++) {
    for (let j = 0; j < filteredResult["size"].length; j++) {
      if (filteredResult["size"][j].value === birdSizeOrder[i]) {
        temp = filteredResult["size"][key];
        filteredResult["size"][key] = filteredResult["size"][j];
        filteredResult["size"][j] = temp;
        key++;
      }
    }
  }
};
const searchFields = async (req, res) => {
  try {
    const [searchQuery, unwantedFields, filteredResult] = searchQueryBuilder(
      req.query
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
      } else if (
        element.majorColor &&
        filteredResult.majorColor.indexOf(element.majorColor) === -1
      ) {
        const appColorCode = element.majorColor.replace("#", "");
        filteredResult.majorColor.push(`ff${appColorCode}`.toUpperCase());
      } else if (
        element.minorColor &&
        filteredResult.minorColor.indexOf(element.minorColor) === -1
      ) {
        const appColorCode = element.minorColor.replace("#", "");
        filteredResult.minorColor.push(`ff${appColorCode}`.toUpperCase());
      } else if (
        element.beakShape &&
        !checkDuplication("beakShape", element.beakShape)
      ) {
        filteredResult.beakShape.push(element.beakShape);
      } else if (
        element.footShape &&
        !checkDuplication("footShape", element.footShape)
      ) {
        filteredResult.footShape.push(element.footShape);
      }
    });

    if (filteredResult["size"]) {
      birdSizeSort(filteredResult);
    }

    res.status(200).json(filteredResult);
  } catch (error) {
    res.status(500).json({ error: "oops something went wrong" });
  }
};

module.exports = searchFields;
