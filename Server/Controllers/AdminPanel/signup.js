const AdminModel = require("../../Models/admin_signup");
const bcrypt = require("bcrypt");
const adminSignup = async (req, res) => {
  try {
    const { fullName, email, password } = req.body;
    const [isAdminExists] = await AdminModel.find(
      { email },
      { _id: 0, password }
    );
    if (isAdminExists) {
      return res.status(409).json({ error: "admin already exists" });
    }
    await bcrypt.genSalt(10, (error, salt) => {
      if (error) {
        res.status(500).json({ error: "oops something went wrong" });
      }
      bcrypt.hash(password, salt, async (error, password) => {
        if (error) {
          res.status(500).json({ error: "oops something went wrong" });
        }
        await AdminModel({ fullName, email, password }).save();
      });
    });

    res.status(201).json({ message: "admin registration successfull" });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "oops something went wrong" });
  }
};

module.exports = adminSignup;
