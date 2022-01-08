const { Router } = require('express');
const { likes_post, likes_get } = require('../controllers/likesController');

const router = Router();
router.post('/likes', likes_post);
router.get('/likes/:id', likes_get);

module.exports = router;
