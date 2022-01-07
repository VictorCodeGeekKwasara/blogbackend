const express = require('express');
const app = express();
require('dotenv').config();

const port = process.env.PORT;

app.get('/', (req, res) => {
	res.send('Hie from the internet');
});

app.listen(port, () => {
	console.log(`listening`);
});
