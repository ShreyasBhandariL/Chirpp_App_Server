const OtpModel = require("../../Models/otp");
const verifyOtp = async (req, res) => {
  try {
    const { otp } = req.body;
    const [isOtpExists] = await OtpModel.find({ otp }, { email: 1, _id: 0 });
    if (!isOtpExists) {
      return res.status(400).json({ status: false, message: "invalid otp" });
    }
    res.status(200).json({ status: true, email: isOtpExists.email });
  } catch (error) {
    console.log(error.message);
    res
      .status(500)
      .json({ status: false, message: "oops something went wrong" });
  }
};

module.exports = verifyOtp;
