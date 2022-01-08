const { Router } = require('express');
const { signup_post } = require('../controllers/authController');
const { login_post } = require('../controllers/authController');

const router = Router();

router.post('/signup', signup_post);
router.post('/login', login_post);

module.exports = router;
