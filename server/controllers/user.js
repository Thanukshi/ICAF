const User = require('../models/user.model');
const messages = require('../messages/messages');

const userControl = {
	register: async (req, res) => {
		try {
			return res.status(200).json({
				code: messages.SuccessCode,
				success: messages.success,
				status: messages.SuccessCode,
				message: 'Register Test',
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

module.exports = userControl;
