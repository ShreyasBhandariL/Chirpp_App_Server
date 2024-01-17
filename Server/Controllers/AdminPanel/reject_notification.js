const sendGmail = require("../Others/send_gmail");
const mongoose = require("mongoose");
const NotificationModel = require("../../Models/add_bird_notification");
const rejectNotification = async (req, res) => {
  try {
    let { id, message, email } = req.body;
    id = new mongoose.Types.ObjectId(id);
    await NotificationModel.deleteOne({ _id: id });
    const result = await sendGmail(email, message);
    res.status(200).json({ message: result });
  } catch (error) {
    res.status(500).json({ error: "oops something went wrong!" });
  }
};

module.exports = rejectNotification;
