const { Bookmark } = require("../models");

module.exports = {
	async index(req, res) {
		try {
			const bookmark = await Bookmark.findOne({
				where: {
					songId: req.query.songId,
					userId: req.query.userId
				}
			});

			res.status(200).json(bookmark);
		} catch (err) {
			res.status(500).send({
				error: "An error has occurred trying to fetch the bookmark."
			});
		}
	},
	async createBookmark(req, res) {
		try {
			const { songId, userId } = req.body.params;
			const bookmark = await Bookmark.findOne({
				where: {
					songId: songId,
					userId: userId
				}
			});

			if (bookmark) {
				res.status(400).send({
					error: "Bookmark already exists."
				});
			}

			const newBookmark = await Bookmark.create({
				songId: songId,
				userId: userId
			});

			res.status(200).json(newBookmark);
		} catch (err) {
			res.status(500).send({
				error: "An error has occurred trying to add the bookmark."
			});
		}
	},
	async deleteBookmark(req, res) {
		try {
			const bookmark = await Bookmark.destroy({
				where: {
					id: req.params.bookmarkId
				}
			});

			res.status(200).json(bookmark);
		} catch (err) {
			res.status(500).send({
				error: "An error has occurred trying to delete the bookmark."
			});
		}
	}
};
