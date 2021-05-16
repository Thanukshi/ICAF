const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const requestMessage = require('./messages/messages');
const cors = require('cors');
const routes = require('./routes');
const connect = require('./config/db');

const app = express();
app.use(bodyParser.json());

require('dotenv').config({
	path: './config/config.env',
});
const PORT = process.env.PORT;

if (process.env.NODE_ENV === 'development') {
	app.use(
		cors({
			origin: process.env.CLIENT_URL,
		})
	);
}

connect();

app.use(morgan('dev'));
//Can get more information about request

app.use('/', routes);

app.use((req, res, next) => {
	res.status(400).json({
		code: requestMessage.SuccessCode,
		success: requestMessage.Success,
		message: requestMessage.ErrorMessage,
	});
});

app.listen(PORT, () => {
	console.log(`Sever is started on ${PORT}`);
});
