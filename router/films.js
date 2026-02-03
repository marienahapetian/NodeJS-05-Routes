const express = require("express");
const filmRouter = express.Router();
const FilmController = require("../controller/FilmController");
const ValidateInput = require("../middleware/ValidateInput");

// GET /films — tous les films
filmRouter.get("/", FilmController.getAll);

filmRouter.get("/:id", ValidateInput.validateId, FilmController.getById);

// DELETE /films/:id — suppression d'un film
filmRouter.delete("/:id", ValidateInput.validateId, FilmController.delete);

// POST /films — ajout d’un film
filmRouter.post("/", FilmController.create);

// PATCH /films/:id — modification du titre
filmRouter.patch("/:id", ValidateInput.validateId, FilmController.update);

module.exports = filmRouter;
