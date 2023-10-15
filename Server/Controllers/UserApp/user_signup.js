const UserModel = require("../../Models/user_data");
const OtpModel = require("../../Models/otp");
const bcrypt = require("bcrypt");
const userSignUp = async (req, res) => {
  try {
    const { otp, fullName, email, password } = req.body;
    const [isOtpExists] = await OtpModel.find({ otp });
    if (!isOtpExists) {
      return res
        .status(400)
        .json({ status: false, message: "email verification failed" });
    }
    const [isUserExists] = await UserModel.find({ email });
    if (isUserExists) {
      return res
        .status(400)
        .json({ status: false, message: "user already exists" });
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

    res.status(201).json({ status: true, message: "user signup successfull" });
  } catch (error) {
    console.log(error.message);
    res
      .status(500)
      .json({ status: false, message: "oops something went wrong" });
  }
};

module.exports = userSignUp;
