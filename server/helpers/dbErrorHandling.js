'use strict';
const requestMessage = require('../messages/messages');

const UniqueMessage = (error) => {
	let output;
	try {
		let fieldName = error.message.split('.$')[1];
		field = field.split('dub key')[0];
		field = field.substring(0, field.lastIndexOf('_'));
		req.flash('error', [
			{
				code: requestMessage.BadCode,
				status: requestMessage.NotSuccess,
				message: error.message,
				message: 'An account with this ' + field + 'already exists',
			},
		]);

		output = fieldName.charAt(0).toUpperCase() + field.slice(1) + 'already exists';
	} catch (e) {
		output = 'already exists';
	}

	return output;
};

exports.errorHandler = (e) => {
	let message = '';
	if (e.code) {
		switch (e.code) {
			case 11000:
			case 11001:
				message = UniqueMessage(e);
				break;
			default:
				message = requestMessage.DBError;
		}
	} else {
		for (let errorName in e.errors) {
			if (e.errors[errorName].message) {
                message += e.errors[errorName].message
			}
		}
	}
    return message;
};
