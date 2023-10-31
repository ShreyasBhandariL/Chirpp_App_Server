const AdminModel = require("../../Models/admin_signup");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const [isAdminExists] = await AdminModel.find(
      { email },
      { _id: 0, password: 1 }
    );
    if (!isAdminExists) {
      return res.status(404).json({ error: "admin not found" });
    }
    bcrypt.compare(password, isAdminExists.password, (error, status) => {
      if (error) {
        res.status(500).json({ error: "oops something wen wrong" });
      }
      if (status) {
        const payload = {
          email,
        };
        const token = jwt.sign(payload, "hello", {
          expiresIn: "2h",
        });
        res
          .status(200)
          .cookie("login_token", token, { httpOnly: true })
          .json({ message: "login successfull" });
      } else {
        res.status(401).json({ error: "wrong password" });
      }
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "oops something wen wrong" });
  }
};

module.exports = login;
