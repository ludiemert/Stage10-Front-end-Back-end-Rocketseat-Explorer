const { Router } = require("express");

const LinksController = require("../controllers/LinksController");

const linksRoutes = Router();

const linksController = new LinksController();

linksRoutes.get("/:movie_id", linksController.index);

module.exports = linksRoutes;