const bcrypt = require("bcrypt");
const UserModel = require("../../Models/user_data");
const setPassword = async (req, res) => {
  try {
    const { email, password } = req.body;
    await bcrypt.genSalt(10, (error, salt) => {
      if (error) {
        throw error;
      }
      bcrypt.hash(password, salt, async (error, password) => {
        if (error) {
          throw error;
        }
        const dbResult = await UserModel.updateOne({ email }, { password });
        if (dbResult.modifiedCount) {
          return res
            .status(202)
            .json({ message: "password updated successfully" });
        } else {
          return res.status(404).json({ error: "user not found" });
        }
      });
    });
  } catch (error) {
    res.status(500).json({ error: "oops something went wrong" });
  }
};

module.exports = setPassword;
