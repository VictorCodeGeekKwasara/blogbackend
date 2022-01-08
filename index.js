const express = require('express');
const app = express();
require('dotenv').config();
const authRoutes = require('./routes/authRoutes');
const commentsRoutes = require('./routes/commentsRoutes');
const likesRoutes = require('./routes/likesRoutes');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const port = process.env.PORT || 8001;
const dbURI = process.env.DB_URI;

// middleware
app.use(cors());
app.use(express.json());
app.use(cookieParser());

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

app.use(authRoutes);
app.use(commentsRoutes);
app.use(likesRoutes);
