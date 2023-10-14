const mongoose = require("mongoose");

const otpSchema = mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    otp: {
      type: String,
      required: true,
    },
    expirationTime: {
      type: Date,
      expires: "4m",
      default: Date.now(),
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("otps", otpSchema);
