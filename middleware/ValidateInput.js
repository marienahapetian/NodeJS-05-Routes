class ValidateInput {
	static validateId(req, res, next) {
		const filmId = parseInt(req.params.id);
		if (isNaN(filmId)) {
			return res.status(400).json({ message: "ID invalide, un nombre est requis." });
		}
		req.filmId = filmId;
		next();
	}

	static validateBody(req, res, next) {
		if (!req.body) return res.status(400).json({ message: "Request Body cannot be empty" });

		next();
	}
}

module.exports = ValidateInput;
