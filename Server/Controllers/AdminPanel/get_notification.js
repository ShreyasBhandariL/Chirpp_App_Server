const NotificationModel = require("../../Models/notification");
const getNotification = async (req, res) => {
  try {
    const notifications = await NotificationModel.find(
      {},
      {
        adminName: 1,
        date: 1,
        time: 1,
      }
    );
    res.status(200).json({ notifications });
  } catch (error) {}
};

module.exports = getNotification;
