const { Router } = require('express');
const { requireAuth } = require('../middleware/authMiddleware');

const {
	comments_post,
	comments_get,
} = require('../controllers/commentsController');

const router = Router();

router.post('/comments', requireAuth, comments_post);
router.get('/comments/:id', comments_get);

module.exports = router;
