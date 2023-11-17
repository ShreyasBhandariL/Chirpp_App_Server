const routes = require("express").Router();

routes.post("/signup", require("../Controllers/AdminPanel/signup"));
routes.post("/add_bird", require("../Controllers/AdminPanel/add_bird"));
routes.post("/login", require("../Controllers/AdminPanel/login"));
routes.get("/get_options", require("../Controllers/AdminPanel/get_options"));
routes.get("/get_birds", require("../Controllers/AdminPanel/get_birds"));
routes.put("/edit_bird/:id", require("../Controllers/AdminPanel/edit_bird"));
routes.get(
  "/get_birds_info",
  require("../Controllers/AdminPanel/get_bird_info")
);
routes.get(
  "/get_birds_edit_info",
  require("../Controllers/AdminPanel/get_bird_edit")
);
routes.post("/delete_bird", require("../Controllers/AdminPanel/delete_bird"));
routes.post("/get_otp", require("../Controllers/AdminPanel/get_otp"));
routes.post("/verify_otp", require("../Controllers/AdminPanel/verify_otp"));
routes.post("/set_password", require("../Controllers/AdminPanel/set_password"));
// routes.post("/delete_bird", require("../Controllers/AdminPanel/delete_bird"));

module.exports = routes;
