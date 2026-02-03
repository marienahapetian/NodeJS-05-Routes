const express = require("express");
const filmRouter = express.Router();
const ValidId = require("../middleware/ValidId");
const FilmController = require("../controller/FilmController");

// GET /films — tous les films
filmRouter.get("/", FilmController.getAll);

filmRouter.get("/:id", ValidId, FilmController.getById);

// DELETE /films/:id — suppression d'un film
filmRouter.delete("/:id", ValidId, FilmController.delete);

// POST /films — ajout d’un film
filmRouter.post("/", FilmController.create);

// PATCH /films/:id — modification du titre
filmRouter.patch("/:id", ValidId, FilmController.update);

module.exports = filmRouter;
