const UserModel = require("../../Models/user_data");
const bcrypt = require("bcrypt");
const userSignUp = async (req, res) => {
  try {
    const { fullName, email, password } = req.body;
    const isUserExists = await UserModel.find({ email });
    if (isUserExists.length !== 0) {
      return res.status(422).json({ message: "user already exists" });
    }
    await bcrypt.genSalt(10, (err, salt) => {
      if (err) {
        throw err;
      }
      bcrypt.hash(password, salt, async (err, password) => {
        if (err) {
          throw err;
        }
        const newUser = UserModel({
          fullName,
          email,
          password,
        });
        await newUser.save();
      });
    });

    res.status(200).json({ message: "user signup successful" });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};

module.exports = userSignUp;
