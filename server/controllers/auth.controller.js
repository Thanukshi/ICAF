const requestMessage = require('../messages/messages');
const User = require('../models/auth.model');
const expressJwt = require('express-jwt');
const _ = require('lodash');
const { OAuth2Client } = require('google-auth-library');
const fetch = require('node-fetch');
const { validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const { errorHandler } = require('../helpers/dbErrorHandling');
const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.MAIL_KEY);

exports.registerController = (req, res, next) => {
	const { name, email, password } = req.body;
	console.log('name => ' + name + ', email => ' + email + ', Password =>' + password);
	const errors = validationResult(req);

	if (!errors.isEmpty()) {
		const FirstError = errors.array().map((error) => error.message)[0];
		res.status(200).json({
			code: requestMessage.BadCode,
			success: requestMessage.NotSuccess,
			message: FirstError,
		});
	} else {
		User.findOne({
			email,
		}).exec((e, user) => {
			if (user) {
				return res.status(400).json({
					code: requestMessage.BadCode,
					success: requestMessage.NotSuccess,
					message: requestMessage.AlreadyExistEmail,
				});
			}
		});

		const token = jwt.sign(
			{
				name,
				email,
				password,
			},
			process.env.JWT_ACCOUNT_ACTIVATION,
			{
				expiresIn: '30min',
			}
		);

		const emailData = {
			from: process.env.EMAIL_FROM,
			to: email,
			subject: requestMessage.EmailSubject,
			html: `
            <h1>Please Click to link to activate your account.. </h1>
            <p>${process.env.CLIENT_URL}/users/activate/${token}</p>
            <hr/>
            <p>This email contains sensitive information.</p>
            <p>${process.env.CLIENT_URL}</p>
            `,
		};

		sgMail
			.send(emailData)
			.then(() => {
				return res.status(200).json({
					code: requestMessage.SuccessCode,
					status: requestMessage.Success,
					message: `Email has been sent to  ${email}`,
				});
			})
			.catch((err) => {
				return res.status(400).json({
					code: requestMessage.BadCode,
					status: requestMessage.NotSuccess,
					message: "fjdah",
					error: errorHandler(err),
				});
			});
	}
};
