const { Router } = require('express');

const {
	comments_post,
	comments_get,
} = require('../controllers/commentsController');

const router = Router();

router.post('/comments', comments_post);
router.get('/comments/:id', comments_get);

module.exports = router;
