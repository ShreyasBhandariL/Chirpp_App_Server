const OtpModel = require("../../Models/otp");
const verifyOtp = async (req, res) => {
  try {
    const { otp } = req.body;
    const [isOtpExists] = await OtpModel.find({ otp }, { email: 1, _id: 0 });
    if (!isOtpExists) {
      return res.status(401).json({ error: "invalid otp" });
    }
    res.status(200).json({ email: isOtpExists.email });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "oops something went wrong" });
  }
};

module.exports = verifyOtp;
