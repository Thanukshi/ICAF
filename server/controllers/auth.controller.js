const requestMessage = require('../messages/messages');

exports.registerController = (req, res, next) => {
	res.status(200).json({
		code: requestMessage.SuccessCode,
		success: requestMessage.Success,
		message: requestMessage.RegisterRouteMessage,
	});
};
