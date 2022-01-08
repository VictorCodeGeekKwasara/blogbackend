const User = require('../models/User');
const jwt = require('jsonwebtoken');
require('dotenv').config();

// handle errors

const handleErrors = (err) => {
	let errors = { name: '', email: '', password: '' };

	// login errors

	if (err.message === 'incorrect password') {
		errors.password = 'Incorrect password please try again';
	}
	if (err.message === 'inorrect email') {
		errors.email = 'Inorrect email please try again';
	}

	// duplicate error code
	if (err.code === 11000) {
		const nmerr = 'name' in err.keyPattern;
		const emerr = 'email' in err.keyPattern;
		emerr && (errors.email = 'that email is already registered');
		nmerr && (errors.name = 'that name is already registered');
	}

	// validation errors

	if (err.message.includes('User validation failed')) {
		Object.values(err.errors).forEach(({ properties }) => {
			errors[properties.path] = properties.message;
		});
	}

	return errors;
};

// max age of cookie 3 days in seconds

const maxAge = 3 * 24 * 60 * 60;

// create jwt
const createToken = (id) => {
	return jwt.sign({ id }, process.env.JWT_SECRET, {
		expiresIn: maxAge,
	});
};

module.exports.signup_post = async (req, res) => {
	const { name, email, password } = req.body;

	try {
		const user = await User.create({ name, email, password });

		const token = createToken(user._id);
		res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
		res.status(201).json({ user: user._id });
	} catch (err) {
		const errors = handleErrors(err);
		res.status(400).json({ errors });
	}
};
module.exports.login_post = async (req, res) => {
	const { email, password } = req.body;

	try {
		const user = await User.login(email, password);
		const token = createToken(user._id);
		res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
		res.status(200).json({ user: user._id });
	} catch (err) {
		const errors = handleErrors(err);
		res.status(400).json({ errors });
	}
};
