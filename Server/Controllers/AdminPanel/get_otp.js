const AdminModel = require("../../Models/admin_signup");
const OtpModel = require("../../Models/otp");
const generateOtp = require("../UserApp/generate_otp");
const sendGmail = require("../UserApp/send_gmail");
const getOtp = async (req, res) => {
  try {
    const { email } = req.body;
    const [searchEmail] = await AdminModel.find(
      { email },
      { _id: 0, email: 1 }
    );
    if (!searchEmail) {
      return res.status(404).json({ error: "admin not exists" });
    }
    const otp = generateOtp(5);
    const gmailStatus = await sendGmail(email, otp, 3, false);
    await OtpModel({
      email,
      otp,
      expirationTime: new Date(Date.now() + 3 * 60 * 1000),
    }).save();
    res.status(200).json({ message: gmailStatus });
  } catch (error) {
    res.status(500).json({ error: "oops something went wrong" });
  }
};

module.exports = getOtp;
