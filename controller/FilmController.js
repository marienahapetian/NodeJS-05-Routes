let films = require("../data/films.json");
const path = require("path");
const fs = require("fs");
const dataPath = path.join(__dirname, "../data/films.json");

class FilmController {
	static getAll(req, res) {
		return res.json(films);
	}

	static getById(req, res) {
		const film = films.find((f) => f.id === req.filmId);
		if (!film) {
			return res.status(404).json({ message: "Film introuvable." });
		}
		res.json(film);
	}

	static create(req, res) {
		const nouveauFilm = req.body;

		if (films.some((f) => f.titre === nouveauFilm.titre)) {
			return res.status(400).json({ message: "Un film avec ce Titre existe déjà." });
		}

		nouveauFilm.id = films[films.length - 1].id + 1;
		console.log(films);

		films.push(nouveauFilm);

		console.log(films);

		try {
			fs.writeFileSync(dataPath, JSON.stringify(films, null, 2));
			res.status(201).json({ message: "Film ajouté avec succès", film: nouveauFilm });
		} catch (err) {
			res.status(500).json({ message: "Erreur lors de l'ajout du film." });
		}
	}

	static update(req, res) {
		const film = films.find((f) => f.id === req.filmId);
		if (!film) {
			return res.status(404).json({ message: "Film à modifier introuvable." });
		}

		film.titre = req.body.titre;

		try {
			fs.writeFileSync(dataPath, JSON.stringify(films, null, 2));
			res.status(200).json({ message: "Titre du film mis à jour.", film });
		} catch (err) {
			res.status(500).json({ message: "Erreur lors de la mise à jour." });
			// ou next(err);
		}
	}

	static delete(req, res) {
		const index = films.findIndex((f) => f.id === req.filmId);
		if (index === -1) {
			return res.status(404).json({ message: "Film à supprimer introuvable." });
		}

		films.splice(index, 1);

		try {
			fs.writeFileSync(dataPath, JSON.stringify(films, null, 2));
			res.status(204).end();
		} catch (err) {
			console.error("Erreur d'écriture :", err);
			res.status(500).json({ message: "Erreur lors de la suppression." });
		}
	}
}

module.exports = FilmController;
