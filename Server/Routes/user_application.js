const routes = require("express").Router();

routes.get("/search_fields", require("../Controllers/UserApp/search_fields"));
routes.get("/search_birds", require("../Controllers/UserApp/search_birds"));

routes.post("/signup", require("../Controllers/UserApp/user_signup"));
routes.post("/login", require("../Controllers/UserApp/user_login"));

module.exports = routes;
