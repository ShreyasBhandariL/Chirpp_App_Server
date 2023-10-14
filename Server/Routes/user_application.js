const routes = require("express").Router();

routes.get("/search_fields", require("../Controllers/UserApp/search_fields"));
routes.get("/search_birds", require("../Controllers/UserApp/search_birds"));
routes.post("/signup", require("../Controllers/UserApp/user_signup"));
routes.post("/login", require("../Controllers/UserApp/user_login"));
routes.get("/get_otp", require("../Controllers/UserApp/get_otp"));
routes.post("/verify_otp", require("../Controllers/UserApp/verify_otp"));
routes.put("/set_password", require("../Controllers/UserApp/set_password"));
routes.get("/live_search", require("../Controllers/UserApp/search_birds_live"));

module.exports = routes;
