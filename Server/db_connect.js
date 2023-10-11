const mongoose = require("mongoose");
const DataBaseName = "ChirrpApp";
const connectDB = async () => {
  try {
    await mongoose.connect(`${process.env.MongoDB_URL}/${DataBaseName}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("connected to mongodb");
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = connectDB;
