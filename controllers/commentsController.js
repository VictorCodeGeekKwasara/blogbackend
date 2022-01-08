const Comment = require('../models/Comment');

module.exports.comments_post = async (req, res) => {
	const comment_id = req.body.comment_id || undefined;
	const date = req.body.comment_id || undefined;

	const comments = req.body.comments || undefined;
	const { blogslug, body } = req.body;

	try {
		const comment = await Comment.create({
			blogslug,
			comment_id,
			comments,
			date,
			body,
		});
		res.status(201).json(comment);
	} catch (err) {
		res.status(400).send(err);
	}
};
module.exports.comments_get = (req, res) => {
	res.send('comments gotten');
};
