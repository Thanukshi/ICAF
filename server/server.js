const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
require('dotenv').config({
	path: './config/config.env',
});
const requestMessage = require('./messages/messages');
const PORT = process.env.PORT;
const cors = require('cors');
const routes = require('./routes');

const app = express();

if (process.env.NODE_ENV === 'development') {
	app.use(
		cors({
			origin: process.env.CLIENT_URL,
		})
	);
}

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
