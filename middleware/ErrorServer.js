function ErrorServer(err, req, res, next) {
	console.error("Erreur attrapée :", err.stack);
	res.status(500).json({ message: "Erreur interne du serveur." });
}

module.exports = ErrorServer;
