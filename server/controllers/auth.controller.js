const requestMessage = require('../messages/messages');
const User = require('../models/auth.model');
const expressJwt = require('express-jwt');
const _ = require('lodash');
const { OAuth2Client } = require('google-auth-library');
const fetch = require('node-fetch');
const { validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const {errorHandler} = require('../helpers/dbErrorHandling')

exports.registerController = (req, res, next) => {
	res.status(200).json({
		code: requestMessage.SuccessCode,
		success: requestMessage.Success,
		message: requestMessage.RegisterRouteMessage,
	});
};
