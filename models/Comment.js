const mongoose = require('mongoose');

const commentSchema = mongoose.Schema({
	blogslug: String,
	comment_id: mongoose.Schema.Types.ObjectId,
	date: { type: Date, default: Date.now },
	body: {
		type: String,
		required: true,
	},
	comments: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Comment',
		},
	],
});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;
