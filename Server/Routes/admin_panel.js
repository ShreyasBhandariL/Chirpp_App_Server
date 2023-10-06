const routes = require("express").Router();

routes.post("/add_bird", require("../Controllers/add_bird"));

module.exports = routes;
