const routes = require("express").Router();

routes.post("/signup", require("../Controllers/AdminPanel/admin_signup"));
routes.post("/add_bird", require("../Controllers/AdminPanel/add_bird"));

module.exports = routes;
