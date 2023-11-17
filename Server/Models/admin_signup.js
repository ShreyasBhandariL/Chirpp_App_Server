const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  root: {
    type: Boolean,
    default: false,
    required: true,
  },
});

module.exports = mongoose.model("admins", adminSchema);
