const OtpModel = require("../../Models/otp");
const verifyOtp = async (req, res) => {
  try {
    const { otp } = req.body;
    console.log(otp);
    const [isOtpExists] = await OtpModel.find({ otp });
    if (!isOtpExists) {
      return res.status(400).json({ status: false, message: "invalid otp" });
    }
    res.status(200).json({ status: true });
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = verifyOtp;
