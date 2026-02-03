const express = require("express");
const realisateurRouter = express.Router();
const fs = require("fs");
let realisateurs = require("../data/realisateurs.json");

realisateurRouter.get("/", (req, res) => {
	res.json(realisateurs);
});

module.exports = realisateurRouter;
