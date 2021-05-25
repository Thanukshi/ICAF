require('dotenv').config;
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const fileUpload = require('express-fileupload');

const app = express();
app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use(
	fileUpload({
		useTempFiles: true,
	})
);

//connect to the db
const URI = process.env.MO

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
	console.log('Server is running on port ', PORT);
});
