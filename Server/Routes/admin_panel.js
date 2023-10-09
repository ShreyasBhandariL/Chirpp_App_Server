const routes = require("express").Router();

routes.post("/add_bird", require("../Controllers/AdminPanel/add_bird"));

module.exports = routes;
