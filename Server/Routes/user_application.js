const routes = require("express").Router();

routes.get("/search_fields", require("../Controllers/UserApp/search_fields"));

routes.get("/search_birds", require("../Controllers/UserApp/search_birds"));

routes.get(
  "/bird_moreinfo",
  require("../Controllers/UserApp/search_bird_moreinfo")
);

routes.post("/signup", require("../Controllers/UserApp/user_signup"));

routes.post("/login", require("../Controllers/UserApp/user_login"));

routes.post("/get_otp", require("../Controllers/UserApp/get_otp"));

routes.post("/verify_otp", require("../Controllers/UserApp/verify_otp"));

routes.put("/set_password", require("../Controllers/UserApp/set_password"));

routes.get("/live_search", require("../Controllers/UserApp/search_birds_live"));

routes.get("/get_birds", require("../Controllers/UserApp/get_birds"));

module.exports = routes;
