const routes = require("express").Router();
const multer = require("multer");
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

routes.get("/auto_login", require("../Controllers/AdminPanel/auto_login"));

routes.post(
  "/add_bird",
  upload.single("imageSrc"),
  require("../Controllers/Middlewares/add_bird"),
  require("../Controllers/AdminPanel/add_bird")
);

routes.get("/get_options", require("../Controllers/AdminPanel/get_options"));

routes.get("/get_birds", require("../Controllers/AdminPanel/get_birds"));

routes.put(
  "/edit_bird/:id",
  upload.single("imageSrc"),
  require("../Controllers/Middlewares/edit_bird"),
  require("../Controllers/AdminPanel/edit_bird")
);

routes.get(
  "/get_birds_info",
  require("../Controllers/AdminPanel/get_bird_info")
);

routes.get(
  "/get_birds_edit_info",
  require("../Controllers/AdminPanel/get_bird_edit")
);

routes.post(
  "/delete_bird",
  require("../Controllers/Middlewares/remove_bird"),
  require("../Controllers/AdminPanel/remove_bird")
);

routes.post("/get_otp", require("../Controllers/AdminPanel/get_otp"));

routes.post("/verify_otp", require("../Controllers/AdminPanel/verify_otp"));

routes.post("/set_password", require("../Controllers/AdminPanel/set_password"));

routes.post(
  "/add_bird_notification",
  upload.single("imageSrc"),
  require("../Controllers/Middlewares/add_bird_notification"),
  require("../Controllers/AdminPanel/add_bird_notification")
);

routes.post(
  "/edit_bird_notification",
  upload.single("imageSrc"),
  require("../Controllers/Middlewares/edit_bird_notification"),
  require("../Controllers/AdminPanel/edit_bird_notification")
);

routes.post(
  "/approve_add_bird",
  require("../Controllers/Middlewares/approve_add_bird"),
  require("../Controllers/AdminPanel/approve_add_bird")
);

routes.post(
  "/approve_edit_bird",
  require("../Controllers/Middlewares/approve_edit_bird"),
  require("../Controllers/AdminPanel/approve_edit_bird")
);

routes.get(
  "/get_notifications",
  require("../Controllers/AdminPanel/get_notifications")
);

routes.post(
  "/approve",
  require("../Controllers/AdminPanel/approve_notification")
);

routes.post(
  "/reject",
  require("../Controllers/Middlewares/reject_notification"),
  require("../Controllers/AdminPanel/reject_notification")
);

routes.get("/logout", require("../Controllers/AdminPanel/logout"));


module.exports = routes;
