const express = require("express");
const app = express();
const filmRouter = require("./router/films");
const realisateurRouter = require("./router/realisateurs");
const HomeController = require("./controller/HomeController");
const Error404 = require("./middleware/Error404");
const ErrorServer = require("./middleware/ErrorServer");
const Logger = require("./middleware/Logger");

app.use(express.json());
app.use(Logger);
app.get("/", HomeController);
app.use("/realisateurs", realisateurRouter);
app.use("/films", filmRouter);

// Middleware de rattrapage 404
app.use(ErrorServer);
app.use(Error404);

const PORT = 3000;
app.listen(PORT, () => {
	console.log(`🎥 Serveur CineClub démarré sur http://localhost:${PORT}`);
});
