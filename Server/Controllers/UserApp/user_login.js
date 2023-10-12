const UserModel = require("../../Models/user_data");
const bcrypt = require("bcrypt");
const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const [userInfo] = await UserModel.find({ email }, { _id: 0 });
    if (!userInfo) {
      return res.status(400).json({ status: false, message: "user not found" });
    }
    bcrypt.compare(password, userInfo.password, (err, compareRes) => {
      if (err) {
        throw err;
      }
      if (compareRes) {
        res.status(200).json({
          status: true,
          name: userInfo.fullName,
          email: userInfo.email,
        });
      } else {
        res.status(401).json({ status: false, message: "password incorrect" });
      }
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};

module.exports = userLogin;
