const { Router } = require('express');
const { signup_post } = require('../controllers/authController');
const { login_post } = require('../controllers/authController');
const { logout_get } = require('../controllers/authController');

const router = Router();

router.post('/signup', signup_post);
router.post('/login', login_post);
router.get('/logout', logout_get);
module.exports = router;
