const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { success, error } = require('consola');
const { connect } = require('mongoose');

//Bring in the app constant
const { DB, PORT } = require('./config');

//Initialize the application
const app = express();

//Connect to the database
connect(DB, {
	useFindAndModify: true,
	useUnifiedTopology: true,
	useNewUrlParser: true,
})
	.then(() =>
		success({
			message: `Successfully connected to the database \n${DB}`,
			badge: true,
		})
	)
	.catch((err) =>
		error({
			message: `Unable to connect to the database \n${err.message}`,
			badge: true,
		})
	);

//Initialize the server
app.listen(PORT, () =>
	success({
		message: `Server started on port ${PORT}`,
		badge: true,
	})
);
