const BirdModel = require("../../Models/bird_data");
const deleteBird = async (req, res) => {
  try {
    const { commonName } = req.body;
    const deleteResult = await BirdModel.deleteOne({ commonName });
    res.status(200).json({ message: "bird deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "oops something went wrong" });
  }
};

module.exports = deleteBird;
