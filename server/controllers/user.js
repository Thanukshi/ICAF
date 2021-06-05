const User = require('../models/user.model');
const messages = require('../messages/messages');
const bcrypt = require('bcrypt');
const webToken = require('jsonwebtoken');

const { CLIENT_URL } = process.env;
const userControl = {
	register: async (req, res) => {
		try {
			console.log('DATA => ', req.body);
			const { user_name, user_email, password } = req.body;

			if (!user_name || !user_email || !password) {
				return res.status(400).json({
					code: messages.BadCode,
					success: messages.NotSuccess,
					status: messages.BadStatus,
					message: messages.ContentEmpty,
				});
			}
			if (!validateEmail(user_email)) {
				return res.status(400).json({
					code: messages.BadCode,
					success: messages.NotSuccess,
					status: messages.BadStatus,
					message: messages.ValidEmail,
				});
			}

			const user = await User.findOne({ user_email });
			if (user) {
				return res.status(400).json({
					code: messages.BadCode,
					success: messages.NotSuccess,
					status: messages.BadStatus,
					message: messages.AlreadyExistEmail,
				});
			}

			if (!validatePassword(password)) {
				return res.status(400).json({
					code: messages.BadCode,
					success: messages.NotSuccess,
					status: messages.BadStatus,
					message: messages.PasswordValidate,
				});
			}

			const passwordHash = await bcrypt.hash(password, 12);
			console.log(passwordHash);

			const newUser = {
				user_name,
				user_email,
				password: passwordHash,
			};
			console.log('User Details : ', newUser);

			const activate_token = createActivationToken(newUser);
			console.log({ activate_token });

			const url = `${CLIENT_URL}/user/activate/${activate_token}`;

			sendMail(user_email, url);

			return res.status(200).json({
				code: messages.SuccessCode,
				success: messages.success,
				status: messages.SuccessCode,
				message: messages.ActiveAccount,
			});
		} catch (err) {
			return res.status(500).json({
				code: messages.InternalCode,
				success: messages.NotSuccess,
				status: messages.InternalStatus,
				message: err.message,
			});
		}
	},
};

function validateEmail(email) {
	const re =
		/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(email);
}

function validatePassword(password) {
	var re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
	return re.test(password);
}

const createActivationToken = (payload) => {
	return webToken.sign(payload, process.env.ACTIVATION_TOKEN_SECRET, { expiresIn: '10m' });
};

const createAccessToken = (payload) => {
	return webToken.sign(payload, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '20m' });
};

const createRefreshToken = (payload) => {
	return webToken.sign(payload, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '7d' });
};

module.exports = userControl;
