const NotificationModel = require("../../Models/notification");
const currentDate = () => {
  const now = new Date();
  const time = `${(now.getHours() % 12 || 12).toString().padStart(2, "0")}:${now
    .getMinutes()
    .toString()
    .padStart(2, "0")} ${now.getHours() >= 12 ? "PM" : "AM"}`;
  return {
    date: now,
    time,
    indDate: `${now.getDate()}-${
      now.getMonth() + 1
    }-${now.getFullYear()}   ${time}`,
  };
};
const add_notification = async (req, res) => {
  const { date, time } = currentDate();
  try {
    let {
      adminName,
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
    } = req.body;
    const sizeImage = size.replace(/[+-]/g, "");
    size = {
      value: size,
      img: `${process.env.Image_URL}/size/${sizeImage}.png`,
    };
    const newBirdModel = new NotificationModel({
      adminName,
      date,
      time,
      commonName,
      scientificName,
      kannadaName,
      identification,
      breedingSeason,
      diet,
      imageSrc,
      size: size,
      majorColor,
      minorColor,
      beakShape,
      footShape,
    });
    await newBirdModel.save();
    res.status(200).json({ message: "bird data updated successfully" });
  } catch (error) {
    res.status(500).json({ errror: "oops something went wrong" });
  }
};

module.exports = add_notification;
