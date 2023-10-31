const routes = require("express").Router();

routes.post("/signup", require("../Controllers/AdminPanel/signup"));
routes.post("/add_bird", require("../Controllers/AdminPanel/add_bird"));
routes.post("/login", require("../Controllers/AdminPanel/login"));

module.exports = routes;
