const ValidateInput = require("./ValidateInput");

class ValidateFilmInput extends ValidateInput {
	static validateCreateBody(req, res, next) {
		const { titre, annee_sortie, duree_minutes, note_critique, pays_origine, id_realisateur } = req.body;
		if ([titre, annee_sortie, duree_minutes, pays_origine, id_realisateur].includes(undefined)) {
			return res.status(400).json({ message: "Title, Release Year, Duration, Country and Director are required fields " });
		}

		next();
	}

	static validateUpdateBody(req, res, next) {
		const { titre } = req.body;
		if (titre == undefined) {
			return res.status(400).json({ message: "Film Title is required" });
		}

		next();
	}
}

module.exports = ValidateFilmInput;
