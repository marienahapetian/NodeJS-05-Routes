function ValidId(req, res, next) {
	const filmId = parseInt(req.params.id);
	if (isNaN(filmId)) {
		return res.status(400).json({ message: "ID invalide, un nombre est requis." });
	}
	req.filmId = filmId;
	next();
}

module.exports = ValidId;
