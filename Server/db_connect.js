const mongoose = require("mongoose");
const DataBaseName = "chirpp";
const connectDB = async () => {
  try {
    await mongoose.connect(`${process.env.MongoDB_URL}/${DataBaseName}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      writeConcern: { w: "majority" },
    });
    console.log("connected to mongodb");
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = connectDB;
