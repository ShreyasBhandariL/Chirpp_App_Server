const routes = require("express").Router();

routes.get(
  "/search_fields",
  require("../Controllers/UserApplication/search_fields")
);
routes.get(
  "/search_birds",
  require("../Controllers/UserApplication/search_birds")
);

routes.post("/signup", require("../Controllers/UserApplication/user_signup"));

module.exports = routes;
