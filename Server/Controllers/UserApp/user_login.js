const UserModel = require("../../Models/user_data");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const [userInfo] = await UserModel.find({ email }, { _id: 0 });
    if (!userInfo) {
      return res.status(404).json({ error: "user not found" });
    }
    bcrypt.compare(password, userInfo.password, async (err, compareRes) => {
      if (err) {
        throw err;
      }
      if (compareRes) {
        const token = await jwt.sign(
          {
            fullName: userInfo.fullName,
            email: userInfo.email,
          },
          "chirrp",
          { expiresIn: "1w" }
        );
        res.status(200).json({
          token,
        });
      } else {
        res.status(401).json({ error: "password incorrect" });
      }
    });
  } catch (error) {
    res.status(500).json({ error: "oops something went wrong" });
  }
};

module.exports = userLogin;
