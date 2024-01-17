const AddNotificationModel = require("../../Models/add_bird_notification");
const currentDate = () => {
  const now = new Date();
  const time = `${(now.getHours() % 12 || 12).toString().padStart(2, "0")}:${now
    .getMinutes()
    .toString()
    .padStart(2, "0")} ${now.getHours() >= 12 ? "PM" : "AM"}`;
  return {
    date: `${now.getDate()}-${now.getMonth() + 1}-${now.getFullYear()}`,
    time,
  };
};
async function editBirdNotification(req, res) {
  const { date, time } = currentDate();
  let {
    adminName,
    email,
    commonName,
    scientificName,
    kannadaName,
    identification,
    breedingSeason,
    diet,
    imageSrc,
    size,
    majorColor,
    minorColor,
    beakShape,
    footShape,
    birdKey,
    birdId,
    pastImgFormat,
    isImgEdited,
    imgFormat,
  } = req.body;
  if (typeof size === "string") {
    const sizeImage = size.replace(/[+-]/g, "");
    size = {
      value: size,
      img: `${process.env.Image_URL}/size/${sizeImage}.png`,
    };
  } else {
    size = {
      value: req.body["size.value"],
      img: req.body["size.img"],
    };
  }
  beakShape = {
    value: req.body["beakShape.value"],
    img: req.body["beakShape.img"],
  };
  footShape = {
    value: req.body["footShape.value"],
    img: req.body["footShape.img"],
  };

  const Notification = new AddNotificationModel({
    adminName,
    email,
    commonName,
    scientificName,
    kannadaName,
    identification,
    breedingSeason,
    diet,
    imageSrc,
    size,
    majorColor,
    minorColor,
    beakShape,
    footShape,
    birdKey,
    birdId,
    isEdited: true,
    date,
    time,
    pastImgFormat,
    isImgEdited,
    imgFormat,
  });

  try {
    await Notification.save();
    res.status(200).json({
      message: "notification added successfully",
    });
  } catch (error) {
    res.status(500).json({ error: "oops something went wrong!" });
  }
}

module.exports = editBirdNotification;
