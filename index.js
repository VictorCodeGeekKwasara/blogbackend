const express = require('express');
const app = express();
require('dontenv').config();

app.get('/', (req, res) => {
	res.send('Hie from the internet');
});

app.listen(port, () => {
	console.log(`listening`);
});
