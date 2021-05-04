const express = require('express');
const routes = require('express').Router();
const cors = require('cors');
const bodyParser = require('body-parser');
const { success, error } = require('consola');
const { connect } = require('mongoose');
const userRoutes = require('./routes/User');
//Bring in the app constant
const { DB, PORT } = require('./config');

//Initialize the application
const app = express();

//middleware access
app.use(cors());
app.use(bodyParser.json());

//User Routers
routes.use('/api/users', userRoutes);

const startApp = async () => {
	try {
		//Connect to the database
		await connect(DB, {
			useFindAndModify: true,
			useUnifiedTopology: true,
			useNewUrlParser: true,
		});

		success({
			message: `Successfully connected to the database \n${DB}`,
			badge: true,
		});

		//Start the server
		app.listen(PORT, () =>
			success({
				message: `Server started on port ${PORT}`,
				badge: true,
			})
		);
	} catch (err) {
		error({
			message: `Unable to connect to the database \n${err.message}`,
			badge: true,
		});
	}
};

startApp();
