const BirdModel = require("../../Models/bird_data");
const NotificationModel = require("../../Models/add_bird_notification");
const getBirdsInfo = async (req, res) => {
  try {
    const birdsInfo = await BirdModel.find(
      {},
      { commonName: 1, kannadaName: 1, birdKey: 1, imageSrc: 1 }
    ).lean();
    const notificationCount = await NotificationModel.countDocuments();
    if (!birdsInfo.length) {
      res.status(200).json({ birdsInfo: [], notificationCount });
      return;
    }
    for (let i = 0; i < birdsInfo.length; i++) {
      const imageSrc = birdsInfo[i].imageSrc;
      const formatLastIndex = birdsInfo[i].imageSrc.lastIndexOf(".");
      const imgFormat = imageSrc.substring(
        formatLastIndex + 1,
        imageSrc.length
      );
      birdsInfo[i].imgFormat = imgFormat;
      const [isNotificationExists] = await NotificationModel.find(
        {
          birdId: birdsInfo[i]._id.toString(),
        },
        { commonName: 1 }
      );
      if (isNotificationExists) {
        birdsInfo[i].isNotificationExists = true;
      } else {
        birdsInfo[i].isNotificationExists = false;
      }
    }
    res.status(200).json({ birdsInfo, notificationCount });
  } catch (error) {
    res.status(500).json({ error: "oops something went wrong" });
  }
};

module.exports = getBirdsInfo;
