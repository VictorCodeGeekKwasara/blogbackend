const express = require('express');
const app = express();
require('dotenv').config();

const mongoose = require('mongoose');

const port = process.env.PORT;
const dbURI = process.env.DB_URI;

mongoose
	.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
	.then((result) =>
		app.listen(port, () => {
			console.log(`listening`);
		})
	)
	.catch((err) => console.log(err));
app.get('/', (req, res) => {
	res.send('Hie from the internet');
});
