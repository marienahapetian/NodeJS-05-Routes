function Error404(req, res) {
	res.status(404).json({ message: "Route non trouvée." });
}

module.exports = Error404;
