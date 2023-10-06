const routes = require("express").Router();

routes.get("/search_fields", require("../Controllers/search_fields"));

module.exports = routes;
